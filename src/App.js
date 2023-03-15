//import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showAlert =(message, type) =>{
    setalert({
      msg: message,
      type: type,
    })
  }
const toggleMode=() =>{
  if(mode==='light'){
  setmode('dark');
  document.body.style.backgroundColor='#042743';
  document.body.style.color='white';
  // document.querySelectorAll('p').style.color='white';
  showAlert("Dark Mode enable","success")
  document.title="Textutils -Dark Mode"
}
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='#212529';
    // document.querySelectorAll('p').style.color='#212529';
    showAlert("Normal Mode enable","success")
    document.title="Textutils"
  }
}
  return (
    //jsx
    <> 
<Navbar mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
<BrowserRouter>
<Routes>
    <Route exact path="/about" element={<About />} />
    <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode}/>} />
</Routes>
</BrowserRouter>
        </div>
    </> 
  );
}

export default App;
