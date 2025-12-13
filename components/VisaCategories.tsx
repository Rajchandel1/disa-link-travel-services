import React from 'react';
import { motion } from 'framer-motion';

const CategoryCircle: React.FC<{
    title: string;
    sub: string;
    img: string;
    color: string;
    zIndex: number;
    delay?: number;
}> = ({ title, sub, img, color, zIndex, delay = 0 }) => {
    const handleInquire = () => {
        const phoneNumber = "9824301676"; // Remove hyphens for WhatsApp
        const message = `I'm interested in ${title} services. Please provide more information.`;
        const whatsappUrl = `https://wa.me/919824301676?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-xl flex flex-col items-center justify-between overflow-hidden bg-slate-50 shrink-0 -ml-8 first:ml-0 hover:scale-105 transition duration-500 cursor-pointer`}
            style={{ zIndex }}
            onClick={handleInquire}
        >
            <div className="pt-10 px-6 text-center z-10">
                <h4 className="font-serif text-2xl text-slate-800 mb-2">{title}</h4>
                <p className="text-xs text-slate-500 mb-4">{sub}</p>
                <button className="text-xs font-bold uppercase tracking-wide border-b border-slate-300 pb-1 hover:text-tripzia-blue">
                    Inquire
                </button>
            </div>
            
            {/* Masked Image at bottom */}
            <div className="w-full h-1/2 mt-auto relative">
                 <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-slate-50 to-transparent z-10"></div>
                 <img src={img} alt={title} className="w-full h-full object-cover" />
            </div>
        </motion.div>
    );
};

const VisaCategories: React.FC = () => {
  return (
    <section className="bg-sky-50 py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-800 max-w-3xl mx-auto">
                We provide experts create great value for visa categories
            </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 px-4 overflow-x-auto pb-10 scrollbar-hide">
            <CategoryCircle 
                title="Business visa"
                sub="Complete business immigration solutions"
                img="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                color="bg-blue-100"
                zIndex={10}
                delay={0}
            />
             <CategoryCircle 
                title="Official visa"
                sub="Government and diplomatic travel services"
                img="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop"
                color="bg-white"
                zIndex={20}
                delay={0.1}
            />
             <CategoryCircle 
                title="Student visa"
                sub="Study abroad in top universities"
                img="https://images.unsplash.com/photo-1553697388-94e804e2f0f6?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                color="bg-blue-50"
                zIndex={10}
                delay={0.2}
            />
            <CategoryCircle 
                title="Family visa"
                sub="Reunite with your loved ones"
                img="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
                color="bg-white"
                zIndex={0}
                delay={0.3}
            />
        </div>
    </section>
  );
};

export default VisaCategories;