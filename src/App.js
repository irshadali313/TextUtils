import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 2000);
  }


  const togglemode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#0b062a";
       document.title = "Text Editor - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
        document.body.style.backgroundColor = "white";
       document.title = "Text Editor - Light Mode";
        showAlert("Light mode has been enabled", "success");
    }   
    }
  
  return (
    <>
       <Router>
   <Navbar title="Text Editor" link="About" mode={mode} toggleMode={togglemode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route path="/about" element={<About />}>   
          </Route>    
          <Route path="/TextUtils" element={<TextForm header="Enter the text to analyse" showAlert={showAlert} mode={mode}/>}>
          </Route>
  </Routes>
  </div>
    </Router>

    </>
  );
}

export default App;
