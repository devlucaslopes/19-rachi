import React from "react";

import { Wrapper } from "../Wrapper";
import { Button } from "../Button";

import "./style.css";

export const Banner = () => (
  <Wrapper bgColor="white-200">
    <div className="main-content">
      <div className="call-to-action">
        <h1>Rachi, é tudo que você precisa em um só lugar.</h1>
        <div className="button-wrapper">
          <Button>Cadastrar-se</Button>
        </div>
      </div>

      <img src="./imgs/working.png" alt="Trabalhando de qualquer lugar" />
    </div>
  </Wrapper>
);
