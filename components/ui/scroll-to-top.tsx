"use client"

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="
            fixed 
            bottom-8 
            right-8 
            z-50 
            bg-blue-500 
            text-white 
            p-3 
            rounded-full 
            shadow-lg 
            hover:bg-blue-600 
            transition-all 
            duration-300 
            animate-bounce-slow
            group
          "
          aria-label="Scroll to Top"
        >
          <ChevronUp 
            className="
              w-6 
              h-6 
              group-hover:scale-110 
              transition-transform 
              duration-300
            " 
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;