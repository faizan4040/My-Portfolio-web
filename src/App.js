import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skils/Skills';
import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
import Work from './components/Work/Work';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/ContactUS/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <div>
 
    <Header/>

    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Qualification/>
    <Work/>
    <Testimonials/>
    <Contact/>
    </main>

    <Footer/>
    <ScrollUp/>

    </div>

    
  );
}
export default App;
