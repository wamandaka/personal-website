/* eslint-disable no-unused-vars */
import { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
