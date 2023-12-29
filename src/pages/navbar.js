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

  // Your existing JavaScript code
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector('.mobile-menu');

    const handleHamburgerClick = () => {
      hamburger.classList.toggle("is-active");
      mobileMenu.classList.toggle('is-open');
    };

    hamburger.addEventListener("click", handleHamburgerClick);

    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add('nav-active');
      } else {
        navbar.classList.remove('nav-active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listeners
    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <nav id="navbar" className='navbar'>
      <button className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
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
          <a className="nav-link" href="/about">Sponsors</a>
        </div>
      </div>
      <div className="mobile-menu">
          <a aria-label="Link to Home Page" href="#">Home</a>
          <a href="#" aria-label="Link to Contact Us Page"
            >Events</a
          >
          <a
            href="#"
            aria-label="Link to Announcements Page on Linktree"
            >Gallery</a
          >
          <a href="# " aria-label="Link to Events Page"
            >Department</a
          >
         
          <a aria-label="Link to Sponsors Page" href="#"
            >Sponsors</a
          >
          
        </div>
    </nav>
  );
};

export default Navbar;
