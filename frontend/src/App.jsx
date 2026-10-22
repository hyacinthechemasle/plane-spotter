import { useState } from 'react'
import { Route, Routes } from 'react-router'
import {initialSightings} from "./data/mockSightings"
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from "./components/NavBar"
import SightingCard from "./components/SightingCard"
import AddSighting from "./pages/AddSighting"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"


function App() {
  const [count, setCount] = useState(0)

  const [sightings, setSightings] = useState(initialSightings);

  function addSighting(sightingData){
    
    const newSighting = {
      id: Date.now(),
      ...sightingData
    };
    
    setSightings( (currentSightings) => ([
       newSighting,
       ...currentSightings
    ]));
  }

  return (
    <>
     <Navbar />
        <Routes>
          <Route path="/" element={<Home sightings={sightings} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={ <AddSighting onAddSighting={addSighting} />} />
          <Route path="/profile" element={ <Profile />} />
        </Routes>

         <button className="slice"
                  onClick={() => { setSightings([]);}}> Clear Feed </button>
    </>
  );
}

export default App;

