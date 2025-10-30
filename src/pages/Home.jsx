import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import {Link}  from "react-router-dom"
import MovieCard from "../components/MovieCard";


function Home() {

  const [movies, setHomeData] = useState([])

  useEffect(() => {
fetch("http://localhost:4000/movies") 
.then(r => r.json())
.then(data => setHomeData(data))


  }, [])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
<section>
        <h3>Popular Movies</h3>
          <ul>
           {movies.map((movie) => (
           <li key={movie.id}>
            <h2>{movie.title}</h2>
            <MovieCard title={movie.title} id={movie.id}/>
           </li>
        ))}
        </ul>z
       </section>

      </main>
    </>
  );
};

export default Home;
