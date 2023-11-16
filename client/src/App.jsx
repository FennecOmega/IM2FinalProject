import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import AboutUs from "./Pages/ClientPages/AboutUs.jsx"
import HelloWorld from "./Pages/helloworld.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
       <header>
        <nav className="row">
         <Link to="/AboutUs">About Us</Link>
         <Link to="/HelloWorld">Hello World</Link>
         </nav>
       </header>

         <Routes>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/HelloWorld" element={<HelloWorld/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
