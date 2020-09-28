import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/works" component={Works}/>
        <Route exact path="/contact" component={Contact}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
