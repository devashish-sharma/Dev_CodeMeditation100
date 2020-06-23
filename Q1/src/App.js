import React from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Footer from './components/Footer';
import Demo from './components/Demo';

const mission = <h6 className="p-3 text-center" style={{ backgroundColor: "#e7e7e7", textDecoration: "underline" }}> Our mission is to organise the world's information and make universally accessible and useful.</h6>;

const App = () => (

  <div>
    <Nav />
    {mission}
    <About />
    <Demo />
    <Footer />
  </div>
);

export default App;