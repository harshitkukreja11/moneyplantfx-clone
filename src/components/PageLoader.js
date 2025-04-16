// src/components/PageLoader.js
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

function PageLoader() {
  const [isLoading, setIsLoading] = useState(true); // Example loading state

  useEffect(() => {
    // Simulate loading completion after 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    isLoading && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-50 bg-white d-flex align-items-center justify-content-center" // Bootstrap classes
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-12 h-12 border-4 border-primary border-top-transparent rounded-circle" // Bootstrap primary color for border
        />
      </motion.div>
    )
  );
}

export default PageLoader;