import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";
import useDebounce from "../hooks/useDebounce";
// https://api.themoviedb.org/3/search/movie?api_key=064c0013dc4bf2e81cfdfaa8639df094
const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=064c0013dc4bf2e81cfdfaa8639df094"
  );
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data } = useSWR(url, fetcher);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=064c0013dc4bf2e81cfdfaa8639df094&query=${filterDebounce}`
      );
    } else {
      setUrl(
        "https://api.themoviedb.org/3/movie/popular?api_key=064c0013dc4bf2e81cfdfaa8639df094"
      );
    }
  }, [filterDebounce]);
  const movies = data?.results || [];
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1 mr-3">
          <input
            type="text"
            className="w-full p-4 text-lg text-white rounded-lg outline-none bg-slate-800"
            placeholder="Type here to search..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="px-8 py-4 text-white rounded-lg bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
