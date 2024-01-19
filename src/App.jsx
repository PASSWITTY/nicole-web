import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Content from './content_creation/Out'
import Social from './social_media/Out'
import Digital from './digital_marketing/Out'


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
      <Route path="/social" element={<Social />} />
      <Route path="/digital" element={<Digital />} />
    </Routes>
  </Router>
  );
}

export default App;
