import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
     <HomePage/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
