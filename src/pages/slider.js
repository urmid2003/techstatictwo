
import React, { useState } from 'react';
import styles from './Slider.module.css';

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className={styles.slider}>
      <button className={styles.prevButton} onClick={goToPrevious}>
        {'<'}
      </button>
      <div className={styles.slide}>
        {items[currentIndex]}
      </div>
      <button className={styles.nextButton} onClick={goToNext}>
        {'>'}
      </button>
    </div>
  );
};

export default Slider;
