// Home.jsx
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-content">
        <div className="left-content">
          <h1 className='text'>Your code is in <span className="subtext">Blockchain</span></h1>
          <p className="description">Start your journey towards the <br />Decentralized World</p>
          <div className="btn-container"> 
          <button className="btn">Start</button>
          </div>
        </div>
        <div className="right-content">
          <img className='w-800 h-auto' src="hero.jpg" alt="hero" />
        </div>
      </div>
      
    </div>
  );
};

export default Home;

