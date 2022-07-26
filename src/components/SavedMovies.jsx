import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import { MoviesSaved } from "../context/SavedMoviesContext";
const SavedMovies = () => {
  const { movies, deleteMovie } = MoviesSaved();
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

  const slide = (side) => {
    let slider = document.getElementById("slider");

    side === "left"
      ? (slider.scrollLeft = slider.scrollLeft - 500)
      : (slider.scrollLeft = slider.scrollLeft + 500);
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Movies</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slide("left")}
          size={40}
          className="bg-white  left-1 rounded-full absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={`slider`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((movie, idx) => (
            <div
              key={idx}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                src={`${IMAGE_URL}${movie?.img}`}
                alt={movie?.title}
                className="w-full h-auto block"
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {movie?.title}
                </p>
                <p
                  className="absolute text-gray-300 top-4 right-4 font-bold"
                  onClick={() => deleteMovie(movie.id)}
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
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

export default SavedMovies;
