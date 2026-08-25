import React, { useState } from "react";
import Image from "next/image";
import LoadingSpinner from "../ui/LoadingSpinner";

function FacebookAccessStep({ setStep }) {
  const [isContinuing, setIsContinuing] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#f5f7fb] px-4 py-10">
      <div className="mx-auto flex min-h-[80vh] max-w-[1100px] items-center justify-center">
        <div className="w-full max-w-[560px] min-h-[430px] overflow-hidden rounded-[8px] border border-[#d9dee7] bg-white shadow-[0_10px_28px_rgba(30,41,59,0.09)]">
          <div className="flex items-center gap-2 border-b border-[#e8edf3] px-3 py-3">
            <div className="relative h-6 w-6">
              <Image src="/Images/fb.png" alt="Facebook" fill className="object-contain" />
            </div>
            <svg className="h-3.5 w-3.5 text-[#8793a2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 1l4 4-4 4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 11V9a4 4 0 014-4h14" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 23l-4-4 4-4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13v2a4 4 0 01-4 4H3" />
            </svg>
            <div className="relative h-6 w-6">
              <Image src="/Images/calendly2.png" alt="Calendly" fill className="object-contain object-left" />
            </div>
          </div>

          <div className="flex min-h-[388px] flex-col px-3 pt-4 sm:px-4 sm:pt-4.5">
            <h2 className="mb-2.5 text-[13px] font-semibold text-[#1c2434]">
              Calendly is requesting access to:
            </h2>
            <div className="mb-1 flex items-center gap-2 text-[12px] text-[#39465a]">
              <span className="h-1 w-1 rounded-full bg-[#39465a]" />
              <span>Name and profile picture</span>
            </div>
            <button
              type="button"
              className="mb-16 block self-start text-left text-[12px] font-medium text-[#1877f2] hover:underline"
            >
              View access
            </button>

            <div className="mt-auto">
            <div className="flex flex-col gap-2 border-t border-[#eef2f7] pt-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  if (isContinuing) return;
                  setIsContinuing(true);
                  setTimeout(() => {
                    setStep(2);
                  }, 900);
                }}
                className="flex-1 rounded-[4px] bg-[#1877f2] px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-[#166fe0] disabled:cursor-not-allowed disabled:opacity-90"
                disabled={isContinuing}
              >
                <span className="flex items-center justify-center gap-2">
                  {isContinuing && <LoadingSpinner size="12px" className="text-white" />}
                  <span>{isContinuing ? "Continuing..." : "Continue"}</span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 rounded-[4px] bg-[#eef2f6] px-4 py-2 text-[12px] font-semibold text-[#253447] transition hover:bg-[#e5ebf2]"
              >
                Cancel
              </button>
            </div>

            <div className="mt-3 text-[10px] leading-4 text-[#68788c]">
              <p>
                By continuing, Calendly will receive ongoing access to the information you share and Meta will record when
                Calendly accesses it.
                <span className="ml-1 cursor-pointer text-[#1877f2] hover:underline">Learn more</span>
                <span className="ml-1">about this sharing and the settings you have.</span>
              </p>
              <p className="mt-2">
                Calendly&apos;s
                <span className="ml-1 cursor-pointer text-[#1877f2] hover:underline">Privacy Policy</span>
                <span className="mx-1">and</span>
                <span className="cursor-pointer text-[#1877f2] hover:underline">Terms of Service</span>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacebookAccessStep;
