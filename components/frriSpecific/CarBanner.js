import React from "react";

const NikeBanner = () => {
  const styles = {
    section: {
      backgroundColor: "var(--grey-900, #1f1f21)",
      paddingBlock: "96px",
      color: "var(--base-white, #ffffff)",
      fontFamily: 'var(--body-regular, "Helvetica Now Text", Helvetica, Arial, sans-serif)',
    },
    headline: {
      fontFamily: 'var(--body-title, "Nike Futura ND", "Impact", "Arial Narrow", sans-serif)',
      fontSize: "clamp(60px, 9vw, 110px)",
      lineHeight: "var(--header-line-height, 1)",
      fontWeight: "900",
      letterSpacing: "4px",
      textTransform: "uppercase",
    },
    bodyText: {
      fontFamily: 'var(--body-strong, "Helvetica Now Text Medium", Helvetica, Arial, sans-serif)',
      fontSize: "1.2rem", 
      lineHeight: "1.5",
      fontWeight: "500", 
    }
  };

  return (
    <section style={styles.section} className="w-full flex justify-center">
      {/* Main Container - using the max-width variable */}
      <div className="w-full max-w-[1440px] px-6 md:px-12 relative">
        
        {/* The White Horizontal Line */}
        <div className="w-full border-t border-white mb-10 opacity-100"></div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          
          {/* Left Side: Headline */}
          <div className="w-full lg:w-2/3">
            <h2
              style={styles.headline}
            >
              IF YOU HAVE A <br className="hidden md:block" />
              BODY, YOU ARE <br className="hidden md:block" />
              AN ATHLETE.*
            </h2>
          </div>

          {/* Right Side: Paragraph */}
          <div className="w-full lg:w-[390px] lg:pt-2">
            <p
              style={styles.bodyText}
            >
              * These words drive who we are and what we
              believe in – a better future for ourselves, our
              communities and our athletes. We strive to
              bring inspiration and innovation to every
              athlete in the world, including our teammates.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NikeBanner;