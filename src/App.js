// eslint-disable-next-line max-len

import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import TvShows from './pages/TV-Shows'
import Categories from './pages/Categories'
import LoginPage from './pages/Login'
import MoviesDetailPage from './pages/MovieDetail'
// import Detail from './component/MovieDetail/Detail'
// import { useState } from 'react'
import './App.scss'
export const API_KEY = "k_8948v2d1";

// Lokesh key : k_8948v2d1
// Lokesh Secondary key: k_jmfp79dw
// Balaji key : k_a8i8o3u4
// Muthu key : k_eddp4z4f

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <div className='main'>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TvShows />} />
          {/* <Route path="/movies" element={<Movies />} /> */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/detail/:movieId" element={<MoviesDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
