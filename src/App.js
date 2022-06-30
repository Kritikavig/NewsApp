import './App.css';
import React, { useState } from 'react'
import NavBar from './components.js/NavBar';
import News  from './components.js/News';
import LoadingBar from 'react-top-loading-bar';
import Scroll from './components.js/scroll';
import About from './components.js/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

const App =()=> {

  const apiKey=process.env.REACT_APP_API
  const [mode , setMode] = useState('light');
  const [progress,setProgress] = useState(0)

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  
    return (
      <div>
      <Router>
        <NavBar mode={mode} toggleMode ={toggleMode}/>
        {/* back to top button */}
        <Scroll showBelow={300}/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />

        <Routes>
          <Route  exact path="/about" element={<About mode={mode}/>}/>
          <Route  exact path="/" element = {<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="general" country = "in" category = "general"/>} />
          <Route  exact path="/business" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="business" country ="in" category = "business"/>}/>
          <Route  exact path="/entertainment" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="entertainment" country ="in" category = "entertainment"/>}/>
          <Route  exact path="/health" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="health" country ="in" category = "health"/>}/>
          <Route  exact path="/science" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="science" country ="in" category = "science"/>}/>
          <Route  exact path="/sports" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="sports" country ="in" category = "sports"/>}/>
          <Route  exact path="/technology" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="technology" country ="in" category = "technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
}

export default App;

