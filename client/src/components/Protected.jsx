import React, { Component } from "react";
import { AuthContext } from "./AuthComp";

class Protected extends Component {
  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/Login");
  };
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <div>
            <button className="btn btn-danger" onClick={this.handleLogout}>
              Logout
            </button>
            <h1 style={{ color: "white" }}>{authContext.email}</h1>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Protected;
