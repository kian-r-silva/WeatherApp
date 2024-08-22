import React from 'react';
import './InformationPage.css';

const InformationPage = () => {
  return (
    <div classname="container">
      <header classname="header">
        <h1>Weather App Information</h1>
      </header>


      <main className='main'>
        <h2>Features</h2>
        <ul>
          <li><strong>Real-time Weather Updates:</strong> Get live weather updates for your current location or any city worldwide.</li>
          <li><strong>7-Day Forecast:</strong> Plan ahead with a detailed 7-day weather forecast.</li>
          <li><strong>Severe Weather Alerts:</strong> Stay safe with timely alerts about severe weather conditions in your area.</li>
          <li><strong>Customizable Interface:</strong> Choose from a variety of themes and layouts to suit your preferences.</li>
          <li><strong>Interactive Maps:</strong> Explore weather patterns with our interactive maps, showing temperature, precipitation, and more.</li>
        </ul>

        <h2>How to Use Weather App</h2>
        <ol>
          <li><strong>Set Up Your Location:</strong> Search the desired location in the search bar on the home page. </li>
          <li><strong>Explore Features:</strong> Use the navigation menu to explore the various sections, such as the daily forecast, forcast maps, and weekly forcast</li>
          <li><strong>Stay Informed:</strong> Check the app regularly to stay updated on the latest weather conditions and forecasts.</li>
        </ol>

      </main>

    </div>
  );
};
export default InformationPage;