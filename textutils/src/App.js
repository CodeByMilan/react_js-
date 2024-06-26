import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
 import About from "./components/About";
 import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
const[mode,setMode]=useState('light');

const toggleMode= ()=>{
  if (mode==='light'){
    setMode("dark");
    document.body.style.backgroundColor="#0b144c";
    document.title="TextUtils-dark mode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    document.title="TextUtils-light mode";
  }
}

  return (
    
    <Router>
      {/*here the default value will be assigned to the props
      <Navbar />*/}
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
   
      {/* <div className="container my-4 "> */}
      <Routes>
      <Route  exact path="/" element={<Textform  title="Enter The Text To Analyze"  mode ={mode}/>}/>
       
      {/* </div> */}
      <Route  exact path="/About" element={<About/>}/> 
       
       </Routes>
      </Router>
    
  );
}

export default App;
