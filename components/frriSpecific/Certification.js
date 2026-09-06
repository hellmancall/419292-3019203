import React from "react";

const Certification = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-full lg:max-w-[85%] xl:max-w-[75%] mx-auto">
      <div className="max-w-full mx-auto space-y-8 sm:space-y-12 md:space-y-16">
        
        {/* Culture In Action Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12" style={{ gap: 'clamp(24px, 5vw, 48px)' }}>
          <div className="w-full md:flex-1">
            <img
              src="/assets/images/culture1.jpg"
              alt="Culture In Action"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:max-w-[30%]">
            <p className="text-xs sm:text-sm md:text-md font-medium mb-2 tracking-wide">Reinforcing Our Position</p>
            <h2 className="font-black uppercase mb-4 sm:mb-6" style={{ fontSize: 'clamp(2rem, 8vw, 4.7rem)', lineHeight: '0.8', letterSpacing: 'clamp(-2px, -0.3vw, -4px)', fontWeight: '900' }}>
              CULTURE IN ACTION
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base" style={{ lineHeight: '1.6' }}>
              There is a sense of pride that comes from representing an iconic brand and shaping its future. Here, we treat one another with respect and dignity. We're not afraid to ask tough questions and share whole-hearted convictions. We are a team – united by the belief that anything is possible.
            </p>
            <a href="#form" className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-gray-800 transition inline-block text-sm sm:text-base">
              Learn More About Culture
            </a>
          </div>
        </div>

        {/* From The Inside Out Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12" style={{ gap: 'clamp(24px, 5vw, 48px)' }}>
          <div className="w-full md:max-w-[30%] order-2 md:order-1">
            <p className="text-xs sm:text-sm md:text-md font-medium mb-2 tracking-wide">Elevating Your Well-Being</p>
            <h2 className="font-black uppercase mb-4 sm:mb-6" style={{ fontSize: 'clamp(2rem, 8vw, 4.7rem)', lineHeight: '0.8', letterSpacing: 'clamp(-2px, -0.3vw, -4px)', fontWeight: '900' }}>
              FROM THE INSIDE OUT
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base" style={{ lineHeight: '1.6' }}>
              Rest and recovery are critical for you to be able to deliver at peak performance. You can count on us to walk the talk, providing resources and time that help keep life balanced and yourself fueled for any challenge. Compassion and flexibility enhance the supportive nature of our community.
            </p>
            <a href="#form" className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-gray-800 transition inline-block text-sm sm:text-base">
              Learn More About Benefits
            </a>
          </div>
          <div className="w-full md:flex-1 lg:order-2">
            <img
              src="/assets/images/culture2.jpg"
              alt="From The Inside Out"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Purpose At Play Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 pb-12 sm:pb-16 md:pb-20" style={{ gap: 'clamp(24px, 5vw, 48px)' }}>
          <div className="w-full md:flex-1">
            <img
              src="/assets/images/culture3.jpg"
              alt="Purpose At Play"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:max-w-[30%]">
            <p className="text-xs sm:text-sm md:text-md font-medium mb-2 tracking-wide">Lacing Up for the Greater Good</p>
            <h2 className="font-black uppercase mb-4 sm:mb-6" style={{ fontSize: 'clamp(2rem, 8vw, 4.7rem)', lineHeight: '0.8', letterSpacing: 'clamp(-2px, -0.3vw, -4px)', fontWeight: '900' }}>
              PURPOSE AT PLAY
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base" style={{ lineHeight: '1.6' }}>
              Moving the world forward through sport is no small feat. Together, we take steps to drive change by putting social impact and planet protection first. This shared passion for doing what's right fuels the NIKE, Inc. legacy and drives us forward.
            </p>
            <a href="#form" className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-gray-800 transition inline-block text-sm sm:text-base">
              Learn More
            </a>
          </div>
        </div>

        {/* Beyond The Swoosh Section */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <p className="text-base sm:text-lg md:text-xl font-medium mb-2 tracking-wide">One Team. Iconic Brands.</p>
          <h2 className="text-black font-black uppercase tracking-tight mb-8 sm:mb-10 md:mb-12" style={{ fontSize: 'clamp(2rem, 8vw, 60px)', lineHeight: '1', letterSpacing: '-1px' }}>
            BEYOND THE SWOOSH
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div>
              <img
                src="/assets/images/beyond1.jpg"
                alt="Converse"
                className="w-full h-auto object-cover mb-4 sm:mb-6 rounded-lg"
              />
              <h3 className="font-bold uppercase mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl">Converse</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base" style={{ lineHeight: '1.6' }}>
                Bringing together those independent enough not to follow, we are catalyzing the collective of people who see their differences as strengths. Converse is a creative team channeling ambition, expertise, and self-expression to drive innovation.
              </p>
              <a href="#form" className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition inline-block">
                Learn More About Converse
              </a>
            </div>
            <div>
              <img
                src="/assets/images/beyond2.jpg"
                alt="Jordan"
                className="w-full h-auto object-cover mb-6"
              />
              <h3 className="font-bold uppercase mb-3" style={{ fontSize: '24px' }}>Jordan</h3>
              <p className="text-gray-600 mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Extending beyond sports into culture and fashion, Jordan Brand is bound by a commitment to serve as a community representative of Michael himself. Those who make up this team thrive in an entrepreneurial environment, where creative problem-solving is leveraged to drive innovation.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition flex flex-row">
                <span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M13.962 16.2959C12.95 16.9019 11.766 17.2499 10.5 17.2499C8.636 17.2499 6.949 16.4949 5.727 15.2729C4.505 14.0509 3.75 12.3639 3.75 10.4999C3.75 8.63588 4.505 6.94888 5.727 5.72688C6.949 4.50488 8.636 3.74988 10.5 3.74988C12.364 3.74988 14.051 4.50488 15.273 5.72688C16.495 6.94888 17.25 8.63588 17.25 10.4999C17.25 11.7429 16.914 12.9069 16.329 13.9069C15.812 14.7889 15.895 15.8949 16.618 16.6179L20.471 20.4709" stroke="white" stroke-width="1.5"></path>
                                    </svg>
                                    </span>Search Jordan Careers
              </button>
            </div>
          </div>
        </div>

        {/* Explore Careers Section */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <h2 className="text-black font-semibold uppercase tracking-tight mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl">
            Explore Careers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            <div>
              <a href="#form">
                <img src="/assets/images/explore1.webp" alt="Retail Careers" className="w-full h-auto object-cover mb-3 rounded-md overflow-hidden" style={{ aspectRatio: '16/11' }} />
                <p className="text-black text-sm font-medium underline">Search Retail Careers</p>
              </a>
            </div>
            <div>
              <a href="#form">
                <img src="/assets/images/explore2.webp" alt="Distribution Careers" className="w-full h-auto object-cover mb-3 rounded-md overflow-hidden" style={{ aspectRatio: '16/11' }} />
                <p className="text-black text-sm font-medium underline">Search Distribution Careers</p>
              </a>
            </div>
            <div>
              <a href="#form">
                <img src="/assets/images/explore3.webp" alt="Manufacturing Careers" className="w-full h-auto object-cover mb-3 rounded-md overflow-hidden" style={{ aspectRatio: '16/11' }} />
                <p className="text-black text-sm font-medium underline">Search Manufacturing Careers</p>
              </a>
            </div>
            <div>
              <a href="#form">
                <img src="/assets/images/explore4.webp" alt="Corporate Careers" className="w-full h-auto object-cover mb-3 rounded-md overflow-hidden" style={{ aspectRatio: '16/11' }} />
                <p className="text-black text-sm font-medium underline">Search Corporate Careers</p>
              </a>
            </div>
            <div>
              <a href="#form">
                <img src="/assets/images/explore5.webp" alt="Open Internships" className="w-full h-auto object-cover mb-3 rounded-md overflow-hidden" style={{ aspectRatio: '16/11' }} />
                <p className="text-black text-sm font-medium underline">Search Open Internships</p>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certification;