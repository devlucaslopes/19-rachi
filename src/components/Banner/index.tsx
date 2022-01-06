import React from "react";

import "./style.css";

export const Banner = () => (
  <main className="main-wrapper">
    <div className="main-content">
      <div className="call-to-action">
        <h1>Rachi, é tudo que você precisa em um só lugar.</h1>
        <button className="btn">Cadastrar-se</button>
      </div>

      <img src="./imgs/working.png" alt="Trabalhando de qualquer lugar" />
    </div>
  </main>
);
