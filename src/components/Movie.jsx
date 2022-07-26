import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { MoviesSaved } from "../context/SavedMoviesContext";

const Movie = ({ movie }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
  const [liked, setLiked] = useState(false);

  const { movies, deleteMovie, saveMovie } = MoviesSaved();

  useEffect(() => {
    movies?.forEach((item) => {
      if (item.id === movie.id) {
        setLiked(true);
      }
    });
  }, [movies, movie]);

  const handleClick = async (movie) => {
    if (liked) {
      setLiked(false);
      deleteMovie(movie.id);
    } else {
      setLiked(true);
      saveMovie(movie);
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`${IMAGE_URL}${movie?.backdrop_path}`}
        alt={movie?.title}
        className="w-full h-auto block"
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>
        <p onClick={() => handleClick(movie)}>
          {liked ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
