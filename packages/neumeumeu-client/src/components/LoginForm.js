import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import FormComponent from "./FormComponent";
import StrokedText from "./StrokedText";

class LoginForm extends FormComponent {
  handleSubmit = event => {
    event.preventDefault();

    const { redirectTo } = this.props;
    this.props.login(this.state.username, this.state.password, redirectTo);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="username"
          type="text"
          placeholder="Username"
          required
          onChange={this.onChange("username")}
        />

        <input
          id="password"
          placeholder="Password"
          type="password"
          required
          onChange={this.onChange("password")}
        />

        <button className="button" type="submit">
          <StrokedText text="Login" />
        </button>
      </form>
    );
  }
}

export default connect(null, { login })(LoginForm);