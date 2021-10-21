import React from "react";
import MovieCard from "../components/MovieCard";

export default function SixMovies({ sixMovies }) {
  return (
    <div
      style={{
        width: "60%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {sixMovies &&
        sixMovies.map((e) => (
          <MovieCard
            key={e.id}
            width="31.66%"
            poster_path={e.poster_path}
            ranking={e.vote_average}
            id={e.id}
          />
        ))}
    </div>
  );
}
