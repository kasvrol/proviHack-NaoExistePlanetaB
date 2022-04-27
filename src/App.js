
import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/home'
import whoWeAre from './pages/whoWeAre'
import whatWeDo from './pages/whatWeDo'
import OurSeamstresses from './pages/OurSeamstresses'

function App() {
  return (
    <>
    <Link to='/home'>home</Link>
    <Link to='/whoWeAre'>whoWeAre</Link>
    <Link to='/whatWeDo'>whatWeDo</Link>
    <Link to='/OurSeamstresses'>OurSeamstresses</Link>
      <Routes>
        <Route path='/home' component={Home}/>
        <Route path='/whoWeAre' component={whoWeAre}/>
        <Route path='/whatWeDo' component={whatWeDo}/>
        <Route path='/OurSeamstresses' component={OurSeamstresses}/>
      </Routes>
    </>
  );
}

export default App;
