import React, { useEffect, useState } from "react";
import { fetchMoviesByURL } from "../ApiCalls";
import requests from "../Requests";
const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchPopularMovies = async (url) => {
      const response = await fetchMoviesByURL(url);
      setMovies(response);
    };
    fetchPopularMovies(requests.requestPopular);
  }, []);

  //   console.log(movie);
  const truncateDescription = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          src={`${IMAGE_URL}${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover "
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <span className="text-gray-400 text-sm md:text-lg ">
            Released: {movie?.release_date}
          </span>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-2">
            {truncateDescription(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
