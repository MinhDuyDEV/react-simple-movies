import React from "react";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import { fetcher } from "../../config";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=064c0013dc4bf2e81cfdfaa8639df094`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container pb-20 overflow-hidden">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, backdrop_path } = item;
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t rounded-lg from-[rgb(0,0,0,0.5)] to-[rgb(0,0,0,0.5)]"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white left-5 bottom-5">
        <h2 className="mb-5 text-3xl font-bold">{title}</h2>
        <div className="flex items-center mb-5 gap-x-3">
          <span className="px-4 py-2 border border-white rounded-md">
            Action
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Drama
          </span>
        </div>
        <button className="px-6 py-3 font-medium capitalize rounded-lg bg-primary">
          Watch now
        </button>
      </div>
    </div>
  );
}

export default Banner;
