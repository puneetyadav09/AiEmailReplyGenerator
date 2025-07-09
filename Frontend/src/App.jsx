import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import EmailGenerator from './components/EmailGenerator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Hero />
      <Features />
      <EmailGenerator />
      <Footer />
    </div>
  );
}

export default App;