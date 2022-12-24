import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <header className="header flex items-center justify-center mb-5 gap-x-5 py-10 text-white">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container pb-20">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t rounded-lg from-[rgb(0,0,0,0.5)] to-[rgb(0,0,0,0.5)]"></div>
          <img
            src="https://nld.mediacdn.vn/2019/4/3/avengers-endgame-poster-og-social-crop-15542720808371479664269.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-5">
              <span className="py-2 px-4 border border-white rounded-md">
                Action
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Drama
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary capitalize font-medium">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20 text-white">
        <h2 className="capitalize mb-10 text-2xl font-bold">Now Playing</h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
              alt=""
              className="w-full h-[250px] rounded-lg object-cover mb-5"
            />
            <h3 className="text-base mb-3 font-medium">
              Spiderman: Homecoming
            </h3>
            <div className="flex items-center justify-between text-sm opacity-60 mb-8">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 w-full rounded-lg bg-primary font-medium capitalize">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20 text-white">
        <h2 className="capitalize mb-10 text-2xl font-bold">
          Top rated movies
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
              alt=""
              className="w-full h-[250px] rounded-lg object-cover mb-5"
            />
            <h3 className="text-base mb-3 font-medium">
              Spiderman: Homecoming
            </h3>
            <div className="flex items-center justify-between text-sm opacity-60 mb-8">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 w-full rounded-lg bg-primary font-medium capitalize">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20 text-white">
        <h2 className="capitalize mb-10 text-2xl font-bold">Trending</h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
              alt=""
              className="w-full h-[250px] rounded-lg object-cover mb-5"
            />
            <h3 className="text-base mb-3 font-medium">
              Spiderman: Homecoming
            </h3>
            <div className="flex items-center justify-between text-sm opacity-60 mb-8">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 w-full rounded-lg bg-primary font-medium capitalize">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default App;
