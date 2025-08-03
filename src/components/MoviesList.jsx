import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MoviesList({ movies, state }) {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${id}`} state={state}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
};
