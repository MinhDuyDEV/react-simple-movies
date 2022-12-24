import React from "react";

const MovieCard = ({ item }) => {
  if (!item) return null;
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-card bg-slate-800">
      <div className="flex flex-col flex-1">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="w-full h-[250px] rounded-lg object-cover mb-5"
        />
        <h3 className="mb-3 text-base font-medium">{title}</h3>
        <div className="flex items-center justify-between mb-8 text-sm opacity-60">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
      </div>
      <button className="w-full px-6 py-3 mt-auto font-medium capitalize rounded-lg bg-primary">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
