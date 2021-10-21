import React from "react";
import MovieCard from "../components/MovieCard";

export default function MostPopular({ mostPopular, movies }) {
  return (
    <div>
      {movies && movies.length !== 0 ? (
        <MovieCard
          key={mostPopular.id}
          width="98%"
          poster_path={mostPopular.poster_path}
          ranking={mostPopular.vote_average}
          id={mostPopular.id}
        />
      ) : null}
    </div>
  );
}
