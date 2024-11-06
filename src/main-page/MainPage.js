import React, { useState, useEffect } from 'react';
import './MainPage.css'; // CSS file for animations

// Import images
import Image1 from '../assets/images/chuck.png';
import Image2 from '../assets/images/dan.png';
import Image3 from '../assets/images/emma.png';
import Image4 from '../assets/images/stin.png';

const images = [Image1, Image2, Image3, Image4];

const MainPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [text, setText] = useState('');
  const titleText = "spider water";

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      setText(titleText.slice(0, i + 1));
      i++;
      if (i === titleText.length) clearInterval(typeInterval);
    }, 150);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="main-page">
      <div className="image-container">
        <img src={images[currentImage]} alt="Rotating" className="floating-image" />
      </div>
      <h1 className="typing-text">{text}</h1>
      <p className="location-label">cambridge ma - cryptid pop</p>
    </div>
  );
};

export default MainPage;