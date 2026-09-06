import React, { useState } from "react";

const LouisVuittonNavbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "La Maison" },
    { label: "Work Culture" },
    { label: "Sustainability" },
    { label: "News" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 md:px-12 py-4 flex items-center justify-between fixed top-0 left-0 z-[40]">
      {/* Left Menu Items */}
      <nav className="hidden lg:flex items-center gap-8">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`text-sm font-[lvl] font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap relative group ${
              active === item.label ? 'text-black' : 'text-gray-700 hover:text-black'
            }`}
          >
            {item.label}
            
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex flex-col gap-1 w-6 h-6 justify-center"
        aria-label="Menu"
      >
        <span className={`w-full h-[1px] bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-full h-[1px] bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-full h-[1px] bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <svg role="img" viewBox="0 0 283.46 60.66" version="1.1" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-label="Find your next job and build your career at Louis Vuitton by applying on our recruitment website" aria-hidden="true" className="w-32 md:w-48 h-auto"><g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd"><g><g><polygon points="282.91 .55 279.29 .55 278.74 1.1 278.74 18.35 260.39 0 259.84 .55 259.84 28.35 260.39 28.9 264.02 28.9 264.57 28.35 264.57 10.87 282.6 28.9 283.46 28.9 283.46 1.1 282.91 .55" className="cls-1"></polygon> <polygon points="192.13 1.1 192.13 5.28 196.85 5.28 196.85 28.9 201.57 28.9 201.57 5.28 205.75 5.28 206.3 4.72 206.3 .55 192.68 .55 192.13 1.1" className="cls-1"></polygon> <polygon points="209.45 1.1 209.45 5.28 214.17 5.28 214.17 28.9 218.9 28.9 218.9 5.28 223.07 5.28 223.62 4.72 223.62 .55 210 .55 209.45 1.1" className="cls-1"></polygon> <polygon points="4.72 .55 .55 .55 0 1.1 0 28.9 14.17 28.9 14.17 24.17 4.72 24.17 4.72 .55" className="cls-1"></polygon> <path d="M31.5,.55c-7.83,0-14.17,6.35-14.17,14.17s6.35,14.17,14.17,14.17,14.17-6.35,14.17-14.17S39.32,.55,31.5,.55Zm0,23.62c-5.22,0-9.45-4.23-9.45-9.45s4.23-9.45,9.45-9.45,9.45,4.23,9.45,9.45-4.23,9.45-9.45,9.45Z" className="cls-1"></path> <path d="M240.94,.55c-7.83,0-14.17,6.35-14.17,14.17s6.35,14.17,14.17,14.17,14.17-6.35,14.17-14.17-6.35-14.17-14.17-14.17Zm0,23.62c-5.22,0-9.45-4.23-9.45-9.45s4.23-9.45,9.45-9.45,9.45,4.23,9.45,9.45-4.23,9.45-9.45,9.45Z" className="cls-1"></path> <path d="M66.69,.55l-.55,.55V19.45c0,2.61-2.12,4.72-4.72,4.72s-4.72-2.12-4.72-4.72V1.1l-.55-.55h-3.62l-.55,.55V19.45c0,5.22,4.23,9.45,9.45,9.45s9.45-4.23,9.45-9.45V1.1l-.55-.55h-3.62Z" className="cls-1"></path> <polygon points="80.31 1.1 80.31 28.9 84.49 28.9 85.04 28.35 85.04 .55 80.87 .55 80.31 1.1" className="cls-1"></polygon> <path d="M165.91,.55l-.55,.55V19.45c0,2.61-2.12,4.72-4.72,4.72s-4.72-2.12-4.72-4.72V1.1l-.55-.55h-3.62l-.55,.55V19.45c0,5.22,4.23,9.45,9.45,9.45s9.45-4.23,9.45-9.45V1.1l-.55-.55h-3.62Z" className="cls-1"></path> <polygon points="179.53 1.1 179.53 28.9 183.7 28.9 184.25 28.35 184.25 .55 180.08 .55 179.53 1.1" className="cls-1"></polygon> <path d="M102.76,12.56c-1.54-.85-2.01-1.15-3.15-1.89-1.06-.68-1.64-1.48-1.57-2.76,.09-1.7,1.61-3.03,3.23-3.03,1.36,0,2.62,.75,3.19,1.97h.87l2.76-2.76c-1.44-2.1-4.05-3.54-6.81-3.54s-4.41,.9-5.67,2.05c-1.63,1.49-2.64,3.62-2.64,5.83,0,2.96,1.66,5.43,3.23,6.34,1.53,.89,5.04,2.83,5.04,2.83,1.94,.93,2.25,2.73,2.01,3.94-.31,1.53-1.87,3.07-4.21,2.76-1.15-.16-2.36-1.02-2.91-1.46l-1.22-1.02-3.54,3.62c1.63,1.92,3.14,2.86,5.63,3.46,.88,.2,2.06,.28,2.72,.28,5.08,0,9.02-4.38,9.02-9.09s-4.26-6.59-5.94-7.52Z" className="cls-1"></path> <polygon points="134.17 17.83 127.01 .55 121.89 .55 133.62 28.9 134.17 29.45 134.72 28.9 146.46 .55 141.34 .55 134.17 17.83" className="cls-1"></polygon></g> <g><path d="M122.59,55.96c0,1.86-.36,2.99-1.19,3.77-.65,.58-1.57,.93-2.52,.93-1.21,0-2.22-.4-3.15-1.27l1.57-1.92c.34,.5,.79,.77,1.31,.77s.99-.3,1.17-.81c.14-.38,.18-.77,.18-1.9v-8.66h2.62v9.08Z" className="cls-1"></path> <path d="M141.42,53.62c0,3.97-3.17,7.02-7.26,7.02s-7.12-3.09-7.12-7.12,3.23-6.94,7.22-6.94,7.16,3.09,7.16,7.04Zm-11.68-.06c0,2.6,2,4.68,4.5,4.68s4.48-2.08,4.48-4.64-2-4.62-4.5-4.62-4.48,2.08-4.48,4.58Z" className="cls-1"></path> <path d="M145.86,46.88h3.33c1.55,0,2.6,.26,3.29,.81,.75,.58,1.21,1.63,1.21,2.74,0,.73-.2,1.43-.5,1.92-.22,.3-.44,.48-.97,.81,.91,.2,1.33,.4,1.76,.85,.6,.6,.97,1.55,.97,2.54,0,1.07-.42,2.08-1.19,2.76-.79,.71-1.86,1.03-3.35,1.03h-4.54v-13.46Zm3.37,5.61c1.35,0,2.04-.58,2.04-1.76s-.69-1.73-2-1.73h-.79v3.49h.75Zm.38,5.73c1.78,0,2.62-.61,2.62-1.86,0-.65-.28-1.19-.79-1.49-.46-.3-.89-.38-1.98-.38h-.99v3.73h1.13Z" className="cls-1"></path> <path d="M165.9,49.95c-.71-.79-1.33-1.09-2.18-1.09-1.07,0-1.9,.67-1.9,1.49,0,.73,.46,1.11,2.04,1.69,1.47,.54,2.08,.83,2.68,1.35,.79,.67,1.19,1.63,1.19,2.82,0,2.64-1.9,4.44-4.68,4.44-1.96,0-3.41-.81-4.62-2.56l1.69-1.63c.61,1.15,1.61,1.8,2.82,1.8s2.08-.79,2.08-1.9c0-.54-.24-1.01-.73-1.35-.26-.18-.79-.4-1.88-.81-2.42-.89-3.31-1.86-3.31-3.63,0-2.26,1.78-3.91,4.2-3.91,1.47,0,2.82,.5,3.95,1.49l-1.37,1.8Z" className="cls-1"></path></g></g></g></svg>
      </div>

      {/* Right Side Actions */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Language selector */}
        <button className="flex items-center gap-2 text-sm font-light hover:text-gray-600 transition-colors duration-200 group font-[lvl]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          English
          <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* See all jobs button */}
        <button className="px-6 py-2.5 border font-[lvl] font-semibold border-black rounded-full text-sm hover:bg-black hover:text-white transition-all duration-300">
          See all jobs
        </button>
      </div>


      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 top-16 overflow-y-auto">
          <nav className="flex flex-col p-6 gap-6">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setActive(item.label);
                  setMenuOpen(false);
                }}
                className={`text-left text-xl font-light transition-colors duration-200 ${
                  active === item.label ? 'text-black' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button className="flex items-center gap-2 text-sm font-light mt-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              English
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default LouisVuittonNavbar;