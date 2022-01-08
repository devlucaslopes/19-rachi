import React from "react";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { HowWorks } from "./components/HowWorks";
import { DownloadApp } from "./components/DownloadApp";
import { Plans } from "./components/Plans";
import { FormContact } from "./components/FormContact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <HowWorks />
      <DownloadApp />
      <Plans />
      <FormContact />
      <Footer />
    </>
  );
}

export default App;
