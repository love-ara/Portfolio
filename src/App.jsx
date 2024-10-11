import './App.css'
import {Routes,Route } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";


function App() {

  return (
    <>
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/" element={<Home/>} />
            </Routes>

    </>
  )
}

export default App
