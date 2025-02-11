import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';
import Profile from './components/Profile';
import Analytics from './components/Analytics';
import Calculator from './components/Calculator';
//import Header from './components/Header/Header';

import './App.css';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/result',
      element: <Result/>
    },
    {
      path: '/profile',
      element: <Profile/>
    },
    {
      path: '/analytics',
      element: <Analytics/>
    },
    {
      path: '/calc',
      element: <Calculator/>
    },
  ]);
  
  return <RouterProvider router={router} />
};

export default App;
