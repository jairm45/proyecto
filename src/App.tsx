import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Barbers from './components/Barbers';
import Appointment from './components/Appointment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Barbers />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}

export default App;