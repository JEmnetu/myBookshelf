import React, { Component } from "react";
import SearchResult from "../components/SearchResult";
import SearchBar from "../components/SearchBar";
import { Container } from "reactstrap";
import Background from "../images/shelf.jpg";

let axios = require("axios");

class Search extends Component {
  state = {
    books: [],
    isLoaded: false,
  };

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
        <SearchBar handleInputChange={this.onInputChange.bind(this)} />
        <SearchResult books={this.state.books} ready={this.state.isLoaded} />
      </Container>
    );
  }
}

export default Search;
