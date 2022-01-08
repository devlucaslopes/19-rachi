import React from "react";

import { Button } from "../Button";

import "./style.css";

export const FormContact = () => (
  <section className="wrapper form-contact-wrapper">
    <div className="content form-contact-content">
      <h2>Contato</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        mi quis euismod ultrices.
      </p>
      <form>
        <input type="text" placeholder="Seu melhor e-mail" />
        <Button size="small">Enviar</Button>
      </form>
    </div>
  </section>
);
