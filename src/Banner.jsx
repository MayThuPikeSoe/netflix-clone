/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./Requests";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //   console.log(
      //     request.data.results[
      //       Math.floor(Math.random() * request.data.results.length - 1)
      //     ]
      //   );

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    setMovie(fetchData());
  }, []);
  console.log(movie);

  return (
    <div>
      <header
        className="banner px-7"
        style={{
          backgroundSize: "cover",
          background: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="pt-28 font-bold pb-3">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner_buttons">
            <button className="banner_button text-white cursor-pointer outline-none border-none font-bold border-r-2 px-9 mr-5 py-2">
              Play
            </button>
            <button className="banner_button text-white cursor-pointer outline-none border-none font-bold border-r-2 px-9 mr-5 py-2">
              My List
            </button>
          </div>
          <h1 className="banner_description text-xl text-white">
            
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Banner;
