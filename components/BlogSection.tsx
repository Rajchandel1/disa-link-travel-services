import React from 'react';
import { Reveal } from './Reveal';

const BlogPost: React.FC<{
    tags: string[];
    date: string;
    title: string;
    image: string;
    delay: number;
}> = ({ tags, date, title, image, delay }) => (
    <Reveal delay={delay}>
        <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl h-64 mb-4">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="text-slate-400 text-xs font-bold mb-2 uppercase tracking-wide">{date}</div>
            <h3 className="font-serif text-2xl text-white group-hover:text-sky-300 transition leading-tight">
                {title}
            </h3>
        </div>
    </Reveal>
);

const BlogSection: React.FC = () => {
  return (
    <section className="bg-[#0B5C8E] py-24">
        <div className="container mx-auto px-4 md:px-12">
            <div className="flex justify-between items-end mb-12 text-white">
                <Reveal>
                    <h2 className="font-serif text-4xl md:text-5xl">The latest news and insights</h2>
                </Reveal>
                {/* <button className="hidden md:block bg-white text-slate-900 px-6 py-2 rounded-full text-sm font-bold hover:bg-sky-100 transition">
                    View all blog
                </button> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <BlogPost 
                    tags={['Green card', 'Tourist']}
                    date="February 27, 2024"
                    title="How to ensure a direct hassle-freevisa application"
                    image="https://plus.unsplash.com/premium_photo-1663100543409-061876b76b0e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    delay={0.1}
                />
                <BlogPost 
                    tags={['Green card', 'Tourist']}
                    date="February 27, 2024"
                    title="Get the Employment Insurance For all the Foreign Nationals"
                    image="https://plus.unsplash.com/premium_photo-1726743670673-1500f38abcca?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    delay={0.2}
                />
                <BlogPost 
                    tags={['Business', 'Tourist']}
                    date="February 27, 2024"
                    title="How to ensure a direct hassle free visa application"
                    image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop"
                    delay={0.3}
                />
            </div>
        </div>
    </section>
  );
};

export default BlogSection;