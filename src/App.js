import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound'; // Import the NotFound component

function App() {
  return (
    <Router basename="/ServiceWeb">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-All Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
