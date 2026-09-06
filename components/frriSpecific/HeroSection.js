import React, { useState, useRef, useEffect } from "react";

const LouisVuittonJobsPage = (props) => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroPlaying, setHeroPlaying] = useState(true);
  const heroVideoRef = useRef(null);

  // Refs for all video sections
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const video4Ref = useRef(null);
  const video5Ref = useRef(null);
  const section4Ref = useRef(null);

  const [video2Playing, setVideo2Playing] = useState(true);
  const [video3Playing, setVideo3Playing] = useState(true);
  const [video4Playing, setVideo4Playing] = useState(true);
  const [video5Playing, setVideo5Playing] = useState(true);

  const [showFormSection, setShowFormSection] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showContractModal, setShowContractModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSection, setExpandedSection] = useState("city");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [selectedContracts, setSelectedContracts] = useState([]);

  const menuItems = [
    { label: "La Maison" },
    { label: "Work Culture" },
    { label: "Sustainability" },
    { label: "News" },
  ];

  useEffect(() => {
    const videos = [heroVideoRef, video2Ref, video3Ref, video4Ref, video5Ref];
    videos.forEach(ref => {
      if (ref.current) {
        ref.current.play().catch(() => { });
      }
    });

  }, []);

  useEffect(() => {
    if (showCountryModal || showJobModal || showContractModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCountryModal, showJobModal, showContractModal]);

  useEffect(() => {
    if (showCountryModal || showJobModal || showContractModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCountryModal, showJobModal, showContractModal]);

  const toggleVideoPlay = (videoRef, setPlaying) => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPlaying(true);
      } else {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  };

  const handleApplyClick = () => {
    setShowFormSection(true);
    setTimeout(() => {
      section4Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const countries = [
    { name: "France", count: 144 },
    { name: "United States", count: 120 },
    { name: "Italy", count: 40 },
    { name: "South Korea", count: 27 },
    { name: "Spain", count: 19 },
    { name: "United Arab Emirates", count: 13 },
    { name: "Belgium", count: 12 },
    { name: "Australia", count: 11 },
    { name: "Austria", count: 10 },
    { name: "Canada", count: 10 },
    { name: "Japan", count: 10 },
    { name: "Taiwan Region", count: 8 },
    { name: "Hong Kong SAR", count: 7 },
    { name: "Macau SAR", count: 7 },
    { name: "Switzerland", count: 6 },
    { name: "Singapore", count: 4 },
    { name: "Germany", count: 4 },
    { name: "Netherlands", count: 4 },
    { name: "Malaysia", count: 3 },
    { name: "New Zealand", count: 3 },
    { name: "United Kingdom", count: 3 },
    { name: "Luxembourg", count: 2 },
    { name: "Mexico", count: 2 },
    { name: "Finland", count: 2 },
    { name: "Poland", count: 2 },
    { name: "Denmark", count: 1 },
    { name: "Hungary", count: 1 },
    { name: "India", count: 1 },
    { name: "Indonesia", count: 1 },
    { name: "Ireland", count: 1 },
    { name: "Norway", count: 1 },
    { name: "Panama", count: 1 },
    { name: "Portugal", count: 1 },
    { name: "Puerto Rico", count: 1 },
    { name: "Romania", count: 1 },
    { name: "South Africa", count: 1 },
    { name: "Thailand", count: 1 },
    { name: "Vietnam", count: 1 },
  ];

  const regions = [
    { name: "Ile-de-France, France", count: 83 },
    { name: "California, United States", count: 32 },
    { name: "Auvergne-Rhône-Alpes, France", count: 28 },
    { name: "Seoul, South Korea", count: 26 },
    { name: "New York, United States", count: 17 },
    { name: "Lombardia, Italy", count: 15 },
    { name: "Centre-Val de Loire, France", count: 14 },
    { name: "Dubai, United Arab Emirates", count: 13 },
    { name: "Hawaii, United States", count: 12 },
    { name: "Normandy, France", count: 10 },
    { name: "Barcelona, Spain", count: 9 },
    { name: "Brussels, Belgium", count: 9 },
    { name: "Madrid, Spain", count: 8 },
    { name: "Veneto, Italy", count: 8 },
    { name: "Florida, United States", count: 7 },
    { name: "Macau SAR, Macau SAR", count: 7 },
    { name: "Tôkyô, Japan", count: 7 },
    { name: "Vienna, Austria", count: 7 },
    { name: "Hong Kong Island, Hong Kong SAR", count: 6 },
    { name: "Lazio, Italy", count: 6 },
    { name: "New South Wales, Australia", count: 6 },
    { name: "Pays de la Loire, France", count: 6 },
    { name: "Texas, United States", count: 6 },
    { name: "Virginia, United States", count: 6 },
    { name: "Campania, Italy", count: 5 },
    { name: "Geneva, Switzerland", count: 5 },
    { name: "Georgia, United States", count: 5 },
    { name: "Ontario, Canada", count: 5 },
    { name: "Taipei, Taiwan Region", count: 5 },
    { name: "Washington, United States", count: 5 },
    { name: "Colorado, United States", count: 4 },
    { name: "Oregon, United States", count: 4 },
  ];

  const cities = [
    { name: "Paris, Ile-de-France, France", count: 72 },
    { name: "Seoul (DOM), Busan, South Korea", count: 22 },
    { name: "New York, New York, United States", count: 16 },
    { name: "Dubai, Dubai, United Arab Emirates", count: 13 },
    { name: "Marsaz, Auvergne-Rhône-Alpes, France", count: 11 },
    { name: "Milan, Sicily, Italy", count: 11 },
    { name: "Vendôme, Centre-Val de Loire, France", count: 11 },
    { name: "Brussels, Brussels, Belgium", count: 9 },
    { name: "Ducey, Normandy, France", count: 9 },
    { name: "Sarras, Auvergne-Rhône-Alpes, France", count: 9 },
    { name: "Tokyo, Aiti, Japan", count: 9 },
    { name: "Madrid, Málaga, Spain", count: 8 },
    { name: "Venice, Veneto, Italy", count: 8 },
    { name: "Asnieres Sur Seine, Ile-de-France, France", count: 7 },
    { name: "Hong Kong SAR, Kowloon, Hong Kong SAR", count: 7 },
    { name: "Honolulu, Hawaii, United States", count: 7 },
    { name: "Macau SAR, Macau SAR, Macau SAR", count: 7 },
    { name: "Vienna, Vienna, Austria", count: 7 },
    { name: "Barbera Del Valles, Barcelona, Spain", count: 6 },
    { name: "Costa Mesa, California, United States", count: 6 },
    { name: "Mclean, Virginia, United States", count: 6 },
    { name: "Rome, Lazio, Italy", count: 6 },
    { name: "Sydney, New South Wales, Australia", count: 6 },
    { name: "Atlanta, Georgia, United States", count: 5 },
    { name: "Sainte Florence, Pays de la Loire, France", count: 5 },
    { name: "Taipei, Taipei, Taiwan Region", count: 5 },
    { name: "Toronto, Ontario, Canada", count: 5 },
    { name: "Campllong, Girona, Spain", count: 4 },
    { name: "Geneve, Geneva, Switzerland", count: 4 },
    { name: "Malissard, Auvergne-Rhône-Alpes, France", count: 4 },
    { name: "Milano Malpensa, Lombardia, Italy", count: 4 },
    { name: "Napoli, Campania, Italy", count: 4 },
    { name: "Portland, Oregon, United States", count: 4 },
    { name: "San Francisco, California, United States", count: 4 },
    { name: "Seoul, Seoul, South Korea", count: 4 },
    { name: "Singapore, Singapore, Singapore", count: 4 },
    { name: "St Pourcain Sur Sioule, Auvergne-Rhône-Alpes, France", count: 4 },
    { name: "Amsterdam, Noord-Holland, Netherlands", count: 3 },
    { name: "Beverly Hills, California, United States", count: 3 },
    { name: "Cergy, Ile-de-France, France", count: 3 },
    { name: "Denver, Colorado, United States", count: 3 },
    { name: "Irving, Texas, United States", count: 3 },
    { name: "Issoudun, Centre-Val de Loire, France", count: 3 },
    { name: "Kuala Lumpur, Kuala Lumpur, Malaysia", count: 3 },
    { name: "London, London, United Kingdom", count: 3 },
    { name: "Munich, Bavaria, Germany", count: 3 },
    { name: "Nashville, Tennessee, United States", count: 3 },
    { name: "Newport Beach, California, United States", count: 3 },
    { name: "Piscataway, New Jersey, United States", count: 3 },
    { name: "Salzburg, Salisbury, Austria", count: 3 },
    { name: "San Diego, California, United States", count: 3 },
    { name: "San Jose, California, United States", count: 3 },
    { name: "Seattle, Washington, United States", count: 3 },
    { name: "Wailea, Hawaii, United States", count: 3 },
    { name: "Antwerp, West Flanders, Belgium", count: 2 },
    { name: "Bellevue, Washington, United States", count: 2 },
    { name: "Dallas, Texas, United States", count: 2 },
    { name: "Edina, Minnesota, United States", count: 2 },
    { name: "Edmonton, Alberta, Canada", count: 2 },
    { name: "Florence, Sicily, Italy", count: 2 },
    { name: "Helsinki, Etelä-Suomen lääni, Finland", count: 2 },
    { name: "Kaohsiung, Kaohsiung, Taiwan", count: 2 },
    { name: "Lahaina, Hawaii, United States", count: 2 },
    { name: "Luxembourg, Luxembourg, Luxembourg", count: 2 },
    { name: "Miami, Florida, United States", count: 2 },
    { name: "Palo Alto, California, United States", count: 2 },
    { name: "Queenstown, Otago, New Zealand", count: 2 },
    { name: "Roissy, Provence-Alpes-Côte-d'Azur, France", count: 2 },
    { name: "Santa Clara, California, United States", count: 2 },
    { name: "Scottsdale, Arizona, United States", count: 2 },
    { name: "Troy, Michigan, United States", count: 2 },
    { name: "Vancouver, British Columbia, Canada", count: 2 },
    { name: "Warsaw, Mazowieckie, Poland", count: 2 },
    { name: "Aichi, Aiti, Japan", count: 1 },
    { name: "Alvarado, Texas, United States", count: 1 },
    { name: "Aspen, Colorado, United States", count: 1 },
    { name: "Auckland, Auckland, New Zealand", count: 1 },
    { name: "Aventura, Florida, United States", count: 1 },
    { name: "Bangalore, Karnataka, India", count: 1 },
    { name: "Bangkok, Bangkok, Thailand", count: 1 },
    { name: "Beaulieu sur Layon, Pays de la Loire, France", count: 1 },
    { name: "Birmingham (USA), Alabama, United States", count: 1 },
    { name: "Brisbane, Queensland, Australia", count: 1 },
    { name: "Budapest, Budapest, Hungary", count: 1 },
    { name: "Busan (DOM), Seoul, South Korea", count: 1 },
    { name: "Cancun, Quintana Roo, Mexico", count: 1 },
    { name: "Canoga Park, California, United States", count: 1 },
    { name: "Chadstone, Victoria, Australia", count: 1 },
    { name: "Charleston, South Carolina, United States", count: 1 },
    { name: "Charlotte, North Carolina, United States", count: 1 },
    { name: "Chicago, Illinois, United States", count: 1 },
    { name: "Civitanova Marche, Marche, Italy", count: 1 },
    { name: "Cleveland, Ohio, United States", count: 1 },
    { name: "Columbus, Ohio, United States", count: 1 },
    { name: "Copenhagen, Bornholm, Denmark", count: 1 },
    { name: "Coral Gables, Florida, United States", count: 1 },
    { name: "Dusseldorf, North Rhine-Westphalia, Germany", count: 1 },
    { name: "East Hampton, New York, United States", count: 1 },
    { name: "Figline Valdarno, Tuscany, Italy", count: 1 },
    { name: "Forte Dei Marmi, Tuscany, Italy", count: 1 },
    { name: "Glendale, California, United States", count: 1 },
    { name: "Ho Chi Minh City, Ho Chi Minh City, Vietnam", count: 1 },
    { name: "Jakarta, DKI Jakarta, Indonesia", count: 1 },
    { name: "Johannesburg, Gauteng, South Africa", count: 1 },
    { name: "Juilley, Normandy, France", count: 1 },
    { name: "King Of Prussia, Pennsylvania, United States", count: 1 },
    { name: "Knokke, West Flanders, Belgium", count: 1 },
    { name: "Las Vegas, Nevada, United States", count: 1 },
    { name: "Lausanne, Vaud, Switzerland", count: 1 },
    { name: "Lille, Hauts-de-France, France", count: 1 },
    { name: "Lisbon, Lisboa, Portugal", count: 1 },
    { name: "Marbella, Madrid, Spain", count: 1 },
    { name: "Marseille, Provence-Alpes-Côte-d'Azur, France", count: 1 },
    { name: "Melbourne, Victoria, Australia", count: 1 },
    { name: "Meyrin, Geneva, Switzerland", count: 1 },
    { name: "Monterrey, Nuevo Leon, Mexico", count: 1 },
    { name: "Montreal, Quebec, Canada", count: 1 },
    { name: "Ontario, California, United States", count: 1 },
    { name: "Orlando, Florida, United States", count: 1 },
    { name: "Oslo, Oslo, Norway", count: 1 },
    { name: "Palm Beach Gardens, Florida, United States", count: 1 },
    { name: "Panama City, Panama City, Panama", count: 1 },
    { name: "Perth, Victoria, Australia", count: 1 },
    { name: "Roseville, California, United States", count: 1 },
    { name: "Rotterdam, Zuid-Holland, Netherlands", count: 1 },
    { name: "Sacramento, California, United States", count: 1 },
    { name: "Saint Louis, Missouri, United States", count: 1 },
    { name: "San Dimas, California, United States", count: 1 },
    { name: "San Juan, Caribbean, Puerto Rico", count: 1 },
    { name: "Sibiu, Sibiu, Romania", count: 1 },
    { name: "Surfers Paradise, Queensland, Australia", count: 1 },
    { name: "Taichung, Taichung, Taiwan Region", count: 1 },
    { name: "Tainan, Tainan, Taiwan Region", count: 1 },
    { name: "Tampa, Florida, United States", count: 1 },
    { name: "Turin, Piemonte, Italy", count: 1 },
    { name: "Verona, Campania, Italy", count: 1 },
    { name: "Washington D.C., District of Columbia, United States", count: 1 },
    { name: "Dublin, Dublin, Ireland", count: 1 },
  ];

  const jobFunctions = [
    { name: "Retail", count: 256 },
    { name: "Manufacturing", count: 71 },
    { name: "Supply Chain & Logistics", count: 38 },
    { name: "Finance", count: 18 },
    { name: "Human Resources", count: 18 },
    { name: "Marketing", count: 16 },
    { name: "Merchandising", count: 15 },
    { name: "Design & Creation", count: 13 },
    { name: "Communication & Events", count: 12 },
    { name: "Omnichannel & Data", count: 11 },
    { name: "Tech", count: 5 },
    { name: "Hospitality and Food & Beverage", count: 4 },
    { name: "Purchasing", count: 4 },
    { name: "Research & Innovation", count: 3 },
    { name: "Sustainable Development", count: 2 },
    { name: "Sales", count: 1 },
  ];

  const contractTypes = [
    { name: "Permanent Job", count: 313 },
    { name: "Internship", count: 118 },
    { name: "Temporary Job", count: 52 },
    { name: "Apprenticeship", count: 4 },
  ];

  return (
    <div className="w-full min-h-screen bg-white">

      {/* Hero Section - Video 1 */}
      <section className="relative w-full h-screen overflow-hidden">
  <video
    ref={heroVideoRef}
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/Video/video1.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>

  <div className="relative inset-0 bottom-0 z-30 h-full flex flex-col">
    <div className="flex-1"></div>
    
    <div className="pb-72 px-4 lg:pb-72 pb-8">
      <div className="w-full lg:w-[80%] mx-auto bg-white rounded-[2rem] lg:rounded-[2rem] rounded-3xl p-4 lg:p-4 p-6">
        <h2 className="text-center text-[1.5rem] md:text-[2rem] lg:text-[2rem] text-xl font-[lvr] mb-3 lg:mb-3 mb-4 px-8 lg:px-8 px-0 text-black tracking-tight">
          Your next journey starts here
        </h2>
        <div className="w-full border-b mb-3 lg:mb-3 mb-4"></div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row items-stretch rounded-full overflow-hidden mx-auto max-w-full">
          <div className="relative border border-gray-200 rounded-full" style={{ width: '23%' }}>
            <label htmlFor="fieldID" className="sr-only">Search by job title or keyword</label>
            <input
              id="fieldID"
              type="search"
              placeholder="Search by job title or keyword"
              className="w-full h-full px-6 py-2 focus:outline-none bg-transparent font-[lvr] text-base placeholder:text-gray-400"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              title="Search by job title or keyword"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35" />
            </svg>
          </div>

          <button
            type="button"
            onClick={() => setShowCountryModal(true)}
            aria-label="Select a Country/Region/City"
            className="flex items-center justify-between px-4 py-2 text-sm font-light hover:bg-gray-50 transition-colors border-r border-gray-200"
            style={{ width: '23%' }}>
            <span className="text-gray-900 font-[lvr]">Country/Region/City</span>
            <div className="flex items-center gap-2 font-[lvr]">
              {(selectedCountries.length + selectedRegions.length + selectedCities.length > 0) && (
                <span className="text-xs text-gray-900">{selectedCountries.length + selectedRegions.length + selectedCities.length}</span>
              )}

              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
          </button>

          <button
            type="button"
            onClick={() => setShowJobModal(true)}
            aria-label="Select a job function type"
            className="flex items-center justify-between px-4 py-2 text-sm font-light hover:bg-gray-50 transition-colors border-r border-gray-200"
            style={{ width: '16%' }}>
            <span className="text-gray-900 font-[lvr]">Job functions</span>
            <div className="flex items-center gap-2 font-[lvr]">
              {selectedJobs.length > 0 && (
                <span className="text-xs text-gray-900">{selectedJobs.length}</span>
              )}
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setShowContractModal(true)}
            aria-label="Select a contract type"
            className="flex items-center justify-between px-4 py-2 text-sm font-light hover:bg-gray-50 transition-colors border-r border-gray-200"
            style={{ width: '18%' }}>
            <span className="text-gray-900 font-[lvr]">Contract type</span>
            <div className="flex items-center gap-2 font-[lvr]">
              {selectedContracts.length > 0 && (
                <span className="text-xs text-gray-900">{selectedContracts.length}</span>
              )}

              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
          </button>

          <button
            onClick={handleApplyClick}
            className="px-4 py-[15px] ml-5 mr-3 bg-black text-white rounded-full text-sm font-light hover:bg-gray-800 transition-colors border-r border-gray-200"
            style={{ width: '13%' }}>
            Apply
          </button>

          <button aria-label="Set an alert" type="button" className="flex items-center justify-center hover:bg-gray-50 transition-colors border border-black rounded-full" style={{ width: '4%' }}>
            <svg version="1.1" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" viewBox="-.03 -.03 13.57 16.05" className="w-4 h-4">
              <path fill="currentColor" d="M8.692 14.112c-.101 1.138-.823 1.848-1.87 1.887-1.049.038-1.829-.67-2.03-1.887zM6.084.244c.733-.528 1.66-.162 1.763.74.028.497.028.996 0 1.493a3 3 0 0 0 .403.19c2.144.624 3.435 2.067 3.915 4.208.21.93.232 1.902.338 2.855.068.602.133 1.195.205 1.871.519.316 1.064 1.181.652 1.79-.239.343-.753.376-1.165.377H1.572a4.535 4.535 0 0 1-.606-.035C.024 13.6-.292 12.812.3 12.045c.158-.176.328-.34.51-.493.152-1.434.279-2.892.475-4.341a5.43 5.43 0 0 1 3.73-4.483c.18-.066.379-.12.631-.196v-1.37c-.018-.36.147-.705.437-.918z" />
            </svg>
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden flex-col gap-3">
          <div className="relative border border-gray-200 rounded-full">
            <label htmlFor="fieldID-mobile" className="sr-only">Search by job title or keyword</label>
            <input
              id="fieldID-mobile"
              type="search"
              placeholder="Search by job title or keyword"
              className="w-full h-full px-6 py-3 focus:outline-none bg-transparent font-[lvr] text-sm placeholder:text-gray-400"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              title="Search by job title or keyword"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35" />
            </svg>
          </div>

          <button
            type="button"
            onClick={() => setShowCountryModal(true)}
            aria-label="Select a Country/Region/City"
            className="flex items-center justify-between px-6 py-3 text-sm font-light hover:bg-gray-50 transition-colors border border-gray-200 rounded-full">
            <span className="text-gray-900 font-[lvr]">Country/Region/City</span>
            <div className="flex items-center gap-2 font-[lvr]">
              {(selectedCountries.length + selectedRegions.length + selectedCities.length > 0) && (
                <span className="text-xs text-gray-900">{selectedCountries.length + selectedRegions.length + selectedCities.length}</span>
              )}

              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setShowJobModal(true)}
            aria-label="Select a job function type"
            className="flex items-center justify-between px-6 py-3 text-sm font-light hover:bg-gray-50 transition-colors border border-gray-200 rounded-full">
            <span className="text-gray-900 font-[lvr]">Job functions</span>
            <div className="flex items-center gap-2 font-[lvr]">
              {selectedJobs.length > 0 && (
                <span className="text-xs text-gray-900">{selectedJobs.length}</span>
              )}
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setShowContractModal(true)}
            aria-label="Select a contract type"
            className="flex items-center justify-between px-6 py-3 text-sm font-light hover:bg-gray-50 transition-colors border border-gray-200 rounded-full">
            <span className="text-gray-900 font-[lvr]">Contract type</span>
            <div className="flex items-center gap-2 font-[lvr]">
              {selectedContracts.length > 0 && (
                <span className="text-xs text-gray-900">{selectedContracts.length}</span>
              )}

              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          <div className="flex gap-3">
            <button
              onClick={handleApplyClick}
              className="flex-1 px-6 py-3 bg-black text-white rounded-full text-sm font-light hover:bg-gray-800 transition-colors">
              Apply
            </button>

            <button aria-label="Set an alert" type="button" className="flex items-center justify-center hover:bg-gray-50 transition-colors border border-black rounded-full w-12 h-12 shrink-0">
              <svg version="1.1" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" viewBox="-.03 -.03 13.57 16.05" className="w-4 h-4">
                <path fill="currentColor" d="M8.692 14.112c-.101 1.138-.823 1.848-1.87 1.887-1.049.038-1.829-.67-2.03-1.887zM6.084.244c.733-.528 1.66-.162 1.763.74.028.497.028.996 0 1.493a3 3 0 0 0 .403.19c2.144.624 3.435 2.067 3.915 4.208.21.93.232 1.902.338 2.855.068.602.133 1.195.205 1.871.519.316 1.064 1.181.652 1.79-.239.343-.753.376-1.165.377H1.572a4.535 4.535 0 0 1-.606-.035C.024 13.6-.292 12.812.3 12.045c.158-.176.328-.34.51-.493.152-1.434.279-2.892.475-4.341a5.43 5.43 0 0 1 3.73-4.483c.18-.066.379-.12.631-.196v-1.37c-.018-.36.147-.705.437-.918z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Country/Region/City Modal */}
    {showCountryModal && (
      <div className="fixed inset-0 bg-black/60 flex items-start justify-end" onClick={() => setShowCountryModal(false)}>
        <div className="bg-white w-full lg:max-w-[50vw] max-w-full h-screen overflow-hidden flex flex-col animate-slide-in-right lg:px-36 max-lg:px-0" onClick={(e) => e.stopPropagation()}>
          <div className="px-6 py-5 flex items-center justify-between mt-16">
            <div className="flex items-center gap-3">
              <button onClick={() => setShowCountryModal(false)} className="text-gray-900 hover:text-gray-600 ">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-base font-normal text-gray-900">Country/Region/City</h3>
            </div>
            <button 
              onClick={() => {
                setSelectedCountries([]);
                setSelectedRegions([]);
                setSelectedCities([]);
              }}
              className="text-sm text-gray-600 hover:text-gray-900 underline">
              Clear All Filters
            </button>
          </div>
          
          <div className="p-6 space-y-4 overflow-y-auto flex-1">
            <div>
              <button
                onClick={() => setExpandedSection(expandedSection === "country" ? "" : "country")}
                className="w-full text-left py-2 px-4 hover:bg-gray-50 flex items-center justify-between border-b border-gray-100">
                <span className="text-sm font-light">Country/region</span>
                <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedSection === "country" ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedSection === "country" && (
                <div className="mt-2 space-y-1">
                  {countries.map((country, index) => (
                    <label key={index} className="flex items-center py-2 px-0 hover:bg-gray-50 cursor-pointer rounded">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded"
                        checked={selectedCountries.includes(country.name)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCountries([...selectedCountries, country.name]);
                          } else {
                            setSelectedCountries(selectedCountries.filter(c => c !== country.name));
                          }
                        }}
                      />
                      <span className="ml-3 text-sm font-normal text-gray-900 pr-2 font-[lvl]">{country.name}</span>
                      <span className="text-sm text-gray-500 font-[lvl]">({country.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setExpandedSection(expandedSection === "region" ? "" : "region")}
                className="w-full text-left py-2 px-4 hover:bg-gray-50 flex items-center justify-between border-b border-gray-100">
                <span className="text-sm font-light">Region/State</span>
                <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedSection === "region" ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedSection === "region" && (
                <div className="mt-2 space-y-1">
                  {regions.map((region, index) => (
                    <label key={index} className="flex items-center py-2 px-0 hover:bg-gray-50 cursor-pointer rounded">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded"
                        checked={selectedRegions.includes(region.name)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedRegions([...selectedRegions, region.name]);
                          } else {
                            setSelectedRegions(selectedRegions.filter(r => r !== region.name));
                          }
                        }}
                      />
                      <span className="ml-3 text-sm font-normal text-gray-900 pr-2 font-[lvl]">{region.name}</span>
                      <span className="text-sm text-gray-500 font-[lvl]">({region.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setExpandedSection(expandedSection === "city" ? "" : "city")}
                className="w-full text-left py-2 px-4 hover:bg-gray-50 flex items-center justify-between border-b border-gray-100">
                <span className="text-sm font-light">City</span>
                <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedSection === "city" ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedSection === "city" && (
                <div className="mt-4 space-y-2">
                  <div className="relative mb-4">
                    <input
                      type="search"
                      placeholder="Search for a city"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                    />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35" />
                    </svg>
                  </div>

                  {cities
                    .filter(city => city.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((city, index) => (
                      <label key={index} className="flex items-center py-2 px-0 hover:bg-gray-50 cursor-pointer rounded">
                        <input
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded"
                          checked={selectedCities.includes(city.name)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCities([...selectedCities, city.name]);
                            } else {
                              setSelectedCities(selectedCities.filter(c => c !== city.name));
                            }
                          }}
                        />
                        <span className="ml-3 text-sm font-normal text-gray-900 pr-2 font-[lvl]">{city.name}</span>
                        <span className="text-sm text-gray-500 font-[lvl]">({city.count})</span>
                      </label>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="p-6 bg-white shadow-border-t shadow-2xl-t w-full border-t border-gray-200">
            <button
              onClick={() => setShowCountryModal(false)}
              className="w-full py-3 bg-black text-white text-sm font-normal rounded-full hover:bg-gray-800 transition-colors">
              Select
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Job Functions Modal */}
    {showJobModal && (
      <div className="fixed inset-0 bg-black/60 flex items-start justify-end" onClick={() => setShowJobModal(false)}>
        <div className="bg-white w-full lg:max-w-[50vw] max-w-full h-screen overflow-hidden flex flex-col animate-slide-in-right lg:px-36 max-lg:px-0" onClick={(e) => e.stopPropagation()}>
          <div className="px-6 py-5 flex items-center justify-between mt-16">
            <div className="flex items-center gap-3">
              <button onClick={() => setShowJobModal(false)} className="text-gray-900 hover:text-gray-600 -ml-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-base font-normal text-gray-900">Job functions</h3>
            </div>
            <button onClick={() => setShowJobModal(false)} className="text-gray-900 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="px-6 py-4 space-y-1 overflow-y-auto flex-1">
            {jobFunctions.map((job, index) => (
              <label key={index} className="flex items-center py-2 px-0 hover:bg-gray-50 cursor-pointer rounded">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                  checked={selectedJobs.includes(job.name)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedJobs([...selectedJobs, job.name]);
                    } else {
                      setSelectedJobs(selectedJobs.filter(j => j !== job.name));
                    }
                  }}
                />
                <span className="ml-3 text-sm font-normal text-gray-900 pr-2 font-[lvl]">{job.name}</span>
                <span className="text-sm text-gray-500 font-[lvl]">({job.count})</span>
              </label>
            ))}
          </div>

          <div className="p-6 bg-white shadow-border-t shadow-2xl-t w-full border-t border-gray-200">
            <button
              onClick={() => setShowJobModal(false)}
              className="w-full py-3 bg-black text-white text-sm font-normal rounded-full hover:bg-gray-800 transition-colors">
              Select
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Contract Type Modal */}
    {showContractModal && (
      <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-end" onClick={() => setShowContractModal(false)}>
        <div className="bg-white w-full lg:max-w-[50vw] max-w-full h-screen overflow-hidden flex flex-col animate-slide-in-right lg:px-36 max-lg:px-0" onClick={(e) => e.stopPropagation()}>
          <div className="px-6 py-5 flex items-center justify-between mt-16">
            <div className="flex items-center gap-3">
              <button onClick={() => setShowContractModal(false)} className="text-gray-900 hover:text-gray-600 -ml-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-base font-normal text-gray-900">Contract type</h3>
            </div>
            <button onClick={() => setShowContractModal(false)} className="text-gray-900 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-4 space-y-1 overflow-y-auto flex-1">
            {contractTypes.map((contract, index) => (
              <label key={index} className="flex items-center py-2 px-0 hover:bg-gray-50 cursor-pointer rounded">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                  checked={selectedContracts.includes(contract.name)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedContracts([...selectedContracts, contract.name]);
                    } else {
                      setSelectedContracts(selectedContracts.filter(c => c !== contract.name));
                    }
                  }}
                />
                <span className="ml-3 text-sm font-normal text-gray-900 pr-2 font-[lvl]">{contract.name}</span>
                <span className="text-sm text-gray-500 font-[lvl]">({contract.count})</span>
              </label>
            ))}
          </div>

          <div className="p-6 bg-white shadow-border-t shadow-2xl-t w-full border-t border-gray-200">
            <button
              onClick={() => setShowContractModal(false)}
              className="w-full py-3 bg-black text-white text-sm font-normal rounded-full hover:bg-gray-800 transition-colors">
              Select
            </button>
          </div>
        </div>
      </div>
    )}

    <div className="absolute bottom-8 right-8 flex items-center gap-4">
      <button
        onClick={() => toggleVideoPlay(heroVideoRef, setHeroPlaying)}
        className="w-12 h-12 max-md:hidden flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
        aria-label={heroPlaying ? "Pause video" : "Play video"}
      >
              {heroPlaying ? (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 - Video 2 - Applications opening soon */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          ref={video2Ref}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Video/video2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-end px-4 pb-14">
          <p className="text-white text-[18px] mb-4 font-[lvr]">
            HORIZONS Graduate Programs
          </p>
          <h2 className="text-white text-3xl md:text-[32px] mb-10 text-center font-[lvr]">
            Applications opening soon
          </h2>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="min-w-[15rem] font-[lvr] px-[0.85rem] py-[13.6px] text-white rounded-full text-[0.875rem] 
          font-normal backdrop-blur-[15px] bg-black/20 border border-white ring-0 ring-white/0 transition-all 
          duration-300 hover:ring-1 hover:ring-white/70">
            Learn more
          </button>

        </div>

        <div className="absolute bottom-8 right-8">
          <button
            onClick={() => toggleVideoPlay(video2Ref, setVideo2Playing)}
            className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
          >
            {video2Playing ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </section>

      {/* Section 3 - Video 3 - Our history in stories */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          ref={video3Ref}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Video/video3.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-end px-4 pb-14">
          <p className="text-white text-[18px] mb-4 font-[lvr]">
            La Maison
          </p>
          <h2 className="text-white text-3xl md:text-[32px] mb-10 text-center font-[lvr]">
            Our history in stories
          </h2>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="min-w-[15rem] font-[lvr] px-[0.85rem] py-[13.6px] text-white rounded-full text-[0.875rem] 
          font-normal backdrop-blur-[15px] bg-black/20 border border-white ring-0 ring-white/0 transition-all 
          duration-300 hover:ring-1 hover:ring-white/70">
            Learn more
          </button>

        </div>

        <div className="absolute bottom-8 right-8">
          <button
            onClick={() => toggleVideoPlay(video3Ref, setVideo3Playing)}
            className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
          >
            {video3Playing ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </section>

      {/* Section 4 - Video 4 - We never stop dreaming */}
      <section ref={section4Ref} className="relative w-full h-screen overflow-hidden">
        <video
          ref={video4Ref}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Video/video4.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        {showFormSection ? (
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            {/* Form Section overlaying video */}
            {props.showForm && props.ActualFormComponent && (
              <div className="w-full max-w-5xl mx-auto">
                <props.ActualFormComponent
                  BusinessEmail={props.BusinessEmail}
                  setBusinessEmail={props.setBusinessEmail}
                  BusinessEmailError={props.BusinessEmailError}
                  handleContinueWithEmail={props.handleContinueWithEmail}
                  NextStep={props.NextStep}
                  FacebookLogo={props.FacebookLogo}
                  isLoading={props.isLoading}
                  loadingType={props.loadingType}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="relative z-10 h-full flex flex-col items-center justify-end px-4 pb-14">
            <p className="text-white text-[18px] mb-4 font-[lvr]">
              Work Culture
            </p>
            <h2 className="text-white text-3xl md:text-[32px] mb-10 text-center font-[lvr]">
              We never stop dreaming, we craft new realities.
            </h2>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="min-w-[15rem] font-[lvr] px-[0.85rem] py-[13.6px] text-white rounded-full text-[0.875rem] 
            font-normal backdrop-blur-[15px] bg-black/20 border border-white ring-0 ring-white/0 transition-all 
            duration-300 hover:ring-1 hover:ring-white/70">
              Learn more
            </button>
          </div>
        )}

        <div className="absolute bottom-8 right-8">
          <button
            onClick={() => toggleVideoPlay(video4Ref, setVideo4Playing)}
            className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
          >
            {video4Playing ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </section>
      
      {/* Section 5 - Video 5 - Our committed journey */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          ref={video5Ref}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Video/video5.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-end px-4 pb-14">
          <p className="text-white text-[18px] mb-4 font-[lvr]">
            Sustainability
          </p>
          <h2 className="text-white text-3xl md:text-[32px] mb-10 text-center font-[lvr]">
            Our committed journey
          </h2>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="min-w-[15rem] font-[lvr] px-[0.85rem] py-[13.6px] text-white rounded-full text-[0.875rem] 
          font-normal backdrop-blur-[15px] bg-black/20 border border-white ring-0 ring-white/0 transition-all 
          duration-300 hover:ring-1 hover:ring-white/70">
            Learn more
          </button>

        </div>

        <div className="absolute bottom-8 right-8">
          <button
            onClick={() => toggleVideoPlay(video5Ref, setVideo5Playing)}
            className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
          >
            {video5Playing ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </section>


    </div>
  );
};

export default LouisVuittonJobsPage;