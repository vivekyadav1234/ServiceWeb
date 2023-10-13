import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/ServiceWeb" element={<Home />} />
          <Route path="/ServiceWeb/about" element={<About />} />
          <Route path="/ServiceWeb/services" element={<Services />} />
          <Route path="/ServiceWeb/portfolio" element={<Portfolio />} />
          <Route path="/ServiceWeb/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
