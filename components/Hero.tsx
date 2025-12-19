import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle2, Star, Plane, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.15]);
  
  // Adjusted text animations for better mobile experience
  // Text moves slower on scroll to prevent it from running away while reading/interacting
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  // Critical Fix: Delay opacity fade out so content remains visible while scrolling down on mobile
  // Changing from [0, 0.8] to [0.8, 1] ensures content stays opaque until it's almost fully scrolled out
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Floating animation for decorative elements
  const floatingTransition = {
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hi, I am looking for visa assistance. Origin: ${origin || 'Not specified'}, Destination: ${destination || 'Not specified'}.`;
    const phoneNumber = "7595907877";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    // Changed h-[105vh] to min-h-[100dvh] to accommodate mobile content without overflow/clipping
    // Added pt-28 (mobile) to prevent content from overlapping with the fixed navbar
    <header ref={containerRef} className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-20 md:pt-20 md:pb-0 overflow-hidden">
      
      {/* Dynamic Background Layer */}
      <motion.div 
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1974&auto=format&fit=crop')", // Airplane wing image
          }}
        />
        {/* Bright/Airy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-white/10"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </motion.div>

      {/* Floating Decorative 3D Elements - Hidden on mobile to reduce clutter */}
      <motion.div 
        animate={{ y: [-15, 15] }}
        transition={floatingTransition}
        className="absolute top-1/4 right-[15%] z-10 hidden lg:flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white/40 p-3 rounded-2xl shadow-xl"
      >
        <div className="bg-green-100 p-2 rounded-full">
            <CheckCircle2 className="text-green-600 w-6 h-6" />
        </div>
        <div>
            <p className="text-xs text-slate-600 font-medium">Approval Rate</p>
            <p className="text-lg font-bold text-slate-900">99.8%</p>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [10, -10], x: [5, -5] }}
        transition={{ ...floatingTransition, delay: 1 }}
        className="absolute bottom-1/3 left-[10%] z-10 hidden lg:flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white/40 p-3 rounded-2xl shadow-xl"
      >
        <div className="bg-amber-100 p-2 rounded-full">
            <Star className="text-amber-500 w-6 h-6" fill="currentColor" />
        </div>
        <div>
            <p className="text-xs text-slate-600 font-medium">Traveler Rating</p>
            <p className="text-lg font-bold text-slate-900">4.9/5.0</p>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full"
      >
        {/* Pill Badge - Reduced margin for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/40 backdrop-blur-md mb-6 md:mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-white text-xs font-bold uppercase tracking-wider drop-shadow-sm">#1 Trusted Visa Platform</span>
        </motion.div>

        {/* Headlines - Adjusted sizing for mobile to prevent wrapping/clutter */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-7xl lg:text-8xl leading-tight md:leading-none text-white font-bold drop-shadow-lg tracking-tight mb-4 md:mb-6"
        >
          Get Your Visa,<br />
          <span className="text-white">
            Chase Your Dreams
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-base md:text-xl text-white font-medium tracking-wide max-w-2xl mb-8 md:mb-12 leading-relaxed drop-shadow-md px-2"
        >
          Navigate global borders effortlessly. From tourist visas to business permits, we simplify the paperwork so you can focus on the adventure.
        </motion.p>

        {/* Glassmorphism Action Widget - Enhanced for mobile touch targets */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-4xl p-2 md:p-3 bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-3 md:gap-2"
        >
            <div className="flex-1 flex items-center gap-3 px-4 py-3 md:px-6 md:py-2 bg-white rounded-2xl border border-slate-100 focus-within:ring-2 focus-within:ring-brand-500 transition-all group">
                <MapPin className="text-slate-400 group-focus-within:text-brand-500 transition-colors shrink-0" size={20} />
                <div className="flex flex-col text-left w-full">
                    <label className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">I am from</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Ahmedabad" 
                      className="w-full bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-300 font-medium text-sm md:text-base p-0 focus:ring-0"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                   required />
                </div>
            </div>

            <div className="flex items-center justify-center md:hidden py-1">
                 <ArrowRight className="text-white/80 rotate-90 drop-shadow-sm" />
            </div>

            <div className="flex-1 flex items-center gap-3 px-4 py-3 md:px-6 md:py-2 bg-white rounded-2xl border border-slate-100 focus-within:ring-2 focus-within:ring-brand-500 transition-all group">
                <Plane className="text-slate-400 group-focus-within:text-brand-500 transition-colors shrink-0" size={20} />
                <div className="flex flex-col text-left w-full">
                    <label className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Travelling to</label>
                    <input 
                      type="text" 
                      placeholder="e.g. USA" 
                      className="w-full bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-300 font-medium text-sm md:text-base p-0 focus:ring-0"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                   required />
                </div>
            </div>

            <button 
              onClick={handleWhatsAppRedirect}
              className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-green-500/25 transition-all flex items-center justify-center gap-2 group whitespace-nowrap mt-2 md:mt-0"
            >
                <MessageCircle size={20} />
                <span>Apply Now</span>
            </button>
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Indicator - Hide on short screens/mobile if needed to save space */}
      {/* <motion.div 
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none hidden md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold drop-shadow-md">Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white to-white/0 relative overflow-hidden drop-shadow-md">
            <motion.div 
                animate={{ top: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="absolute w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent top-0"
            ></motion.div>
        </div>
      </motion.div> */}
    </header>
  );
};

export default Hero;