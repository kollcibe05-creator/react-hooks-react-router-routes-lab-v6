import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import {Link}  from "react-router-dom"

const mockMovies = [
  { id: 1, title: "Doctor Strange" }, 
  { id: 2, title: "The Imitation Game" },
  { id: 3, title: "Trolls" },
  {id: 4, title: "CryptoBoy"}
]

function Home() {
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
           {mockMovies.map((movie) => (
           <li key={movie.id}>
            {/*level 2 heading) */}
            <h2>{movie.title}</h2>
{/* <Link> to match */}
<Link to={`/movie/${movie.id}`}>
    View Info
    </Link>
         </li>
        ))}
        </ul>
       </section>

      </main>
    </>
  );
};

export default Home;
