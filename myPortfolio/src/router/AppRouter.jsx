import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Works from '../pages/Works';
// import Service from '../pages/Service';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

import { motion } from 'framer-motion';

export default function AppRouter() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />
      <Route path="/about" element={<PageWrapper><About/></PageWrapper>} />
      <Route path="/works" element={<PageWrapper><Works/></PageWrapper>} />
      {/* <Route path="/service" element={<PageWrapper><Service/></PageWrapper>} /> */}
      <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>} />
      <Route path="*" element={<PageWrapper><NotFound/></PageWrapper>} />
    </Routes>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
