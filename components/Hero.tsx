import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <header ref={ref} className="relative w-full h-[100vh] overflow-hidden flex flex-col justify-center items-center">
      {/* Background Image with Fixed Attachment for Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover"
        style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
             backgroundPosition: 'center top',
             backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Large Typography */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 flex flex-col justify-center items-center text-center px-4"
      >
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-white font-bold drop-shadow-lg tracking-tight mb-4"
        >
Get Your Visa, Chase Your Dreams        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-xl md:text-2xl text-white/90 font-light tracking-wide drop-shadow-md"
        >
Fast Processing | Affordable Prices | 24/7 Support        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/80">Scroll to Explore</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <motion.div 
                animate={{ top: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                className="absolute w-full h-1/2 bg-white top-0"
            ></motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;