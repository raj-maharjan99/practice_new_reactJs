import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IMGPATH } from "./movieData";
import Loading from "./Loading";

const MovieDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const nav = useNavigate();
  const data = location?.state?.movie;

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);
  return (
    <div className="flex justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="space-y-2 mt-2">
          <button
            onClick={() => nav(-1)}
            className="border border-black cursor-pointer px-2 rounded bg-orange-500"
          >
            Back
          </button>
          <img src={IMGPATH + data?.backdrop_path} alt="" />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
