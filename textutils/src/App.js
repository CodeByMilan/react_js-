import Navbar from "./components/Navbar";
// import Textform from "./components/Textform";
import About from "./components/About";

function App() {
  return (
    <>
      {/*here the default value will be assigned to the props
      <Navbar />*/}
      <Navbar title="TextUtils" about="About TextUtils" />
      {/* <div className="container my-4 ">
      <Textform  title="Enter The Text To Analyze" />
      </div> */}
      <About/>
    </>
  );
}

export default App;
