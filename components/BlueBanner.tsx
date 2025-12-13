import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BlueBanner: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0B5C8E] overflow-hidden py-16 md:py-24">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B5C8E] via-[#0B5C8E]/90 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center text-white">
            
            {/* Left Text Links */}
            <div className="space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl mb-6">Leading Immigration <br/> Consulting Firm</h2>
                <div className="space-y-2 text-sky-100 font-light">
                    <p className="border-b border-sky-400/30 pb-2 w-max hover:text-white cursor-pointer transition">Visa application fee</p>
                    <p className="border-b border-sky-400/30 pb-2 w-max hover:text-white cursor-pointer transition">Visa policy for afghanistan</p>
                    <p className="border-b border-sky-400/30 pb-2 w-max hover:text-white cursor-pointer transition">Visa for indian nationals</p>
                </div>
            </div>

            {/* Middle Big Offer */}
            <div className="flex justify-center">
                <div className="border border-white/30 rounded-full p-10 w-64 h-64 flex flex-col justify-center items-center text-center backdrop-blur-sm">
                    <span className="text-7xl font-serif">40</span>
                    <span className="text-xl uppercase tracking-widest">% OFF</span>
                    <span className="text-xs mt-2 opacity-80">Education fees</span>
                </div>
            </div>

            {/* Right Badge */}
            <div className="flex justify-end relative">
                <div className="bg-white text-slate-900 rounded-full w-48 h-48 flex flex-col justify-center items-center text-center p-4 relative shadow-2xl">
                    <div className="absolute -top-6">
                        {/* Red maple leaf icon representation */}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#D80027" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z" />
                        </svg>
                    </div>
                    <h3 className="font-serif text-xl mb-1 mt-2">Migrate to <br/> canada</h3>
                    <div className="w-full h-px bg-slate-200 my-2"></div>
                    <p className="text-xs font-mono">(00+) 123 456 7890</p>
                    <div className="absolute -bottom-2 -right-2 bg-slate-900 text-white rounded-full p-2">
                        <ArrowUpRight size={16} />
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default BlueBanner;