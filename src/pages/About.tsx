import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-content">
      <h2>About</h2>
      <p>This is a demo service built by <strong>born3am</strong> using <strong><a href="https://developer.themoviedb.org/docs/getting-started" target="_blank" rel="noopener noreferrer">The Movie DB API</a></strong> and <strong><a href="https://docs.mistral.ai/api/" target="_blank" rel="noopener noreferrer">Mistral AI API</a></strong>.</p>
    </div>
  );
};

export default About;
