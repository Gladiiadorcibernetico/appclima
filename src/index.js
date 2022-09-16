import React from 'react';
import * as ReactDOM from 'react-dom';

import  Login  from './components/Login';
import Navbar from './components/Navbar';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
      <Navbar/>
      <Login/>

  </React.StrictMode>,
  document.getElementById('root')
);

