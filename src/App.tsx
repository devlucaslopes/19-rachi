import React from "react";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <button className="btn">Cadastrar-se</button>
    </>
  );
}

export default App;
