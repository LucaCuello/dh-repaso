import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nombre
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          Correo
          <input type="email" name="email" id="email" />
        </label>
        <button>Enviar</button>
      </form>
    );
  }
}

export default Contact;
