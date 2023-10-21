import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
import Footer from './components/Footer';

function NotFound() {
  return (
    <div>
      <p>404 - Not Found</p>
      <a href="/">Go to Home</a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
