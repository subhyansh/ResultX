import React from 'react';
import Header from './Header/Header';
import MainTable from './Table/MainTable';
import Footer from './Footer/Footer';
import './Result.css';

const Result = () => {
  return (
    <div className='page2'>
      <Header/>
      <MainTable />
      <Footer/>
    </div>
  )
}

export default Result