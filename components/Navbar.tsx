import React, { useState, useEffect } from 'react';
import { Plane, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic color classes based on scroll state
  const textColorClass = scrolled ? 'text-tripzia-blue' : 'text-white';
  const navLinkClass = scrolled ? 'text-slate-700 hover:text-tripzia-blue' : 'text-white/90 hover:text-white';
  const bgClass = scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6';

  return (
    <>
    <nav className={`fixed top-0 left-0 w-full z-50 px-4 md:px-12 flex justify-between items-center transition-all duration-300 ${bgClass}`}>
      <div className="flex items-center gap-3 z-50">
       {/* <img src="https://content.jdmagicbox.com/comp/ahmedabad/a3/079pxx79.xx79.180528212633.k6a3/catalogue/gen-education-and-immigration-services-gujarat-university-navrangpura-ahmedabad-visa-assistance-h6919h3soe.jpg" className = "h-10" alt="" /> */}
        <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 leading-none ${textColorClass}`}>Yatee Passport</span>
            <span className={`text-[0.6rem] font-bold tracking-widest uppercase ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>& Visa Services</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className={`hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider ${navLinkClass}`}>
        <a href="#" className="transition relative group">
            Home
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${scrolled ? 'bg-tripzia-blue' : 'bg-white'}`}></span>
        </a>
        <a href="#destinations" className="transition relative group">
            Destinations
             <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${scrolled ? 'bg-tripzia-blue' : 'bg-white'}`}></span>
        </a>
        <a href="#services" className="transition relative group">
            Services
             <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${scrolled ? 'bg-tripzia-blue' : 'bg-white'}`}></span>
        </a>
        <a href="#yatra" className="transition relative group">
            Yatra
             <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${scrolled ? 'bg-tripzia-blue' : 'bg-white'}`}></span>
        </a>
        {/* <a href="#contact" className="transition relative group">
            Contact
             <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${scrolled ? 'bg-tripzia-blue' : 'bg-white'}`}></span>
        </a> */}
      </div>

      <a href="#contact" className={`hidden md:block px-6 py-2 rounded-full font-medium transition shadow-lg text-sm hover:scale-105 active:scale-95 duration-200 ${scrolled ? 'bg-tripzia-blue text-white hover:bg-sky-800' : 'bg-white text-tripzia-blue hover:bg-sky-50'}`}>
        Contact Us
      </a>

      {/* Mobile Menu Toggle */}
      <button className={`md:hidden z-50 ${textColorClass}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} className="text-slate-800" /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="fixed inset-0 bg-slate-400 z-40 flex flex-col justify-center items-center gap-8 text-xl font-serif text-slate-800"
            >
                <a href="#" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#destinations" onClick={() => setIsOpen(false)}>Destinations</a>
                <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                <a href="#yatra" onClick={() => setIsOpen(false)}>Ahmedabad Yatra</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
                <button className="bg-tripzia-blue text-white px-8 py-3 rounded-full shadow-lg">Contact Us</button>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
};

export default Navbar;