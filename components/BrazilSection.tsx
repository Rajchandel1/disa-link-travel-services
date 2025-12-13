import React from 'react';

const BrazilSection: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
        {/* Big Brazil Image */}
        <img 
            src="" 
            alt="Rio de Janeiro" 
            className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute top-10 right-4 md:right-20">
            <h2 className="font-serif text-[6rem] md:text-[12rem] text-white font-bold tracking-tighter drop-shadow-lg opacity-90 leading-none">
                BRAZIL
            </h2>
        </div>

        {/* Flags Overlay */}
        <div className="absolute bottom-0 w-full pb-10 md:pb-20 bg-gradient-to-t from-black/50 to-transparent">
            <div className="container mx-auto flex justify-center gap-4 md:gap-8">
                {[
                    { country: 'Sweden', colors: ['#006AA7', '#FECC00'] },
                    { country: 'Australia', colors: ['#00008B', '#FF0000'] },
                    { country: 'Brazil', colors: ['#009c3b', '#ffdf00'] },
                    { country: 'India', colors: ['#FF9933', '#138808'] },
                    { country: 'Germany', colors: ['#000000', '#DD0000'] },
                ].map((flag, idx) => (
                    <div key={idx} className={`w-16 h-16 md:w-24 md:h-24 rounded-full border-4 ${flag.country === 'Brazil' ? 'border-white scale-110 z-10' : 'border-white/50'} overflow-hidden shadow-lg relative bg-white`}>
                        {/* Simple CSS Flags simulation */}
                         <img 
                            src={`https://flagcdn.com/w160/${flag.country === 'Sweden' ? 'se' : flag.country === 'Australia' ? 'au' : flag.country === 'Brazil' ? 'br' : flag.country === 'India' ? 'in' : 'de'}.png`}
                            alt={flag.country}
                            className="w-full h-full object-cover"
                         />
                    </div>
                ))}
            </div>
            
            <div className="text-center mt-8">
                <h3 className="text-white font-serif text-3xl md:text-4xl">Plan your travel with confidence</h3>
            </div>
        </div>
    </section>
  );
};

export default BrazilSection;