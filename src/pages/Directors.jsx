// src/pages/Directors.jsx

// Only import NavBar, and use the correct path (assuming NavBar is in src/components)
import NavBar from '../components/NavBar'; 

const directors = [
 {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
   name: "Mike Mitchell",
   movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
 {
  name: "Edward Zwick",
  movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
 },
];

function Directors() {
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