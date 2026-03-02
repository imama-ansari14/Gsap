import { useState } from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Menu from "./components/Menu";
import LandingPage from "./components/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LandingPage />
      {/* <Navbar />
      <Hero />
      <About />
      <Menu /> */}
    </>
  );
}

export default App;
