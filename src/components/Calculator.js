import React from 'react';
import Header from './Header/Header';
import GPA from './GPA/GPA';
import Footer from './Footer/Footer';
import './Calculator.css';

const Calculator = () => {
  return (
    <div className='page5'>
      <Header/>
      <GPA />
      <Footer />
    </div>
  )
}

export default Calculator