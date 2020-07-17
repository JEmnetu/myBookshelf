import React from "react";

const SearchBar = (props) => {
  return (
    <div id="search-div">
      <input
        onChange={props.handleInputChange}
        type="text"
        id="search-input"
        name="search"
        placeholder="Search for your next book"
      />
    </div>
  );
};

export default SearchBar;
