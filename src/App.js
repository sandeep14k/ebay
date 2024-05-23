import './App.css';
import MarketPlace from './market_place';
import Profile from './profile';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPreview from './product_preview';
import Chat from './chat';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<MarketPlace/>} />
      <Route path='/productview/:productId' element={<ProductPreview/>} />
      <Route path='/chat' element={<Chat/>}/>
    </Routes>
  </Router>

  );
}

export default App;
