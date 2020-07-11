import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import axios from "axios";
class SearchResult extends Component {
  state = { title: "", author: "" };
  onSave = (book) => {
    console.log(book);
    this.setState(
      {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
      },
      () => axios.post("/api/books", this.state)
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
                {book.volumeInfo.title}{" "}
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      );
    }
    return (
      <div>
        <h1>Search for a new book!</h1>
      </div>
    );
  }
}

export default SearchResult;