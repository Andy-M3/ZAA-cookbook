import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Dish from './components/Dish';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/dish/:id" element={<Dish />} />
      </Routes>
    </Router>
  );
}

export default App;
