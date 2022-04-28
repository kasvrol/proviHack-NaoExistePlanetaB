import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import WhoWeAre from './pages/whoWeAre'
import HowDo from './pages/howDo'
import OurSeamstresses from './pages/OurSeamstresses'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/whoWeAre' element={<WhoWeAre/>}/>
        <Route path='/howDo' element={<HowDo/>}/>
        <Route path='/ourSeamstresses' element={<OurSeamstresses/>}/>
    </Routes>
  );
}

export default App;
