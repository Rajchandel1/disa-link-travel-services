import React from 'react';
import { Plane, ShieldCheck, Map } from 'lucide-react';
import { Reveal } from './Reveal';

const TimelineStep: React.FC<{
    title: string;
    desc: string;
    image: string;
    icon: React.ReactNode;
}> = ({ title, desc, image, icon }) => (
    <Reveal>
        <div className="relative flex items-center mb-24 last:mb-0">
            <div className="flex-1 pr-12 text-right hidden md:block">
                <h3 className="font-serif text-3xl text-white mb-2">{title}</h3>
                <p className="text-sky-100/80 text-sm leading-relaxed max-w-xs ml-auto font-light">{desc}</p>
            </div>
            
            {/* Center Line Marker */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_15px_rgba(255,255,255,0.8)] ring-4 ring-white/20"></div>

            <div className="flex-1 pl-12 hidden md:block">
                <div className="w-56 h-72 overflow-hidden arch-image border-4 border-white/20 relative mx-auto md:mx-0 group shadow-2xl">
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden pl-10 text-white">
                <h3 className="font-serif text-2xl mb-2">{title}</h3>
                <p className="text-sky-100/80 text-sm mb-4 font-light">{desc}</p>
                <div className="w-full h-48 overflow-hidden rounded-2xl shadow-lg border border-white/10">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </Reveal>
);

const Timeline: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
        {/* Background Image Merged */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
                alt="Sea Background" 
                className="w-full h-full object-cover"
            />
            {/* Blue Tint Overlay to match brand but keep texture */}
            <div className="absolute inset-0 bg-[#0F3D5E]/95 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-1500/90 via-[#0F3D5E]/80 to-slate-1000/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex">
            {/* Large Plane Side Graphic */}
            <div className="hidden lg:block w-1/3 relative pointer-events-none">
                 <img 
                    src="https://images.unsplash.com/photo-1525396524423-64f7b55f5b33?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Plane Nose" 
                    className="absolute -left-20 top-40 w-[120%] max-w-none opacity-80 drop-shadow-2xl rounded-3xl"
                    style={{ transform: 'rotate(-15deg)' }}
                 />
            </div>

            {/* Timeline Content */}
            <div className="w-full lg:w-2/3 relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

                <div className="space-y-12 py-10">
                     <TimelineStep 
                        title="Travel requirement for Dubai"
                        desc="We guide our clients for the perception & better career opportunities for the students, overseas services."
                        image="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1000&auto=format&fit=crop"
                        icon={<Plane />}
                     />
                     <TimelineStep 
                        title="Multi-risk travel insurance"
                        desc="Comprehensive protection for your journey. Medical, baggage, and cancellation coverages included."
                        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop"
                        icon={<ShieldCheck />}
                     />
                     <TimelineStep 
                        title="Travel destination requirements"
                        desc="Expert consultation for visa processing, document verification and embassy interviews."
                        image="https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?q=80&w=1000&auto=format&fit=crop"
                        icon={<Map />}
                     />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Timeline;