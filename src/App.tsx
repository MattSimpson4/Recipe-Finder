import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'; // your existing homepage logic
import User from './User';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}
