import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Me</h1>
      </header>
      <main className="about-main">
        <section className="about-section">
          <h2>Background</h2>
          <p>
            My name is Kian Silva. I'm currently a junior at Columbia University in the School of Engineering and Applied Science (SEAS), where I'm part of the combined 3-2 engineering program. My first three years were spent at Sarah Lawrence College, where I developed a strong foundation in liberal arts alongside my technical studies.
          </p>
        </section>
        <section className="about-section">
          <h2>Project Overview</h2>
          <p>
            This weather app was initially created as a proof of concept during my freshman year for an internship I obtained at PharmaCCX. The primary goal was to gain experience working with APIs, and this project allowed me to do just that. 
          </p>
          <p>
            Since then, I’ve enhanced the app with minor adjustments to the styles and overall functionality. The app uses the OpenWeatherAPI to fetch weather data, and while it still encounters some errors when searching for certain cities, it works overall and serves its purpose effectively.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
