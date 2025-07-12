import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ProcessSection from './components/ProcessSection';
import ComparisonSection from './components/ComparisonSection';
import PracticalInfo from './components/PracticalInfo';
import WhyChoose from './components/WhyChoose';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <Introduction />
      <ProcessSection />
      <ComparisonSection />
      <PracticalInfo />
      <WhyChoose />
      <Conclusion />
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/diensten" element={<ServicesPage />} />
            <Route path="/over-ons" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;