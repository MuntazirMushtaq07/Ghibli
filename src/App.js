import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Movies from "./Components/Movies";
import Post from "./Components/Post";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/home" element={<Home/>}/>
          <Route  path="/movies" element={<Movies/>}/>
          <Route  path="/contact" element={< Contact/>}/>
          <Route  path="/movie/:movie_id" element={<Post/>}/>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
