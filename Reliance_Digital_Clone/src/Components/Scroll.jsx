import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function Scroll() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, [pathname]);
  
    return null;
  };

export default Scroll