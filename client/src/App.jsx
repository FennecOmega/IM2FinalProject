import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import TestPage from "./Pages/testpage.jsx"
import HelloWorld from "./Pages/helloworld.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
       <header>
        
        <nav>
         <Link to="/TestPage">Test Page</Link>
         <p></p>
         <Link to="/HelloWorld">Hello World</Link>
         </nav>
        
       </header>

         <Routes>
          <Route path="/TestPage" element={<TestPage/>}/>
          <Route path="/HelloWorld" element={<HelloWorld/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
