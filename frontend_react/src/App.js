import React from 'react';

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  CurrentlyBuilding,
  LatestPosts,
} from './container';
import { Navbar } from './components/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <LatestPosts />
      <Skills />
      <CurrentlyBuilding />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
