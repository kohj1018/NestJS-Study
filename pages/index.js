import Seo from "../components/Seo";
import {useEffect, useState} from "react";

const API_KEY = "ce52c9f7cca10f74593858c998a783d0";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      // const response = await fetch(
      //   `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      // );
      // const json = await response.json();
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home"/>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}