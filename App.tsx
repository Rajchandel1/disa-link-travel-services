import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import AhmedabadSection from './components/AhmedabadSection';
import Timeline from './components/Timeline';
import VisaCategories from './components/VisaCategories';
import ReadyToGo from './components/ReadyToGo';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <Services />
      <AhmedabadSection />
      <Destinations />
      {/* <Timeline /> */}
      <VisaCategories />
      <BlogSection />
      <ReadyToGo />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;