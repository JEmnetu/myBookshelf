import React, { Component } from "react";
import axios from "axios";
import { getJWT } from "../helpers/jwt";
import { Redirect } from "react-router-dom";
import Login from "./Login";
export const AuthContext = React.createContext();
class AuthComp extends Component {
  state = { user: undefined };
  componentDidMount() {
    const jwt = getJWT();
    if (!jwt) {
      console.log("No Token");

      window.location.href = "/Login";
    }
    console.log(`Token: ${jwt}`);
    axios
      .get("http://localhost:6001/api/auth/user", {
        headers: { "x-auth-token": jwt },
      })
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("jwt");
        window.location.href = "/Login";
      });
  }
  render() {
    if (this.state.user === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <AuthContext.Provider value={this.state.user}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthComp;
