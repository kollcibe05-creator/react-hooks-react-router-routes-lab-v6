import {useState, useEffect} from "react"
import NavBar from '../components/NavBar'; 


function Directors() {
const [directors, setDirectors] = useState([])

useEffect(() => {
  fetch(`http://localhost:4000/directors`)
  .then(r => r.json())
  .then(data => setDirectors(data))
}, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        <section>
          {directors.map((director, index) => (
            <div key={index}>
              <h2>{director.name}</h2> 
              
              <ul>
                {director.movies.map((movie, movieIndex) => (
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

export default Directors;