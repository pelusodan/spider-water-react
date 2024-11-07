import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Image1 from '../assets/images/dan.png';
import Image2 from '../assets/images/stin.png';
import Image3 from '../assets/images/emma.png';
import Image4 from '../assets/images/chuck.png';
import { Typewriter } from 'react-simple-typewriter';

const images = [
    { src: Image1, title: "please god dont press me please man" },
    { src: Image2, title: "big buck hunter leaderboard boston" },
    { src: Image3, title: "where the heck can I find a bass amp" },
    { src: Image4, title: "how to get synth sounds off broken board" }
  ];

const MainPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Randomize images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        let nextImage;
        do {
          nextImage = Math.floor(Math.random() * images.length);
        } while (nextImage === prevImage); // Ensure it’s a new image
        return nextImage;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

    // Function to handle click and navigate to the URL
    const handleHeadingClick = () => {
        window.location.href = 'https://www.instagram.com/spiderwaterband/';
      };

  return (
    <div className="main-page">
      <div className="image-container">
      <img 
          src={images[currentImage].src} 
          alt="Rotating Face" 
          title={images[currentImage].title} 
          className="floating-image"
          onClick={handleHeadingClick}
        />
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