import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

 export const TypedText = () => {
    const typedElementRef = useRef(null);
  
    useEffect(() => {
      const typed = new Typed(typedElementRef.current, {
        strings: ['Frontend Developer', 'Backend Developer', 'MERN Stack Developer', 'Full Stack Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
  
      return () => {
        typed.destroy(); // Cleanup on component unmount
      };
    }, []);
  
    return <span style={{color:'orangered'}}  className="role" ref={typedElementRef} />;
  };
  