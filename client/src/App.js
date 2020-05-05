import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav';
import FooterComponent from './components/Footer';
import ProjectPage from './pages/Projects';

function App() {
  return (
    <div className="App">
      
      <Router>
        <div>
      <Navbar/>
      <div>
        <Route exact path="/" component={HomeComponent}/ >
        <Route exact path="/portfolio" component={ProjectPage}/>
      
    </div>
    </div>
    </Router>

    <FooterComponent/>
    </div>
  );
}

export default App;
