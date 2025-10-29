import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
const actors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  },
  {
    name: "Justin Timberlake",
    movies: ["Trolls", "Friends with Benefits", "The Social Network"],
  },
  {
    name: "Anna Kendrick",
    movies: ["Pitch Perfect", "Into The Wood"],
  },
  {
    name: "Tom Cruise",
    movies: [
      "Jack Reacher: Never Go Back",
      "Mission Impossible 4",
      "War of the Worlds",
    ],
  },
];

function Actors() {
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
