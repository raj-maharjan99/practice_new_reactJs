import React from "react";
import { IMGPATH, pageNo } from "./movieData";

const Movie1to10 = ({ movies, setPage, handleMovieDetail }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 sm:flex-row flex-col">
        <div>
          <div className="flex items-center justify-center gap-2 mt-5 ">
            <div className="flex gap-3 justify-center flex-wrap px-1 ">
              {pageNo.slice(0, 10).map((pageNumber) => (
                <button
                  key={pageNumber.id}
                  onClick={() => setPage(`${pageNumber.value}`)}
                  className={`border border-black px-2 rounded-md text-white ${pageNumber.bgColor}`}
                >
                  {pageNumber.page_no}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button
            onClick={() => setPage(11)}
            className="border border-black px-2 rounded-md text-white bg-slate-700 "
          >
            Next
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4">
        {movies?.map((movie) => (
          <div
            className="flex flex-col justify-center m-2 p-2 border-2 border-gray-200 shadow-lg rounded-md"
            key={movie.id}
          >
            <div>
              {" "}
              <img
                onClick={() => handleMovieDetail(movie)}
                className="w-full"
                src={IMGPATH + movie.poster_path}
                alt=""
              />
            </div>
            <div className="flex  justify-around">
              <p>{movie.original_title}</p>{" "}
              <p className="text-orange-500"> {movie?.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie1to10;
