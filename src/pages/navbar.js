import React, { useState, useEffect } from 'react';
import '@/pages/navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
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

   
    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <nav id="navbar">
    <div class="nav-container">
    <button className={`hamburger ${isActive ? 'is-active' : ''}`} onClick={() => setIsActive(!isActive)}>
  {isActive ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="0" y1="5" x2="24" y2="5" />
     <line x1="0" y1="12" x2="24" y2="12" />
     <line x1="0" y1="19" x2="24" y2="19" />
    </svg>
  ) : (
    <> 
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="#5CE1E6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="0" y1="0" x2="24" y2="24" />
      <line x1="0" y1="24" x2="24" y2="0" />
    </svg>
      <span></span>
      <span></span>
      <span></span>
    </>
  )}
</button>



      <div class="menu">
        <div class="nav-item">
          <a aria-label="Link to Events" href="#">Events</a>
        </div>
        <div class="nav-item">
          <a
            aria-label="Link to Gallery"
            href="#"
            >Gallery</a
          >
        </div>
        <div class="nav-item">
          <a
            href="#"
            aria-label="Link to Department"
            >Department</a
          >
        </div>
        <div class="nav-item">
          <a href="#" aria-label="Link to Sponsers"
            >Sponsers</a
          >
        </div>
      </div>

      <div class="mobile-menu">
        <a aria-label="Link to Events" href="#">Events</a>
        <a
          aria-label="Link to Gallery"
          href="#"
          >Gallery</a
        >
        <a
          href="#"
          aria-label="Link to Department"
          >Department</a
        >
        <a href="#" aria-label="Link to Sponser"
          >Sponsers</a
        >
        
        
      
      </div>
    </div>
  </nav>

  );
};

export default Navbar;
