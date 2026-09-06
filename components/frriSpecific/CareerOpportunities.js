import React from "react";

const CareerOpportunities = () => {
  const cards = [
    {
      img: "/assets/images/know1.webp",
      title: "Retail at NIKE, Inc.",
    },
    {
      img: "/assets/images/know2.webp",
      title: "The Nike Internship Experience",
    },
    {
      img: "/assets/images/know3.webp",
      title: "AI/ML Roles for Innovators",
    },
    {
      img: "/assets/images/know4.webp",
      title: "Peek Into Our World",
    },
    {
      img: "/assets/images/know5.webp",
      title: "NikeUNITED's Commitment",
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-full lg:max-w-[85%] xl:max-w-[75%] mx-auto">

        {/* Title */}
        <h2 className="text-black font-bold uppercase text-xl sm:text-2xl md:text-[28px] mb-8 sm:mb-10 md:mb-12">
          Be In the Know
        </h2>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">

          {cards.map((card, idx) => (
            <div key={idx} className="group cursor-pointer">

              {/* Image */}
              <div
                className="relative overflow-hidden mb-3 rounded-sm"
                style={{ paddingBottom: "68%" }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold mb-1 leading-snug">
                {card.title}
              </h3>

              {/* Link */}
              <a
                className="text-black font-bold text-xs sm:text-sm underline"
                href="#form"
              >
                Learn More
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
