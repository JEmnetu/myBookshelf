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

  onSubmitSearch = (e) => {
    e.preventDefault();

    const query = e.target[0].value;
    if (query.length === 0) {
      this.setState({ isLoaded: false });
      return;
    }
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${e.target[0].value}`)
      .then((books) => {
        this.setState({ books: books.data.items, isLoaded: true });
      });
  };
  // onInputChange = (e) => {

  // };

  // onSaveBook = (book) => {
  //   console.log(book);
  // };
  render() {
    return (
      <Container>
        <div id="search-flex">
          <form className="srd" onSubmit={this.onSubmitSearch}>
            <input type="text" id="search" name="search" />
            <button type="submit">Search</button>
          </form>
        </div>
        <SearchResult books={this.state.books} ready={this.state.isLoaded} />
      </Container>
    );
  }
}

export default Search;
