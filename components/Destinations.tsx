import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const destinations = [
    {
        name: 'Dubai',
        image: 'https://plus.unsplash.com/premium_photo-1694475631307-0f0a85924605?q=80&w=1690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        flagCode: 'ae',
    },
    {
        name: 'USA',
        image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        flagCode: 'us',
    },
    {
        name: 'Canada',
        image: 'https://plus.unsplash.com/premium_photo-1694475481348-7cbe417be129?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        flagCode: 'ca',
    },
    {
        name: 'Paris',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop',
        flagCode: 'fr',
    },
    {
        name: 'UK',
        image: 'https://images.unsplash.com/photo-1488747279002-c8523379faaa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        flagCode: 'gb',
    }
];

const Destinations: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="destinations" className="relative w-full h-screen bg-[#0F4C75] overflow-hidden flex items-center justify-center py-4">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C75] to-[#1B262C]"></div>
        
        <div className="container mx-auto px-4 relative z-10 w-full h-full flex flex-col justify-center items-center">
            
            {/* Main Card Container - Sized to fit comfortably in viewport */}
            <div className="relative w-full max-w-6xl h-[70vh] md:h-[75vh] bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border-4 border-white/20">
                
                {/* Main Image */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={destinations[activeIdx].name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full rounded-[1.8rem] md:rounded-[3.3rem] overflow-hidden"
                    >
                        <img 
                            src={destinations[activeIdx].image} 
                            alt={destinations[activeIdx].name} 
                            className="w-full h-full object-cover"
                        />
                        {/* Internal Gradient for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </motion.div>
                </AnimatePresence>

                {/* Big Typography Overlay - Positioned Top Right, Overlapping */}
                <div className="absolute -top-12 right-2 md:-top-28 md:right-10 pointer-events-none z-20 w-full flex justify-end">
                    <AnimatePresence mode="wait">
                        <motion.h2 
                            key={destinations[activeIdx].name + "-title"}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="font-serif text-[4rem] md:text-[10rem] lg:text-[13rem] text-white font-normal tracking-tighter leading-none drop-shadow-2xl"
                            style={{ textShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
                        >
                            {destinations[activeIdx].name.toUpperCase()}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Flags Row - Bottom Right Overlapping the card edge */}
                <div className="absolute -bottom-8 md:-bottom-12 right-1/2 translate-x-1/2 md:translate-x-0 md:right-16 flex gap-3 md:gap-5 z-30">
                    {destinations.map((dest, idx) => (
                        <div 
                            key={dest.flagCode} 
                            className={`
                                relative w-14 h-14 md:w-24 md:h-24 rounded-full border-4 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 bg-white
                                ${activeIdx === idx ? 'border-white scale-110 z-10 ring-4 ring-tripzia-blue' : 'border-white/50 opacity-90 hover:opacity-100 hover:scale-105'}
                            `}
                            onClick={() => setActiveIdx(idx)}
                        >
                             <img 
                                src={`https://flagcdn.com/w160/${dest.flagCode}.png`}
                                alt={dest.name}
                                className="w-full h-full object-cover"
                             />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Destinations;