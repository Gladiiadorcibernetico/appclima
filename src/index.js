import React from 'react';

import { createRoot } from 'react-dom/client';
import  Login  from './components/Login';
import Navbar from './components/Navbar';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <Navbar/>
      <Login/>

  </React.StrictMode>
);

