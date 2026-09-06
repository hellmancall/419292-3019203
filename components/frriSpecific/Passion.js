import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cardData = [
  {
    id: 1,
    title: 'Serve Athletes',
    image: '/assets/images/moves1.jpg',
  },
  {
    id: 2,
    title: 'Create the Future of Sport',
    image: '/assets/images/moves2.jpg',
  },
  {
    id: 3,
    title: 'Be On the Cutting Edge', 
    image: '/assets/images/moves3.jpg',
  },
  {
    id: 4,
    title: 'Design for a Better World',
    image: '/assets/images/moves4.jpg',
  },
  {
    id: 5,
    title: 'Champion Human Potential',
    image: '/assets/images/moves5.jpg',
  },
];

const NikeCarouselSection = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollStatus = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
      setScrollPosition(scrollLeft);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollStatus);
      window.addEventListener('resize', checkScrollStatus);
      checkScrollStatus(); 
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollStatus);
        window.removeEventListener('resize', checkScrollStatus);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 400;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-full lg:max-w-[85%] xl:max-w-[75%] mx-auto">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 md:mb-12 gap-4">
          
          <div>
            <p className="text-black uppercase tracking-tight text-xs sm:text-sm md:text-[1rem] font-medium mb-2" 
               style={{ fontFamily: 'var(--body-strong, "Helvetica Now Text Medium", Helvetica, Arial, sans-serif)' }}>
              More Than Love of the Brand
            </p>
            <h2 
              className="text-black font-black uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[4.75rem]" 
              style={{ 
                fontFamily: 'var(--body-title, "Nike Futura ND", "Impact", sans-serif)', 
                lineHeight: '0.9',
              }}
            >
              WHAT MOVES US
            </h2>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border border-gray-300 transition-all duration-200 ${
                canScrollLeft 
                  ? 'text-black bg-white hover:bg-gray-100' 
                  : 'text-gray-400 bg-gray-100 cursor-not-allowed'
              }`}
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border border-gray-300 transition-all duration-200 ${
                canScrollRight 
                  ? 'text-black bg-white hover:bg-gray-100' 
                  : 'text-gray-400 bg-gray-100 cursor-not-allowed'
              }`}
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide "
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            scrollSnapType: 'x mandatory',
          }}
        >
          {cardData.map((card) => (
            <div 
              key={card.id} 
              className="group flex-shrink-0 cursor-pointer bg-black rounded-xl overflow-hidden"
              style={{
                width: 'min(90vw, 586px)',
                scrollSnapAlign: 'start',
              }}
            >
              <div className='bg-black rounded-xl overflow-hidden z-10'>
              <div className="relative overflow-hidden rounded-xl" style={{ height: 'min(65vw, 440px)' }}>
                
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 bg-black"
                  style={{
                    display: 'block',
                  }}
                />
                
                <div className="absolute inset-0 bg-black opacity-20"></div>
                
                <div className="absolute bottom-8 left-8 z-10">
                  <h3 
                    className="text-white font-medium text-2xl mb-2" 
                    style={{ 
                      fontFamily: 'var(--body-strong, "Helvetica Now Text Medium", Helvetica, Arial, sans-serif)',
                      lineHeight: '1.2',
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    }}
                  >
                    {card.title}
                  </h3>
                  <a href="#form" className="text-white text-4xl font-light">+</a>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
        
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default NikeCarouselSection;