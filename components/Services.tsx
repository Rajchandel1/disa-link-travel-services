import React from 'react';
import { Reveal } from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 z-10 bg-none">
        <div className="container mx-auto px-4 md:px-12">
            {/* Intro Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Tall Image */}
                <div className="lg:col-span-4 h-full relative group overflow-hidden rounded-3xl hidden lg:block shadow-2xl">
                    <Reveal delay={0.2} width="100%">
                        <img 
                            src="https://plus.unsplash.com/premium_photo-1732738372625-8dc6a664ec78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Woman looking at scenery" 
                            className="w-full h-[650px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </Reveal>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                    <Reveal>
                        <h2 className="font-serif text-5xl md:text-6xl text-slate-800 mb-10 leading-tight">
                            Immigration services from <br/> <span className="text-tripzia-blue">experienced agents</span>
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {/* Card 1 */}
                        <Reveal delay={0.2}>
                            <div className="bg-slate-50 p-8 rounded-3xl flex flex-col justify-center items-center text-center aspect-square transition hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full w-full border border-slate-100 shadow-sm">
                                <h3 className="font-serif text-2xl mb-2 text-slate-800">Family <br/> Ties & <br/> Visa</h3>
                            </div>
                        </Reveal>
                        
                        {/* Card 2 */}
                        <Reveal delay={0.3}>
                            <div className="bg-tripzia-blue p-8 rounded-3xl flex flex-col justify-center items-center text-center aspect-square transition hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full w-full shadow-lg text-white">
                                <h3 className="font-serif text-5xl mb-2 font-bold">180k+</h3>
                                <p className="text-sky-100 font-medium">Happy <br/> Travelers</p>
                            </div>
                        </Reveal>

                        {/* Image Card */}
                        <Reveal delay={0.4}>
                            <div className="relative rounded-3xl overflow-hidden aspect-square h-full w-full shadow-lg group">
                                <img 
                                    src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Passport and plane ticket" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                         {/* Card 4 */}
                         <Reveal delay={0.5}>
                            <div className="bg-slate-50 p-8 rounded-3xl flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:h-44 transition hover:bg-white hover:shadow-lg cursor-pointer h-full w-full border border-slate-100">
                                <h3 className="font-serif text-4xl mb-1 text-tripzia-blue">20+</h3>
                                <p className="text-slate-600 font-medium">Visa <br/> categories</p>
                            </div>
                        </Reveal>

                        {/* Card 5 */}
                         <Reveal delay={0.6}>
                            <div className="bg-slate-50 p-8 rounded-3xl flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:h-44 transition hover:bg-white hover:shadow-lg cursor-pointer h-full w-full border border-slate-100">
                                <h3 className="font-serif text-2xl mb-1 text-slate-800"> Online <br/> Assessment</h3>
                            </div>
                        </Reveal>

                        {/* Text Description */}
                        <Reveal delay={0.7}>
                            <div className="p-6 text-sm text-slate-500 leading-relaxed bg-slate-50 rounded-2xl border border-slate-100">
                                DISAA LINK was established with a small idea that was incepted in the minds of its promoters! We skillfully guide the applicants for their immigration process.
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;