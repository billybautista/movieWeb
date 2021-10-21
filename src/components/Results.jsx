import React from "react";
import MovieCard from "../components/MovieCard";

export default function Results({ results }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {results !== undefined && results.length !== 0
        ? results.map((e) => (
            <MovieCard
              key={e.id}
              width="19%"
              poster_path={e.poster_path}
              ranking={e.vote_average}
              id={e.id}
            />
          ))
        : null}
    </div>
  );
}
