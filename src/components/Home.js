import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
import './Home.css'

const Home = () => {
  return (
    <div className="page1">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;