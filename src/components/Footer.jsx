import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface p-24 border-t border-white/5 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 md:px-12 max-w-[1920px] mx-auto relative z-10">
        <div className="text-4xl font-black text-[#f3ffca] font-headline mb-16 md:mb-0 tracking-[min(-0.02em,-0.04em)] uppercase">KINETIC</div>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-16 md:mb-0">
          {['PRIVACY', 'TERMS', 'ACCESSIBILITY', 'CONTACT'].map(link => (
            <a 
              key={link}
              className="font-label uppercase text-[11px] tracking-[0.3em] text-white/40 hover:text-primary transition-colors" 
              href="#"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="font-label uppercase text-[10px] tracking-[0.2em] text-white/20 text-center">
          © 2024 KINETIC MONOLITH. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
