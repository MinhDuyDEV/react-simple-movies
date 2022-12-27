import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <div className="flex flex-col flex-1">
        <img
          src={tmdbAPI.imageUrl("w500", poster_path)}
          alt=""
          className="w-full h-[250px] rounded-lg object-cover mb-5"
        />
        <h3 className="mb-3 text-base font-medium">{title}</h3>
        <div className="flex items-center justify-between mb-8 text-sm opacity-60">
          <span>{new Date(release_date).getFullYear()}</span>
          <span className="flex items-center justify-center gap-2">
            {vote_average}
            <span className="w-4 h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full"
                viewBox="0 0 576 512"
                fill="#FFC000"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </span>
          </span>
        </div>
      </div>
      <Button onClick={() => navigate(`/movies/${id}`)}>Watch now</Button>
    </div>
  );
};

export default MovieCard;
