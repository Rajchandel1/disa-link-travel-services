import React from 'react';
import { Plane, Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from './Reveal';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[url('https://images.unsplash.com/flagged/photo-1555685460-1d9cf532761b?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center text-black pt-20 pb-6 relative overflow-hidden">

         <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/60"></div>

  <div className="relative text-black p-6 "></div>
        
        {/* Decorative Plane at bottom */}
        {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
             <Plane size={400} />
        </div> */}

        <div className="container mx-auto px-4 md:px-12 relative z-10 ">
            <div className="bg-white/70 p-4 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-16 mb-8">
                
                {/* Brand & Headline */}
                <div className=" md:col-span-4">
                    <Reveal>
                        <h2 className="bg-white/70 p-4 rounded-lg font-serif text-3xl mb-6 leading-tight font-bold text-black drop-shadow-lg">
                            Yatee Passport <br/><span className="text-xl font-normal text-black">& Visa Services</span>
                        </h2>
                        <p className="text-black text-sm leading-relaxed max-w-sm drop-shadow-md">
                            Your trusted partner for all travel and immigration needs. We turn your dreams of traveling abroad into reality with expert guidance.
                        </p>
                    </Reveal>
                </div>

                {/* Locations */}
                <div className=" md:col-span-4">
                    <Reveal delay={0.1}>
                        <h4 className="bg-white/70 p-4 rounded-lg font-serif text-xl mb-4 flex items-center gap-2 text-black drop-shadow-md"><MapPin size={16}/> Address</h4>
                        <div className="text-black text-sm mb-6 leading-relaxed opacity-80 space-y-4 drop-shadow-md">
                            <div>
                                <p>Dev Kuvar -7, Near Apollo International School, Tragad Road, Chandkheda, Ahmedabad-382424, Gujarat</p>
                            </div>
                        </div>
                        
                        <h4 className="bg-white/70 p-4 rounded-lg font-serif text-xl mb-4 flex items-center gap-2 text-black drop-shadow-md"><Phone size={16}/> Contact</h4>
                        <div className="text-black text-sm mb-6 leading-relaxed opacity-80 space-y-2 drop-shadow-md ">
                            <p>(O): +91 851-128-4458</p>
                            <p>(M): +91 851-128-4458</p>
                        </div>
                        
                    
                    </Reveal>
                </div>

                {/* Newsletter */}
                <div className=" md:col-span-4">
                    <Reveal delay={0.3}>
                        <h4 className="bg-white/70 p-4 rounded-lg font-serif text-xl mb-4 text-black drop-shadow-md">Contact Us</h4>
                        
                        <div className="space-y-2 mb-6 text-black drop-shadow-md">
                             <p className="flex items-center gap-2"><Phone size={16}/> +91 851-128-4458</p>
                             <p className="flex items-center gap-2"><Mail size={16}/> yateepassport@gmail.com</p>
                        </div>

                        {/* <h4 className="bg-white/70 p-4 rounded-lg font-serif text-xl mb-4 text-black drop-shadow-md">Newsletter</h4>
                        <div className="flex items-center border-b border-white/30 pb-2 mb-4">
                            <Mail size={16} className="mr-2 opacity-70" />
                            <input type="email" placeholder="Your email" className="bg-transparent  text-sm w-full placeholder-black" />
                            <button className="text-xs uppercase flex items-center gap-1 hover:text-black">
                                Subscribe
                            </button>
                        </div> */}
                    </Reveal>
                </div>
            </div>

            <div className="text-center text-xs text-black drop-shadow-md flex flex-col md:flex-row justify-between items-center">
                <span>Copyright © 2025 Yatee Passport & Visa Services. All rights reserved.</span>
                <span className="text-2xl mt-2 md:mt-0">Designed By <a className = "border-b-2" href = "https://www.inoit.site/">Inoit</a> </span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;