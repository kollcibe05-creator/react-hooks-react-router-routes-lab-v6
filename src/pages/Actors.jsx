import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";



function Actors() {
const [actors, setActors] = useState([])

useEffect(() => {

  fetch("http://localhost:4000/actors")
  .then(r => r.json())
  .then(data => setActors(data))

}, [])


  return (

    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
        {/* Actor info here! */}
        
        <section>
          {actors.map((actor, index) => (
            <div key={index}>
              <h2>{actor.name}</h2> 
              
              <ul>
                {actor.movies.map((movie, movieIndex) => (
                  <li key={movieIndex}>{movie}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
      
    </>
  );
};

export default Actors;
