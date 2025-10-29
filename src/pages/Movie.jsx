import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from '../components/NavBar'


const mockMovieData = {
    1: { 
        title: "Doctor Strange", 
        time: 115, 
        genres: ["Action", "Adventure", "Fantasy"] 
    },
    2: { 
       title: "The Imitation Game", 
        time: 114, 
         genres: ["Biography", "Drama"] 
   },
    3: { 
    title: "Trolls", 
     time: 92, 
      genres: ["Animation", "Comedy"] 
   },

  }

  const getMovieById = (id) => mockMovieData[id];

function Movie() {
  const { id } = useParams();
  // Using useState to simulate loading/fetching data
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Simulate fetching the movie data based on the ID from the URL
    const fetchedMovie = getMovieById(id);
    setMovie(fetchedMovie);
  }, [id]);

  // Handle loading state
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
        <main>
        {/* <h1>: Matches test 'renders movie's title in an h1' (expects "Doctor Strange") */}
        <h1>{movie.title}</h1>
        
        {/* <p>: Matches test 'renders movie's time within a p tag' (expects "115") */}
        <p>Runtime: {movie.time} min</p>
        
        <p>
          Genres: 
          {/* <span>: Matches test 'renders a span for each genre' */}
          {movie.genres.map((genre) => (
            <span key={genre} style={{ marginRight: '10px', border: '1px solid gray', padding: '2px' }}>
              {genre}
            </span>
          ))}
        </p>
      </main>
      </main>
    </>
  );
};

export default Movie;
