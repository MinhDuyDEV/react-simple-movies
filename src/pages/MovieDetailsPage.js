import React from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher, tmdbAPI } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);

  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="pb-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${tmdbAPI.imageUrl(
              "original",
              backdrop_path
            )})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[500px] max-w-[900px] mx-auto -mt-[250px] relative z-10 pb-10">
        <img
          src={tmdbAPI.imageUrl("original", poster_path)}
          alt=""
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <h1 className="mb-10 text-4xl font-bold text-center text-white">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center mb-10 gap-x-7">
          {genres.map((item) => (
            <span
              className="px-4 py-2 border rounded-3xl border-primary text-primary"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm leading-relaxed text-center max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieMeta type="credits"></MovieMeta>
      <MovieMeta type="videos"></MovieMeta>
      <MovieMeta type="similar"></MovieMeta>
      {/* <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar> */}
    </div>
  );
};

function MovieMeta({ type = "videos" }) {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, type), fetcher);
  if (!data) return null;
  if (type === "credits") {
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    return (
      <div className="py-10">
        <h2 className="mb-10 text-3xl text-center">Casts</h2>
        <div className="grid grid-cols-4 gap-10">
          {cast.slice(0, 4).map((item) => (
            <div key={item.id} className="cast-item">
              <img
                src={tmdbAPI.imageUrl("original", item.profile_path)}
                alt=""
                className="w-full h-[350px] object-cover rounded-lg mb-3"
              />
              <h3 className="text-xl font-medium text-center">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    const { results } = data;
    if (!results || results.length <= 0) return null;
    if (type === "videos")
      return (
        <div className="py-10">
          <div className="flex flex-col gap-12">
            {results.slice(0, 2).map((item) => (
              <div className="mx-auto" key={item.id}>
                <h3 className="inline-block p-2 mb-5 text-xl font-medium rounded-sm bg-secondary">
                  {item.name}
                </h3>
                <div className="w-[1100px] aspect-video">
                  <iframe
                    width="942"
                    height="530"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title="Youtube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="object-fill w-full h-full"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    if (type === "similar")
      return (
        <div className="py-10">
          <h2 className="mb-10 text-3xl font-medium">Similar movies</h2>
          <div className="movie-list">
            <Swiper grabCursor="true" spaceBetween={40} slidesPerView={"auto"}>
              {results.length > 0 &&
                results.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCard item={item}></MovieCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      );
  }
  return null;
}

// function MovieCredits() {
//   const { movieId } = useParams();
//   const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "credits"), fetcher);
//   if (!data) return null;
//   const { cast } = data;
//   if (!cast || cast.length <= 0) return null;
//   return (
//     <div className="py-10">
//       <h2 className="mb-10 text-3xl text-center">Casts</h2>
//       <div className="grid grid-cols-4 gap-10">
//         {cast.slice(0, 4).map((item) => (
//           <div key={item.id} className="cast-item">
//             <img
//               src={tmdbAPI.imageUrl("original", item.profile_path)}
//               alt=""
//               className="w-full h-[350px] object-cover rounded-lg mb-3"
//             />
//             <h3 className="text-xl font-medium text-center">{item.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MovieVideos() {
//   const { movieId } = useParams();
//   const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "videos"), fetcher);
//   if (!data) return null;
//   const { results } = data;
//   if (!results || results.length <= 0) return null;
//   return (
//     <div className="py-10">
//       <div className="flex flex-col gap-12">
//         {results.slice(0, 2).map((item) => (
//           <div className="mx-auto" key={item.id}>
//             <h3 className="inline-block p-2 mb-5 text-xl font-medium rounded-sm bg-secondary">
//               {item.name}
//             </h3>
//             <div className="w-[1100px] aspect-video">
//               <iframe
//                 width="942"
//                 height="530"
//                 src={`https://www.youtube.com/embed/${item.key}`}
//                 title="Youtube video player"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="object-fill w-full h-full"
//               ></iframe>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MovieSimilar() {
//   const { movieId } = useParams();
//   const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "similar"), fetcher);
//   if (!data) return null;
//   const { results } = data;
//   if (!results || results.length <= 0) return null;
//   return (
//     <div className="py-10">
//       <h2 className="mb-10 text-3xl font-medium">Similar movies</h2>
//       <div className="movie-list">
//         <Swiper grabCursor="true" spaceBetween={40} slidesPerView={"auto"}>
//           {results.length > 0 &&
//             results.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <MovieCard item={item}></MovieCard>
//               </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

export default MovieDetailsPage;
