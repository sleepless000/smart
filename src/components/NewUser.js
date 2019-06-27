import React from 'react';
import './NewUser.css';

export default class NewUser extends React.Component {
  state = {
    username: '',
    email: '',
    password: ''
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/dashboard',
      state: { user: this.state }
    });
    this.setState({ username: '', email: '', password: '' });
  };
  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleOnChange}
            value={this.state.username}
            name="username"
            type="text"
            placeholder="username"
            className="field"
            required
          />
          <input
            onChange={this.handleOnChange}
            value={this.state.password}
            name="password"
            type="password"
            placeholder="password"
            className="field"
            required
          />
          <input
            onChange={this.handleOnChange}
            value={this.state.email}
            name="email"
            type="email"
            placeholder="email"
            className="field"
            required
          />
          <input type="submit" value="register" className="btn" />
        </form>
      </div>
    );
  }
}
