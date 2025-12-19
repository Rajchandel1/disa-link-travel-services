import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const ReadyToGo: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-sky-200 via-sky-100 to-[#FFF8F0] overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
            <Reveal>
                <div className="text-center mb-10">
                    <h2 className="font-serif text-4xl md:text-6xl text-tripzia-blue tracking-tight uppercase">Ready to go?</h2>
                </div>
            </Reveal>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">
                
                {/* Left Text */}
                <div className="flex-1 text-center lg:text-left">
                     <Reveal delay={0.2}>
                        <h2 className="font-serif text-2xl md:text-4xl text-slate-900 leading-[0.9]">
                            Let's travel <br/>
                            <span className="text-slate-900">around the world</span>
                        </h2>
                    </Reveal>
                </div>

                {/* Center Image - Pill Shape */}
                <div className="flex-[1.5] w-full flex justify-center py-8 lg:py-0">
                    <Reveal delay={0.3}>
                        <div className="w-full max-w-2xl h-48 md:h-64 rounded-full overflow-hidden relative border-4 border-white/50">
                            <img 
                                src="https://plus.unsplash.com/premium_photo-1697729900945-598459160f7b?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="Tropical Island" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Reveal>
                </div>

                {/* Right Info */}
                <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right">
                    <Reveal delay={0.4}>
                        <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mb-4 text-slate-800 hover:text-tripzia-blue transition group">
                            Lets Talk 
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                        </button>
                        <a href="tel:+917595907877" className="font-serif text-3xl md:text-4xl text-slate-900 font-light hover:text-tripzia-blue transition">+91 7595-907-877</a>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ReadyToGo;