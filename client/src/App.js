import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Nav';
import FooterComponent from './components/Footer';
import HomePage from './pages/Home';
// import ProjectPage from './pages/Projects';

function App() {
  return (
    <div className="App">
        <Router>
        <div>
      <Navbar/>
      <div>
        <Route exact path="/" component={HomePage}/ >
        <Route exact path="/portfolio" component={PortfolioPage}/> 
      
    </div>
    </div>
    </Router>

    <FooterComponent/>
    </div>
  );
}

export default App;
