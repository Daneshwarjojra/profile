import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Description from './components/body/description/description';
import Footre from './components/footer/footer';

function App() {
  return (
    <div className="App relative">
      <Navbar />
      <Header />
      <Description />
      <Footre />
    </div>
  );
}

export default App;
