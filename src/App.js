// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode =()=>{
    if (mode == 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils- Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils- Light Mode';

    }
  }
  return (
  <>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
{/* <Navbar /> */}
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className='container my-3'>
{/* <Routes> */}
  {/* /users -->Component1
  /users/home --> Component2 */}
  {/* <Route exact path="/about" element={<About />} /> */}
  {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
  {/* </Routes> */}
  </div>
  {/* </Router> */}
     </>
  );
}

export default App;
