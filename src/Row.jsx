/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "./axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      //   console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //   console.table(movies);

  return (
    <div className="row ">
      <h2 className="text-5xl font-bold py-14 text-white">{title}</h2>
      <div className="row__posters object-contain flex overflow-scroll ">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
