import React from "react";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { HowWorks } from "./components/HowWorks";
import { DownloadApp } from "./components/DownloadApp";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <HowWorks />
      <DownloadApp />
    </>
  );
}

export default App;
