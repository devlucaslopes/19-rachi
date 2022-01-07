import React from "react";

import "./style.css";

import { Wrapper } from "../Wrapper";

export const HowWorks = () => (
  <Wrapper>
    <div className="how-works-content">
      <h2>Como funciona</h2>

      <ul>
        <li>
          <div className="how-works-item">
            <img src="./imgs/icons/connections.png" alt="" />
            <h4>Crie conexões</h4>
            <p>Lorem ipsum dolor sit amet, consecteteu.</p>
          </div>
        </li>

        <li>
          <div className="how-works-item">
            <img src="./imgs/icons/security.png" alt="" />
            <h4>100% seguro</h4>
            <p>Lorem ipsum dolor sit amet, consecteteu.</p>
          </div>
        </li>

        <li>
          <div className="how-works-item">
            <img src="./imgs/icons/share.png" alt="" />
            <h4>Compartilhamento</h4>
            <p>Lorem ipsum dolor sit amet, consecteteu.</p>
          </div>
        </li>
      </ul>
    </div>
  </Wrapper>
);
