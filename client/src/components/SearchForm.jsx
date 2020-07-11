import React, { Component } from "react";
let axios = require("axios");

class Search extends Component {
  onSubmitSearch = (e) => {
    e.preventDefault();

    // axios
    //   .get(`https://www.googleapis.com/books/v1/volumes?q=${e.target[0].value}`)
    //   .then((books) => {});
  };
  onInputChange = (e) => {
    const query = e.target.value;
    if (query.length === 0) {
      return;
    }
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}`)
      .then((books) => {
        console.log(books.data.items[0].volumeInfo.title);
      });
  };
  render() {
    return (
      <div>
        <h1>Search Div</h1>
        <form onSubmit={this.onSubmitSearch}>
          <input
            onChange={this.onInputChange}
            type="text"
            id="search"
            name="search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
