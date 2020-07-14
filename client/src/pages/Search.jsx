import React, { Component } from "react";
import SearchResult from "../components/SearchResult";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
let axios = require("axios");

class Search extends Component {
  state = {
    books: [],
    isLoaded: false,
  };

  // onSubmitSearch = (e) => {
  //   e.preventDefault();

  //   const query = e.target[0].value;
  //   if (query.length === 0) {
  //     this.setState({ isLoaded: false });
  //     return;
  //   }
  //   axios
  //     .get(`https://www.googleapis.com/books/v1/volumes?q=${e.target[0].value}`)
  //     .then((books) => {
  //       this.setState({ books: books.data.items, isLoaded: true });
  //     });
  // };
  onInputChange = (e) => {
    const query = e.target.value;
    // Checks initially for an empty search query
    if (query.length === 0) {
      this.setState({ isLoaded: false });
      return;
    }

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}`)
      .then((books) => {
        this.setState({ books: books.data.items, isLoaded: true }, () =>
          console.log(this.state)
        );
      });
    // Checks again for an empty search after a previous
    if (query.length === 0) {
      this.setState({ isLoaded: false });
      return;
    }
  };

  render() {
    return (
      <Container>
        <div className="srd">
          <input
            onChange={this.onInputChange}
            type="text"
            id="search-input"
            name="search"
            placeholder="Search for your next book"
          />
        </div>

        <SearchResult books={this.state.books} ready={this.state.isLoaded} />
      </Container>
    );
  }
}

export default Search;
