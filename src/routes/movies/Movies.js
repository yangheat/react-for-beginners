import { useEffect, useState } from "react";
import Movie from "../../components/Movie";

function Movies() {
  console.log("movies");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // const response = await fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    // );
    // const json = await response.json()

    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();

    setLoading((prev) => !prev);
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            converImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  );
}

export default Movies;
