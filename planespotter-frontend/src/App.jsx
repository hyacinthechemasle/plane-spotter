import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from "./components/NavBar"
import SightingCard from "./components/SightingCard"
import airnzPhoto from './assets/images/787-airnz.jpeg';
import qantasPhoto from './assets/images/a321xlr-qantas.avif';

function App() {
  const [count, setCount] = useState(0)

const sightings = [
{
id: 1,
registration: "ZK-NZE",
aircraftType: "Boeing 787-9",
aircraftPhoto: airnzPhoto,
airport: "Wellington Airport",
spotter: "Hyacinthe"
},
{
id: 2,
registration: "VH-OGA",
aircraftPhoto: qantasPhoto,
aircraftType: "Airbus A321XLR",
airport: "Melbourne Tullamarine",
spotter: "Alex"
}
];

  return (
    <>
     <Navbar />
        <main className="feed">
          {sightings.map((sighting) => (
            <SightingCard 
               registration={sighting.registration}
               aircraftPhoto={sighting.aircraftPhoto}
               aircraftType={sighting.aircraftType}
               airport={sighting.airport}
               spotter={sighting.spotter}
            />
          ))}
        </main>
    </>
  );
}

export default App
