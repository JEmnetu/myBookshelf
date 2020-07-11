import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";
let axios = require("axios");

class Home extends Component {
  state = { books: [], isLoaded: false };
  componentDidMount = () => {
    axios.get("/api/books").then((books) => {
      this.setState({ books: books.data, isLoaded: true });
    });
  };
  render() {
    if (this.state.isLoaded === false) {
      return (
        <Container>
          <div>
            <h1 style={{ textAlign: "center" }}>HabteJ Bookshelf</h1>
            <h3 style={{ textAlign: "center" }}>
              The books you save will appear below
            </h3>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <div>
            <h1 style={{ textAlign: "center" }}>HabteJ Bookshelf</h1>
            <ListGroup>
              {this.state.books.map((book, index) => (
                <ListGroupItem key={index}>
                  Title: {book.title}
                  <br />
                  Author: {book.author}
                  <br />
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </Container>
      );
    }
  }
}

export default Home;
