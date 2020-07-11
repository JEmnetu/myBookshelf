import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";
let axios = require("axios");

class Home extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       books: [],
  //       isLoaded: false,
  //     };
  //   }
  state = { books: [], isLoaded: false };
  componentDidMount = () => {
    axios.get("/api/books").then((books) => {
      this.setState({ books: books.data, isLoaded: true });
    });
  };
  onDelete = (id) => {
    const savedBooks = [...this.state.books];

    // newBooks.forEach((book) => console.log(book._id));
    const newBooks = savedBooks.filter((book) => book._id !== id);
    this.setState(
      {
        books: newBooks,
      },
      () => {
        axios.delete(`/api/books/${id}`);
      }
    );
  };
  render() {
    if (this.state.books < 2) {
      return (
        <Container>
          <div>
            <h3 style={{ textAlign: "center" }}>
              Search for new books to add to your bookshelf!
            </h3>
          </div>
        </Container>
      );
    } else {
      return (
        <Container fluid>
          <div>
            <ListGroup>
              {this.state.books.map((book, index) => (
                <ListGroupItem key={index}>
                  <Button
                    style={{ marginRight: "10rem" }}
                    size="sm"
                    color="danger"
                    onClick={this.onDelete.bind(this, book._id)}
                  >
                    &times;
                  </Button>
                  Title: {book.title} - Author: {book.author}
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
