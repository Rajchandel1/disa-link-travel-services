import React from 'react';
import { Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const AhmedabadSection: React.FC = () => {
  return (
    <section id="yatra" className="relative w-full py-20 md:py-32 overflow-hidden bg-[#FFF8F0]">
        
        {/* Background Mandala Pattern (simulated with CSS/SVG) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none">
            <svg width="800" height="800" viewBox="0 0 100 100" className="animate-spin-slow">
                <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor" className="text-orange-500" />
            </svg>
        </div>

        <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
                <Reveal>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Featured Tour</span>
                        <div className="flex text-yellow-400">
                            {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl text-slate-800 leading-none mb-6">
                        Ahmedabad <br/> <span className="text-orange-600">Yatra</span>
                    </h2>
                </Reveal>
                
                <Reveal delay={0.4}>
                    <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-orange-500 pl-6">
                        Discover the vibrant city of Ahmedabad, where rich history meets modern. Explore stunning architecture, from the intricate designs of the Sabarmati Ash to the stunning beauty of the Akshardham Temple.
                    </p>
                </Reveal>
                
                <Reveal delay={0.6}>
                    <p className="text-slate-600 leading-relaxed">
                        Savor delicious cuisine, immerse yourself in colorful markets, and experience the hospitality of the locals. Join us for an unforgettable journey through this cultural gem India!
                    </p>
                </Reveal>

                <Reveal delay={0.8}>
                   <motion.button
    whileHover={{ scale: 0.9, backgroundColor: "#c2410c" }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-orange-200 mt-4 group"
    onClick={() => window.open(
        "https://docs.google.com/document/d/1j0Y0NiJwb3WwgGl3Qp9-JpDMUhO5ftxDTYQxP4lT9iQ/edit?tab=t.0",
        "_blank"
    )}
>
    <Download size={20} />
    CHECKOUT ITINERARY
</motion.button>

                </Reveal>
            </div>

            {/* Right Images Collage */}
            <div className="relative h-[600px] order-1 lg:order-2">
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute right-0 top-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1693629704084-0f4600ba9ffd?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Indian Architecture" 
                        className="w-full h-full object-cover hover:scale-110 transition duration-700"
                    />
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-0 bottom-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1515141866783-3222fca27f70?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Ahmedabad Culture" 
                        className="w-full h-full object-cover hover:scale-110 transition duration-700"
                    />
                </motion.div>

                 <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 left-10 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl z-30 flex flex-col items-center"
                >
                    <span className="text-3xl font-bold text-orange-600">Explore!</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">With Disa Link <br />travel services</span>
                </motion.div>
            </div>

        </div>
    </section>
  );
};

export default AhmedabadSection;