import React from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Reveal } from './Reveal';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24">
         {/* Background Image & Merge */}
         <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1737588194364-de31fcfc2059?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" 
                alt="Business Meeting" 
                className="w-full h-full object-cover opacity-40"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-1000/90"></div>
            
             {/* Top Merge Gradient */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FFF8F0] to-transparent"></div>
            
            {/* Bottom Merge Gradient */}
           <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white-900/70 to-transparent"></div>

        </div>

        <div className="container mx-auto px-4 md:px-12 relative z-10">
            <Reveal>
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-black mb-4 drop-shadow-lg">Get in Touch</h2>
                    <p className="text-black/80 max-w-xl mx-auto">Ready to start your journey? Contact Disaa Link Travel Services today.</p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/10">
                {/* Form */}
                <div className="p-8 md:p-12">
                    <Reveal delay={0.2}>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-black uppercase tracking-wide">First Name</label>
                                    <input type="text" className="w-full bg-white/10 border border-white/20 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" placeholder="Raj" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-black uppercase tracking-wide">Last Name</label>
                                    <input type="text" className="w-full bg-white/10 border border-white/20 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" placeholder="Chandel" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-black uppercase tracking-wide">Email</label>
                                <input type="email" className="w-full bg-white/10 border border-white/20 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" placeholder="raj@example.com" />
                            </div>
                             <div className="space-y-2">
                                <label className="text-sm font-bold text-black uppercase tracking-wide">Message</label>
                                <textarea rows={4} className="w-full bg-white/10 border border-white/20 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" placeholder="I'm interested in..." />
                            </div>
                            <button className="w-full bg-tripzia-blue text-white py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-sky-600 transition flex justify-center items-center gap-2 shadow-lg">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </Reveal>
                </div>

                {/* Info Side */}
                <div className="bg-tripzia-blue/80 backdrop-blur-md text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
                    
                    <Reveal delay={0.4}>
                        <div className="space-y-8 relative z-10">
                            <div>
                                <h3 className="font-serif text-2xl mb-6 border-b border-black/20 pb-4 text-white">Contact Info</h3>
                                <div className="space-y-6 text-black">
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition"><MapPin size={20} className="shrink-0 text-white" /></div>
                                        <div className="space-y-1">
                                            <p className="font-bold text-white uppercase text-xs tracking-wider mb-1">Address</p>
                                            <p className="leading-relaxed text-white">Dev Kuvar -7, Near Apollo International School, Tragad Road, Chandkheda, Ahmedabad-382424, Gujarat</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                         <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition"><Phone size={20} className="shrink-0 text-white" /></div>
                                        <div className="space-y-1">
                                            <p className="font-bold text-white uppercase text-xs tracking-wider mb-1">Contact</p>
                                            <p className="text-white">(O): +91 851-128-4458</p>
                                            <p className="text-white">(M): +91 851-128-4458</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                         <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition"><Mail size={20} className="shrink-0 text-white" /></div>
                                        <div>
                                            <p className="font-bold text-white uppercase text-xs tracking-wider mb-1">Email</p>
                                            <p className="text-white">yateepassport@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <div className="relative z-10 mt-12 bg-white/20 p-6 rounded-xl border border-black/5">
                         <h4 className="font-serif text-xl mb-4 flex items-center gap-2 text-white"><Clock size={18}/> Opening Hours</h4>
                         <div className="flex justify-between text-white text-sm mb-2 border-b border-black/10 pb-2">
                             <span>Mon - Fri</span>
                             <span>11:00 am – 8:00 pm</span>
                         </div>
                         <div className="flex justify-between text-white text-sm">
                             <span>Saturday</span>
                             <span>11:00 am – 8:00 pm</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactSection;