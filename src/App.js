// src/App.js
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Blog from './pages/Blog';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<User/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
