import React from 'react';

const CTA = () => {
    return (
        <section className="py-48 px-8 md:px-24 bg-primary text-on-primary flex flex-col items-center text-center relative overflow-hidden border-t-8 border-white/20">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div 
                    className="absolute top-0 left-0 w-full h-full" 
                    style={{ 
                        backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', 
                        backgroundSize: '40px 40px' 
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-5xl">
                <h2 className="font-headline font-black text-6xl md:text-[min(15vw,10rem)] tracking-tighter uppercase mb-12 leading-[0.85]">
                    JOIN THE CREW
                </h2>
                <p className="max-w-2xl mx-auto font-body text-2xl mb-20 text-on-primary-container font-medium leading-relaxed">
                    Gain early access to limited drops, athlete insights, and the KINETIC training lab. No noise. Just performance.
                </p>
                
                <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-4 px-4">
                    <input 
                        className="flex-grow bg-[#000000]/10 border-b-4 border-on-primary-container placeholder:text-on-primary-container/40 text-on-primary-container font-headline font-black text-2xl py-6 px-4 focus:outline-none focus:border-white transition-colors uppercase outline-none" 
                        placeholder="YOUR EMAIL ADDRESS" 
                        type="email"
                    />
                    <button className="bg-[#000000] text-primary font-headline font-black text-xl py-6 px-16 hover:bg-white hover:text-black transition-all uppercase whitespace-nowrap">
                        SUBMIT
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CTA;
