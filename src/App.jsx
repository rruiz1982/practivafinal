import React from 'react';
import {  Route, Routes } from "react-router-dom";
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact';


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/favs' element={<Favs />} />
            <Route path='/dentista/:id' element={<Detail />} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
