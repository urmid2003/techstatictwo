import React, { useState, useEffect } from 'react';
import '@/pages/navbar.css';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <nav className='navbarStyle'>
     
      <div>
        <p>Techstatic</p>
        
      </div>
      <div className='innerstyle'>
      <div>
        <a className="nav-link" href="/about">Events</a>
      </div>
      <div>
        <a className="nav-link" href="/about">Gallery</a>
      </div>
      <div>
        <a className="nav-link" href="/about">Department</a>
      </div>
      <div>
        <a className="nav-link" href="/about">Sponsers</a>
      </div>


      </div>
     
    </nav>
  );
};

export default Navbar;
