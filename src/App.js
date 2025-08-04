import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import Footer from './components/Footer';
import StickyFooterIcons from './components/StickyFooterIcons';
import ScrollToTopButton from './components/ScrollToTopButton';

import Home from './pages/Home';
import About from './pages/About';
import Accounts from './pages/Accounts';
import Markets from './pages/Markets';
import Platforms from './pages/Platforms';
import News from './pages/News';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Deposit from './pages/Deposit';
import Withdrawl from './pages/Withdrawl';
import PreciousMetal from './pages/PreciousMetal';
import Energy from './pages/Energy';
import Indices from './pages/Indices';
import Shares from './pages/Shares';
import Trading from './pages/Trading';
import MobileTrading from './pages/MobileTrading';
import Login from './pages/Login';
import WebTerminal from './pages/WebTerminal';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';

// ✅ Create a custom layout handler inside a wrapper component
const LayoutWrapper = () => {
  const location = useLocation();
  const hideLayoutRoutes = ['/login', '/web-terminal'];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdrawl" element={<Withdrawl />} />
        <Route path="/preciousmetal" element={<PreciousMetal />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/indices" element={<Indices />} />
        <Route path="/shares" element={<Shares />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/mobiletrading" element={<MobileTrading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/web-terminal" element={<WebTerminal />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
      {!shouldHideLayout && <StickyFooterIcons />}
      {!shouldHideLayout && <ScrollToTopButton />}
    </div>
  );
};

// ✅ Main App component with Router and Loader
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      {isLoading && <PageLoader />}
      {!isLoading && <LayoutWrapper />}
    </Router>
  );
};

export default App;
