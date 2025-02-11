import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="content">
        <h1>Welcome to</h1>
        <h1>ResultX SRM</h1>
        <br />
        <p>Your all-in-one platform for managing academic performance.</p>
        <p>From tracking grades to analyzing trends and calculating GPA,</p>
        <p>our tools make it easy to stay on top of your education.</p>
        <p>Take control of your academic journey with ResultHub!</p>
      </div>
      <div className="image-container">
        <img src="bgi.png" alt="Illustration" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;