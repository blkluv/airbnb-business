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
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
    </div>
  );
};

export default SlideShow;