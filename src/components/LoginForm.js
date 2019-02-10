import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: null,
      password: null,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" onChange={this.handleChange} value={this.state.username} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" onChange={this.handleChange} value={this.state.password}type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
