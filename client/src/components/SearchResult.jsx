import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

import axios from "axios";
class SearchResult extends Component {
  state = { title: "", author: "" };
  onSave = (book) => {
    this.setState(
      {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors
          ? book.volumeInfo.authors
          : "Author Undefined",
      },
      () => {
        axios.post("/api/books", this.state).then(() => {
          alert("Book has been added to your bookshelf.");
        });
      }
    );
  };

  render() {
    if (this.props.ready === true) {
      return (
        <div>
          <ListGroup>
            {/* {console.log(this.props.books)} */}
            {this.props.books.map((book) => (
              <ListGroupItem key={book.id}>
                <Button
                  color="dark"
                  className="Save-btn"
                  size="sm"
                  onClick={this.onSave.bind(this, book)}
                >
                  Save
                </Button>
                <h5 className="bookTitle">{book.volumeInfo.title} </h5>
                <br />
                <a
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="book_image"
                >
                  <img
                    className="bookImg"
                    src={book.volumeInfo.imageLinks?.smallThumbnail}
                  />
                </a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      );
    }
    return (
      <div>
        <h3></h3>
      </div>
    );
  }
}

export default SearchResult;
