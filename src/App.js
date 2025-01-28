import React, { useState } from 'react';
import {Themes} from "./components/theme/Themes";
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from "./components/Contact";
import Footer from './components/Footer';

const App = () => {
  const [t, setT] = useState(1);
  const theme = Object.values(Themes.n)[t];
  const h_theme = Object.values(Themes.h)[t];

  return (
    <div className="flex flex-col min-h-screen touch-none">
      <Header theme={theme} h_theme={h_theme} />
      <Hero theme={theme} h_theme={h_theme} />
      <div className='flex justify-center my-6'>
        <button 
          className='p-2 bg-black text-white hover:bg-white hover:text-black border-4 border-black font-bold font-mono md:text-xl w-1/6'
          onClick={() => setT((t + 1) % Object.values(Themes.n).length)}>
            Change Theme
        </button>
      </div>
      <Carousel theme={theme} h_theme={h_theme} />
      <Features theme={theme} h_theme={h_theme} />
      <Pricing theme={theme} h_theme={h_theme} />
      <Testimonials theme={theme} h_theme={h_theme} />
      <Contact theme={theme} h_theme={h_theme} />
      <Footer theme={theme} h_theme={h_theme} />
    </div>
  );
};

export default App;