import "./styles.css";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import {useState} from 'react';
import Home from "../src/components/home";
import About from "../src/components/about";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  );
}
