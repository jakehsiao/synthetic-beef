import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

import { Product } from './Product';
import { Introduction } from './Introduction';

const introductions = [
  {
    title: "This is an introduction",
    desc: "look how good it is!",
    img: "",
  },
];

function App() {
  return <div className="App">
    <Product />
    {introductions.map(introduction => <Introduction {...introduction} />)}
  </div>
}

export default App;
