import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Image1 from '../assets/images/dan.png';
import Image2 from '../assets/images/stin.png';
import Image3 from '../assets/images/emma.png';
import Image4 from '../assets/images/chuck.png';
import { Typewriter } from 'react-simple-typewriter';


const images = [Image1, Image2, Image3, Image4];

const MainPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-page">
      <div className="image-container">
        <img src={images[currentImage]} alt="Rotating" className="floating-image" />
      </div>
      <h1 className="typing-text">
        <Typewriter
          words={['spider water']}
          loop={1}
          typeSpeed={120}
          deleteSpeed={50}
          cursor
          cursorStyle="_"
        />
      </h1>
      <p className="location-label">cambridge ma - cryptid pop</p>
    </div>
  );
};

export default MainPage;