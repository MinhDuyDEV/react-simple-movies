import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <header className="header flex items-center justify-center mb-10 gap-x-5 py-10 text-white">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
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
            <button className="py-3 px-6 rounded-lg bg-primary font-medium">
              Watch Now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default App;
