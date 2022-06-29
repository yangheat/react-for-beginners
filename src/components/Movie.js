import PropTypes from "prop-types";
// import { useState } from "react";
import { Link } from "react-router-dom";

function Movie({ id, converImg, title, rating, genres, runtime }) {
  // const [text, setText] = useState();

  // if (title.length > 19) {
  //   setText(`${title.slice(0, 18)}...`);
  // }
  return (
    <li>
      <div className="thump">
        <Link to={`/movies/${id}`}>
          <img src={converImg} alt={title} />
        </Link>
      </div>
      {/* https://yts.mx/api/v2/movie_details.json?movie_id=37384 */}
      <dl className="description">
        <dd>
          <Link to={`/movies/${id}`}>{title}</Link>
        </dd>
        <dd>{rating}</dd>
        <dd>{genres.join("/")}</dd>
        <dd>
          {Math.round(runtime / 60)}H {runtime % 60}M
        </dd>
      </dl>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  converImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
