import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==="light"){
     setMode("dark");
     document.body.style.backgroundColor="#042743";
     showAlert("Dark Mode Activated","success");
    }
    else{
     setMode("light");
     document.body.style.backgroundColor="white";
     showAlert("Light Mode Activated","success");
    }
  }
  const changeBkBlue=()=>{
    setMode("blue");
    document.body.style.backgroundColor="#66CDAA";
  }
  const changeBkPink=()=>{
    setMode("pink");
    document.body.style.backgroundColor="pink";
  }
  const changeBkYellow=()=>{
    setMode("yellow");
    document.body.style.backgroundColor="#FFFF66	";
  }
  return (
   <>
    
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} changeBkBlue={changeBkBlue} changeBkPink={changeBkPink} changeBkYellow={changeBkYellow} />
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Router>
          <Routes>
             <Route path='/' element={   <TextForm heading="Enter Your Text Here:" mode={mode} showAlert={showAlert}/>} />
             <Route path='/about' element={<About/>} />
          </Routes>
      </Router>      */}

<TextForm heading="Enter Your Text Here:" mode={mode} showAlert={showAlert}/>
    </div>
   </>
  );
}

export default App;
