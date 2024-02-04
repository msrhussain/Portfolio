import React from 'react';
import './Home.css';
import BioImage from '../SVGs/BioImage';

const Home = () => {
  return (
    <section id="home" className="home-wrapper">
      <div className="bio-info">
        <div className="name">
          Mohammad Saddam
        </div>
        <div className="designation">
          Software Engineer
        </div>
        <div className="organization">
          <a href="https://www.classicinformatics.com/" target='_blank' rel='noopener noreferrer' >
            @classic Informatics
          </a>
        </div>
        <div className="socials">
          <div className="social-link">
            <a href="https://www.linkedin.com/in/msrhussain" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
              LinkedIn
            </a>
          </div>
          <div className="social-link">
            <a href="https://github.com/msrhussain" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
              Github
            </a>
          </div>
        </div>
        <a href="https://www.linkedin.com/in/msrhussain"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Hire Me
        </a>
      </div>
      <div className="bio-image">
        <BioImage />
      </div>
    </section>
  );
};
export default Home;