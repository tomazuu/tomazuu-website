import React from "react";
import TomazuuNavbar   from "./components/Navbar/Navbar";
import TomazuuHome     from "./components/Home/Home";
import TomazuuSection1 from "./components/Section/Section1";
import TomazuuSection2 from "./components/Section/Section2";
import TomazuuSection3 from "./components/Section/Section3";
import TomazuuSection5 from "./components/Section/Section5";
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
      <TomazuuSection2/> 
      <TomazuuSection3/>  
      <TomazuuSection5/>  

    </div>
);
}

export default App;
