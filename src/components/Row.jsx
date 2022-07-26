import React, { useState, useEffect } from "react";
import { fetchMoviesByURL } from "../ApiCalls";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async (url) => {
      const response = await fetchMoviesByURL(url);
      setMovies(response);
    };
    fetchMovies(fetchURL);
  }, [fetchURL]);

  //Slides the row div
  const slide = (side, sliderId) => {
    let slider = document.getElementById("slider" + rowId);

    side === "left"
      ? (slider.scrollLeft = slider.scrollLeft - 500)
      : (slider.scrollLeft = slider.scrollLeft + 500);
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slide("left")}
          size={40}
          className="bg-white  left-1 rounded-full absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={`slider` + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((movie, idx) => (
            <Movie key={idx} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide("right")}
          size={40}
          className="bg-white right-1 rounded-full absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
