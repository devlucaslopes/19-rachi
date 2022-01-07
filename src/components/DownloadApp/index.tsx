import React from "react";

import "./style.css";
import { Wrapper } from "../Wrapper";

export const DownloadApp = () => (
  <Wrapper bgColor="white-200">
    <div className="download-app-wrapper">
      <div className="download-app-content">
        <h3>Baixe nosso app para desfrutar mais!</h3>
        <p>
          Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur
          turpis elementum amet vitae et etiam nec. Varius volutpat hac
          adipiscing tincidunt pretium.
        </p>

        <div className="buttons-wrapper">
          <a href="#">
            <img
              src="./imgs/download-google-play.png"
              alt="download on google play"
            />
          </a>
          <a href="#">
            <img
              src="./imgs/download-apple-store.png"
              alt="download on apple store"
            />
          </a>
        </div>
      </div>

      <img src="./imgs/notifications.png" alt="" />
    </div>
  </Wrapper>
);
