import {useState} from 'react'


function AddSighting({onAddSighting}){
 const [error, setError] = useState("");

 const emptyForm = {
    registration : "",
    aircraftPhoto: "",
    aircraftType: "",
    airport: "",
    spotter: ""  
 }

 const[formData, setFormData] = useState(emptyForm);

 function handleChange(event){
   const { name, value, files } = event.target;

   if(name == "aircraftPhoto"){
     setFormData( (current) => ({
         ...current,
         [name]: files[0]
     }));
     return;
   }
   setFormData( (current) => ( {
      ...current,
      [name]: value
   }));
 }

 function handleSubmit(event){
   /*
     Use setream function to run check that no fields are empty, returning boolean
     if boolean is validated then we need to trigger set error event, otherwise create onAddSighting
   */ 
   event.preventDefault(); /* Stop default website behaviour */
   const hasEmptyField = Object.values(formData).some((value) => { if(typeof value === "string"){ return value.trim() === "";} return !value;});

   if(hasEmptyField){
      setError("Please complete every field");
      return;
   }
   
   onAddSighting({
      ...formData,
      registration: formData.registration.toUpperCase()
   });

   /* Reset default state after submission */ 
   setFormData(emptyForm);
   setError("");
 }


 return(
    <main className="page"
    >
     <h2> Add a Sighting</h2>
      {/* one form pair with the labels (four labels) inside and state change logic*/}
      <form className="sighting-form" onSubmit={handleSubmit}>
         {/* each prop from Sighting Card is given a label and input section*/}
         <label>
          Registration
         <input
           type="text"
           name="registration"
           placeholder="Registration of Aircraft"
           value={formData.registration}
           onChange={handleChange}
         />
         </label>

         <label>
          Aircraft Photo
         <input
           type="file"
           name="aircraftPhoto"
           placeholder="Upload Image"
           accept=".jpg,.jpeg,.png"
           onChange={handleChange}
         />
         </label>

         <label>
          Aircraft Type
         <input
           name="aircraftType"
           placeholder="Choose Aircraft type"
           value={formData.aircraftType}
           onChange={handleChange}
         />
         </label>

         <label>
          Airport
         <input
           name="airport"
           placeholder="Name of Airport"
           value={formData.airport}
           onChange={handleChange}
         />
         </label>

         <label>
            Spotter
            <input
             name="spotter"
             placeholder="Name of Spotter"
             value={formData.spotter}
             onChange={handleChange}
            />
         </label>
         {error && <p className="form-errror">{error}</p>}
         <button type="submit">Post sighting</button>
      </form>
    </main>
 );
}

export default AddSighting;