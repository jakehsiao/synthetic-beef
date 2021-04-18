import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

import { Product } from './Product';
import { Introduction } from './Introduction';
import { Article } from './Article';

const introductions = [
  {
    title: "Breeding cows is harmful to the earth",
    desc: "Cows emit methane, which is a greenhouse gas that will accelerate global warming.",
    img: "https://images.unsplash.com/photo-1583095117934-63fafe4b07ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80",
  },
  {
    title: "Better Beef is the solution",
    desc: "With modern science we can create meat that is more delicious, healthierand more affordable than today’s obsolescent animal-derived products.",
    img: "https://images.unsplash.com/photo-1556269923-e4ef51d69638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80",
  },
  {
    title: "Sustainable BBQs",
    desc: "Surprise your friends with a succulent home-grown beef steak!",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
];

const articles = [
  {
    title: "Bill Gates and Richard Branson are betting lab-grown meat might be the food of the future",
    img: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg",
    url: "https://www.cnbc.com/2018/03/23/bill-gates-and-richard-branson-bet-on-lab-grown-meat-startup.html",
  },
  {
    title: "Cows, not fossil fuels, are the most destructive technology on earth",
    img: "https://impossiblefoods.com/newsite/allscience/destroying2.jpg",
    url: "https://impossiblefoods.com/careers/all-science-no-bull",
  },
];

function App() {
  return <div className="App">
    <Product />
    {introductions.map(introduction => <Introduction {...introduction} />)}
    <div className="learn-more"><h1>Learn More</h1></div>
    {articles.map(article => <Article {...article} />)}
  </div>
}

export default App;
