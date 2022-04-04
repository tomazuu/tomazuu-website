import React from "react";
import TomazuuNavbar   from "./components/Navbar/Navbar";
import TomazuuHome     from "./components/Home/Home";
import TomazuuSection1 from "./components/Section/Section1";
import './css/base.css';
import './css/main.css';
import './css/vendor.css';
import './css/floatCircle.css';

function App() {
  return(
    <div className="App">
      <TomazuuNavbar/>
      <TomazuuHome/> 
      <TomazuuSection1/>  
    </div>
);
}

export default App;
