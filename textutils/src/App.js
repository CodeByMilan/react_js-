import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";

function App() {
const[mode,setMode]=useState('light');
const toggleMode= ()=>{
  if (mode==='light'){
    setMode("dark");
    document.body.style.backgroundColor="#0b144c";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
  }
}

  return (
    <>
      {/*here the default value will be assigned to the props
      <Navbar />*/}
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-4 ">
      <Textform  title="Enter The Text To Analyze"  mode ={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
