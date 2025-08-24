import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Hi I'm Arun Sisarran</h2>
            <div className="about-description">
              <p>
                I've always been the type of person who gets excited about understanding how things work—whether it's taking apart old electronics as a kid or staying up way too late trying to figure out why my code isn't running the way I expected. What started as curiosity about computers has evolved into a genuine passion for machine learning and AI. I'm currently studying Computer Science at CUNY Hunter College, but honestly, some of my best learning happens outside the classroom when I'm working on random projects or going down rabbit holes about neural networks on YouTube. There's something addictive about that moment when you finally get a model to work, or when you realize you can solve a problem you never thought was possible.
              </p>
              <p>
                What I love most about this field is that it's constantly changing, which means I'm always learning something new. I care a lot about building things that actually matter to people, not just impressive-looking demos. When I'm not coding, I'm probably exploring different neighborhoods in NYC, trying new coffee shops, so please let me know your recommendations!
              </p>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="/images/IMG_9955.jpeg"
              alt="Your Name" 
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
