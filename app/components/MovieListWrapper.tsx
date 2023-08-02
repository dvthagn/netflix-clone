"use client";
import React from "react";
import MovieList from "./MovieList";
import useMovieList from "@/hooks/useMovieList";

const MovieListWrapper = () => {
  const { data: movies = [] } = useMovieList();
  return (
    <div className="pb-40">
      <MovieList title="Trending Now" data={movies} />
    </div>
  );
};

export default MovieListWrapper;
