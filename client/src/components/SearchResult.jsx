import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import axios from "axios";
class SearchResult extends Component {
  state = { title: "", author: "" };
  onSave = (book) => {
    this.setState(
      {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors?.[0]
          ? book.volumeInfo.authors[0]
          : "No Author Listed",
        imgUrl: book.volumeInfo.imageLinks?.smallThumbnail,
        description: book.volumeInfo?.description
          ? book.volumeInfo.description
          : book.volumeInfo.subtitle,
        pageCount: book.volumeInfo.pageCount,
      },
      () => {
        axios.post("/api/books", this.state).then(() => {
          alert(`${this.state.title} has been added to your bookshelf.`);
        });
      }
    );
  };

  render() {
    if (this.props.ready === true) {
      return (
        <div style={{ marginBottom: "2em" }}>
          <ListGroup>
            {/* {console.log(this.props.books)} */}
            {this.props.books?.map((book) => (
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
                >
                  <img
                    className="bookImg"
                    alt="book"
                    src={book.volumeInfo.imageLinks?.smallThumbnail}
                  />
                </a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      );
    }
    return <div></div>;
  }
}

export default SearchResult;
