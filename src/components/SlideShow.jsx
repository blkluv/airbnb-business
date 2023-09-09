import React, { useState, useEffect } from 'react';

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index to show the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Clean up the interval
  }, [images]);

  return (
    <img
    src={images[currentIndex]}
    alt={`Image ${currentIndex}`}
    className={`rounded-xl object-cover aspect-square transition-opacity duration-500 ${
      currentIndex === currentIndex ? 'opacity-100' : 'opacity-0'
    }`}
  />
  
  );
};

export default SlideShow;
