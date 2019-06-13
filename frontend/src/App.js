import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

import './global.css';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  )

}

export default App;
