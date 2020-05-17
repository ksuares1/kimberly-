import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Nav';
import FooterComponent from './components/Footer';
import HomePage from './pages/Home';
import PortfolioPage from './pages/Portfolio';

function App() {
  return (
    <div className="App">
        <Router>
        <div>
      <Navbar/>
      <div>
        <Switch>
        <Route exact path="/" component={HomePage}/ >
        <Route exact path="/portfolio" component={PortfolioPage}/> 
   </Switch>
    </div>
    </div>
    </Router>

    <FooterComponent/>
    </div>
  );
}

export default App;
