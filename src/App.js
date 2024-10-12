import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Wheathe dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = () =>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "#10124b";
      showAlert("Dark Mode Has been enabled","success ");
      document.title = "Texutils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has been enabled","success ");
      document.title = "Texutils - Light Mode";
    }
  }
  return (
 <>
 <Router>
 <Navbar title='TextUtils' type='User' mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert}/> 
 <div className="container my-3" >
 <Switch>
          <Route  exact path="/about">
            <About  />
          </Route>
          <Route exact path="/TextUtils">
          <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/> 
          </Route>
        </Switch>
 </div>
</Router>


 
    
 </>
  );
}

export default App;
