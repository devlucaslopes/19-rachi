import React from "react";

import "./style.css";
import { Wrapper } from "../Wrapper";
import { PlanCard } from "../PlanCard";

export const Plans = () => (
  <Wrapper>
    <div className="plans-title">
      <h2>Nossos Planos</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        mi quis euismod ultrices.
      </p>
    </div>

    <ul className="plan-list">
      <li>
        <PlanCard
          title="Bronze"
          price={28}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."
        />
      </li>
      <li>
        <PlanCard
          title="Prata"
          price={57}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."
          buttonLabel="Ver promoção"
          darken
        />
      </li>
      <li>
        <PlanCard
          title="Ouro"
          price={94}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."
        />
      </li>
    </ul>
  </Wrapper>
);
