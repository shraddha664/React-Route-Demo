import React from "react";
import {Route,Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

const App=()=>{
return(

    <Routes>
      <Route  path="*" element={<ErrorPage/>}/>
      <Route  path="/" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    
    </Routes>
  
)
}

export default App;