
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
// import Contactu from './components/Contactu';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const [text1, setText1] = useState("Enable Dark Mode")


  const showAlert = (messeage, type) =>{
      setAlert({
        msg : messeage,
        type : type 
      })
      
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode("dark")
      setText1("Disable Dark Mode")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark Mode Enabled","success")
      document.title = "First React App in Dark Mode"
    }
    else{
      setMode("light")
      setText1("Enable Dark Mode")
      document.body.style.backgroundColor="white"
      showAlert("Dark Mode Closed","danger")
      document.title = "First React App"
      
    }

  }
  return (
      <>
      {/* <Router> */}
        <Navbar title="My Program" aboutus="About us" mode={mode} toggleMode={toggleMode} text1={text1}/>
          <Alert alert={alert}/>
          <div className="container my-3">
          {/* <Routes> */}
          {/* <Route exact path="/about" element={ */}
            {/* <About mode={mode}/> */}
            {/* }> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={ */}
          <Textform heading="Brief Description" mode={mode} showAlert={showAlert}/>
          {/* // }> */}
          {/* </Route> */}
          {/* <Route exact path="/contactu" element={ */}
          {/* <Contactu mode={mode} /> */}
          {/* }> */}
          
          {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}

      </>
  );
}

export default App;
