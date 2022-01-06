import React from "react";

import "./style.css";

export const Header = () => (
  <header className="header-wrapper">
    <img
      src="./imgs/logo.png"
      alt="Rachi, tudo que você precisa em um lugar só."
    />

    <nav>
      <ul>
        <li>
          <a href="#">Funcionalidades</a>
        </li>
        <li>
          <a href="#">App</a>
        </li>
        <li>
          <a href="#">Planos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
  </header>
);
