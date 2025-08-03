import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function BackButton({ to, children }) {
  return <Link to={to}>{children}</Link>;
}

BackButton.propTypes = {
  children: PropTypes.string.isRequired,
};
