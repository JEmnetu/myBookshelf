import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = { username: "", password: "", email: "" };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users", {
        name: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        localStorage.setItem("jwt", JSON.stringify(res.data));
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
        <label style={{ color: "red" }}>Username</label>
        <input type="text" name="username" onChange={this.handleChange} />
        <label style={{ color: "red" }}>Email</label>
        <input type="text" name="email" onChange={this.handleChange} />
        <label style={{ color: "red" }}>Password</label>
        <input type="text" name="password" onChange={this.handleChange} />
        <button type="submit">Register User</button>
      </form>
    );
  }
}

export default Login;
