import PropTypes from "prop-types";
import { useState } from "react";

export default function SearchBox({ onSubmit, defaultValue = "" }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="query"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};
