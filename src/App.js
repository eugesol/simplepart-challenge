import React from 'react';
import Header from './components/Header/index';
import Search from './components/Search/index';
import Hero from './components/Jumbotron/index';
import Make from './components/Make/index';
import Footer from './components/Footer/index';
import Category from './components/Category/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Hero></Hero>
     <Make></Make>
     <Category> hello</Category>
      {/*<Footer></Footer> */}
    </div>
  );
}

export default App;
