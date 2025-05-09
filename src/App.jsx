// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";

const App = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
