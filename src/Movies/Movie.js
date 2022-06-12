import PropTypes from "prop-types";

function Movie({ converImg, title, summary, genres }) {
  return (
    <div>
      <img src={converImg} alt={title} />
      {/* https://yts.mx/api/v2/movie_details.json?movie_id=37384 */}
      <h2>{title}</h2>
      <p>{summary}</p>
      {genres.map((genr, index) => (
        <li key={index}>{genr}</li>
      ))}
    </div>
  );
}

Movie.propTypes = {
  converImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  generes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
