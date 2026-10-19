
import SightingCard from '../components/SightingCard.jsx'

function Home({sightings}) {
 return (
    <main className="page">
        <h2> Recent Sightings</h2>
        <section className="card-grid">
            {sightings.map(sighting => (
                <SightingCard key={sighting.id} {...sighting} />
            ))}
        </section>
    </main>

 );
}

export default Home