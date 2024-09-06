import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import CallToAction from './components/CallToAction';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Jumbotron />
        <div className="container mt-5">
        </div>
        <div className="my-5">
          <CallToAction />
        </div>
        <div className="mb-5">
          <Gallery />
        </div>
      </div>
    </Router>
  );
}

export default App;