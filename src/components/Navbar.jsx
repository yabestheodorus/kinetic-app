import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center w-full px-8 md:px-12 py-6 max-w-[1920px] mx-auto">
        <div className="text-2xl font-black tracking-tighter text-[#f3ffca] font-headline">KINETIC</div>
        
        <div className="hidden md:flex items-center space-x-12">
          {['STORY', 'GEAR', 'LAB', 'CREW'].map((item, idx) => (
            <a 
              key={item}
              className={`font-headline tracking-tighter uppercase font-bold text-sm transition-all duration-150 ${
                idx === 0 
                ? "text-[#f3ffca] border-b-2 border-[#f3ffca] pb-1" 
                : "text-white/70 hover:text-white"
              }`} 
              href="#"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <span className="material-symbols-outlined text-white/70 cursor-pointer hover:text-primary transition-colors">search</span>
          <button className="bg-primary text-on-primary font-headline tracking-tighter uppercase font-bold text-sm px-6 py-2 scale-95 active:scale-90 transition-transform hover:bg-white hover:text-black">
            SHOP NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
