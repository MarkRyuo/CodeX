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

        <Routes>
            <Route path="/" element={}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App ;