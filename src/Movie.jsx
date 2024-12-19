import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Movie1to10 from "./Movie1to10";
import Movie11to20 from "./Movie11to20";
import Loading from "./Loading";
const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  // api url for movie page
  const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`;

  // hook
  useEffect(() => {
    axios
      .get(APIURL)
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.log(error));
  }, [page]);

  // using useNavgate from react router dom
  const nav = useNavigate();
  const handleMovieDetail = (movie) => {
    nav(`/detail/${movie.original_title}`, { state: { movie } });
  };

  return (
    <>
      {page <= 10 ? (
        <Movie1to10
          handleMovieDetail={handleMovieDetail}
          setPage={setPage}
          movies={movies}
        />
      ) : page > 10 && page <= 20 ? (
        <Movie11to20
          handleMovieDetail={handleMovieDetail}
          setPage={setPage}
          movies={movies}
        />
      ) : (
        <div className="relative h-screen ">
          {" "}
          <div className="flex flex-col absolute inset-0 mt-[20%]  gap-6 items-center z-10 ">
            <h2 className="sm:text-[30px]">
              Next page after 21 is coming soon......
            </h2>{" "}
            <div>
              {" "}
              <button
                className="border border-black bg-orange-700 px-2 rounded-full"
                onClick={() => setPage(1)}
              >
                Back to Home
              </button>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <Loading />
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
