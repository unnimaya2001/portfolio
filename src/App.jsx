import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Homepage'
import Nav from './components/Navbar'
import About  from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Nav/>
    
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        
      </Routes>
      </Router>
    </>
  )
}

export default App
