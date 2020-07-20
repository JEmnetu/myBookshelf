import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = { password: "", email: "" };

  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      this.props.history.push("/Protected");
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        localStorage.setItem("jwt", JSON.stringify(res.data.token));
        this.props.history.push("/Protected");
      });
  };
  render() {
    return (
      <form
        onSubmit={this.submit}
        style={{
          textAlign: "center",
          marginTop: "40vh",
        }}
      >
        ><label style={{ color: "red" }}>Email</label>
        <input type="text" name="email" onChange={this.handleChange} />
        <label style={{ color: "red" }}>Password</label>
        <input type="text" name="password" onChange={this.handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default withRouter(Login);
