import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "../../css/Movies.css";

function Movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=10&sort_by=year"
      )
    ).json();

    setLoading((prev) => !prev);
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="contents">
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              converImg={movie.medium_cover_image}
              title={movie.title_long}
              rating={movie.rating}
              summary={movie.summary}
              genres={movie.genres}
              runtime={movie.runtime}
              release={movie.date_uploaded}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
