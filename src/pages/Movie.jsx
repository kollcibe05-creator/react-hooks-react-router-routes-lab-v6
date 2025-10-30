import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from '../components/NavBar'


function Movie() {
  const { id } = useParams();    //param

  const [movie, setMovie] = useState(null);


  //GET request
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then(r => r.json())
    .then(data => setMovie(data))
  }, [id]);

  //  Loading message to display
  if (!movie) {
    return (
        <>
            <NavBar />
            <main><h1>Loading movie details...</h1></main>
        </>
    );
  }
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time} min</p>
        
        <p>
          Genres: 
          {/* a <span> for each genre */}
          {movie.genres.map((genre) => (
            <span key={genre} style={{ marginRight: '10px', border: '1px solid gray', padding: '2px' }}>
              {genre}
            </span>
          ))}
        </p>
      </main>
    </>
  );
};

export default Movie;
