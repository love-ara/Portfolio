import './App.css'
import {Routes,Route } from "react-router-dom";
import About from "./pages/About/About.jsx";


function App() {

  return (
    <>
            <Routes>
                <Route path="/" element={<About/>} />
            </Routes>

    </>
  )
}

export default App
