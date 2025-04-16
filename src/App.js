import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import BlogSlider from './components/BlogSlider';
import Footer from './components/Footer';  // Import Footer

import Home from './pages/Home';
import About from './pages/About';
import Accounts from './pages/Accounts';
import Markets from './pages/Markets';
import Platforms from './pages/Platforms';
import News from './pages/News';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAB from './components/FAB';
import FeatureCards from './components/FeatureCards';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Router>
      {isLoading && <PageLoader />}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Example: Placing BlogSlider on the Home page */}
        <Routes>
          <Route path="/" element={<> <BlogSlider /> <Home /> </>} />
          <Route path="/about" element={<About />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Example: Placing FeatureCard below the main content */}
        <FeatureCards />

        {/* Example: Placing Fab outside of main to be potentially fixed */}
        <FAB />
        
        {/* Footer component */}
        <Footer />  {/* Add Footer */}
      </div>
    </Router>
  );
};

export default App;
