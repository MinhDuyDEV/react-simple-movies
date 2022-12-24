import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="pb-20 text-white movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold capitalize">Now Playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="pb-20 text-white movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold capitalize">
          Top rated movies
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="pb-20 text-white movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold capitalize">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
