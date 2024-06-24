import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            
            <Route path="/" element={<News pagesize={20} />} />
            
          </Routes>
        </Router>
      </>
    );
  }
}
