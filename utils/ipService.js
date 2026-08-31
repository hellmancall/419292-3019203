import axios from "axios";
import { buildApiUrl } from "../config/api";
import {
  retryWithBackoff,
  RETRY_CONFIGS,
  fetchWithTimeout,
} from "./retryUtils";

export class IPService {
  static isKnownValue(value) {
    return Boolean(
      value &&
        typeof value === "string" &&
        value.trim() !== "" &&
        value.toLowerCase() !== "unknown"
    );
  }

  static normalizeLocationData(data = {}) {
    return {
      country:
        data.country_name ||
        data.country ||
        null,
      countryCode:
        data.country_code ||
        data.countryCode ||
        (data.country_name ? null : data.country) ||
        null,
      city: data.city || data.city_name || null,
    };
  }

  static async fetchIPAddress() {
    return retryWithBackoff(async () => {
      try {
        const response = await fetchWithTimeout(
          "https://api.ipify.org?format=json",
          {},
          8000
        );

        if (!response.ok) {
          const error = new Error(
            `HTTP ${response.status}: ${response.statusText}`
          );
          error.response = { status: response.status };
          throw error;
        }

        const data = await response.json();

        if (!data.ip) {
          throw new Error("Invalid response: IP address not found");
        }

        return data.ip;
      } catch (error) {
        console.error("Error fetching IP address:", error);
        throw error;
      }
    }, RETRY_CONFIGS.EXTERNAL_API);
  }

  static async fetchLocationData(ip) {
    return retryWithBackoff(async () => {
      try {
        const providers = [
          async () => {
            const response = await fetchWithTimeout(
              `https://ipapi.co/${ip}/json`,
              {},
              8000
            );

            if (!response.ok) {
              const error = new Error(
                `HTTP ${response.status}: ${response.statusText}`
              );
              error.response = { status: response.status };
              throw error;
            }

            const data = await response.json();

            if (data.error) {
              throw new Error(
                `Location API error: ${data.reason || data.error}`
              );
            }

            return this.normalizeLocationData(data);
          },
          async () => {
            const response = await fetchWithTimeout(
              `https://ipwho.is/${ip}`,
              {},
              8000
            );

            if (!response.ok) {
              const error = new Error(
                `HTTP ${response.status}: ${response.statusText}`
              );
              error.response = { status: response.status };
              throw error;
            }

            const data = await response.json();

            if (data.success === false) {
              throw new Error(
                `Location API error: ${data.message || "ipwho.is failed"}`
              );
            }

            return this.normalizeLocationData(data);
          },
        ];

        let bestLocation = { country: null, city: null, countryCode: null };
        let lastError = null;

        for (const provider of providers) {
          try {
            const location = await provider();
            bestLocation = {
              country: bestLocation.country || location.country,
              countryCode: bestLocation.countryCode || location.countryCode,
              city: bestLocation.city || location.city,
            };

            if (
              this.isKnownValue(bestLocation.country) &&
              this.isKnownValue(bestLocation.city)
            ) {
              break;
            }
          } catch (error) {
            lastError = error;
          }
        }

        if (
          !this.isKnownValue(bestLocation.country) &&
          !this.isKnownValue(bestLocation.city) &&
          !this.isKnownValue(bestLocation.countryCode)
        ) {
          throw lastError || new Error("No location data found");
        }

        return bestLocation;
      } catch (error) {
        console.error("Error fetching location data:", error);
        throw error;
      }
    }, RETRY_CONFIGS.EXTERNAL_API);
  }

  static async checkBan(ip) {
    return retryWithBackoff(async () => {
      try {
        const response = await axios.get(buildApiUrl(`/api/checkBan/${ip}`), {
          timeout: 8000,
        });
        return response.data.data;
      } catch (error) {
        console.error("Error checking ban:", error);
        throw error;
      }
    }, RETRY_CONFIGS.INTERNAL_API);
  }

  static async banIP(ip) {
    return retryWithBackoff(async () => {
      try {
        await axios.get(buildApiUrl(`/api/ban/${ip}`), {
          timeout: 8000,
        });
        return true;
      } catch (error) {
        console.error("Error banning IP:", error);
        throw error;
      }
    }, RETRY_CONFIGS.INTERNAL_API);
  }

  static async redirectToBannedSite() {
    window.location.href = "https://www.ferrari.com/en-EN/corporate/career";
  }
}
