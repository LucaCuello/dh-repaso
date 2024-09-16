import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor="name">
          Nombre
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <label htmlFor="email">
          Correo
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Contact;
