import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('dark');
  const [alert,setalert] = useState(null); 

  const toggleMode = () => {
    console.log("toggle mode was clicked");
    if (mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("dark mode enable","success");
        document.title = 'TextUtils - Dark mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enable","success");
      document.title = 'TextUtils - light mode';
    }
  }

  const showAlert = (msg, type) => {
    setalert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  return (
    
   <> 
   <Router> 
   <Navbar title = "TextUtils" temp = "About" mode = {mode} switchmode = {toggleMode}/> 
   <Alert alert = {alert}/>
       
    <div className="container mb-3">
      <Routes>
          <Route exact path = "/about" element={<About/>}></Route>
          <Route exact path = "/" element={<TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" />}></Route>
      </Routes>    
    </div>
    </Router> 
   </> 
     
  );
};
export default App;