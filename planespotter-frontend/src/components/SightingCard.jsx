
import './SightingCard.css';
function SightingCard({registration, aircraftPhoto, aircraftType, airport, spotter}) {

 console.log(aircraftPhoto);
 if(typeof aircraftPhoto!== "string"){
   var aircraftPhoto = URL.createObjectURL(aircraftPhoto);
 }
 //const imageSrc = URL.createObjectURL(aircraftPhoto);

  return (
     <article className="sighting-card">
       <img
          src={aircraftPhoto}
          className='aircraft-photo'    
       />
       
       <h1>{registration}</h1>
       <p>{aircraftType}</p>
       <p>{airport}</p>
       <small>Spotted by {spotter}</small>
     </article>
  );
}

export default SightingCard;