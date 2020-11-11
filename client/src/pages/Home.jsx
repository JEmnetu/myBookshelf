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
  onDelete = (id) => {
    const savedBooks = [...this.state.books];

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
    return (
      <Container>
        <div>
          <ListGroup>
            {this.state.books.map((book, index) => (
              <ListGroupItem key={index}>
                <Button
                  style={{ marginRight: "10rem", marginBottom: "1rem" }}
                  size="sm"
                  color="dark"
                  onClick={this.onDelete.bind(this, book._id)}
                >
                  &times;
                </Button>
                <div className="saved-book-info">
                  <div>
                    <img src={book.imgUrl} alt="saved book" />
                  </div>
                  <div className="book-info-right">
                    <h5>{book.title}</h5>
                    <h6>{book.author}</h6>
                    <p>{book.description}</p>
                    <span>{book.pageCount}</span>
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </Container>
    );
  }
}

export default Home;
