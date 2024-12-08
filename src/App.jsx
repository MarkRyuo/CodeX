import { BrowserRouter, Routes, Route } from "react-router";

import './App.css'
import LandingScreen from "./pages/LandingScreen";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LandingScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App ;