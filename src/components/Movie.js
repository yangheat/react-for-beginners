import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, converImg, title, summary, genres }) {
  return (
    <div>
      <img src={converImg} alt={title} />
      {/* https://yts.mx/api/v2/movie_details.json?movie_id=37384 */}
      <h2>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      {genres.map((genr, index) => (
        <li key={index}>{genr}</li>
      ))}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  converImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
