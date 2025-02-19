import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-content">
      <p>
        Welcome to <strong>The Spoilerator</strong>! This application is designed for the impatient, the curious, and the malicious who want to get the spoilers before the movie even starts.
      </p>
      <p>
        It was built in few days with the help of AI models (Mistral and GPT-4o), and it also uses Mistral AI API to generate the spoilers. The application is powered by TMDB API to fetch the movie details and posters.
      </p>
      <h2>Stack Used</h2>
      <p className='about-content__stack'>
        React, TypeScript, Vite, Cline, Github Copilot, TMDB API, Mistral AI API.
      </p>
      <p>
        This project is open-source and available on <a href="https://github.com/born3am/spoilerator" target="_blank" rel="noopener noreferrer">GitHub</a>. Feel free to explore the code, contribute, or provide feedback.
      </p>
      <p>
        Built with ❤️ by <strong>Born3am</strong>.
      </p>
    </div>
  );
};

export default About;
