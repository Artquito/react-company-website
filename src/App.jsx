import "./App.css";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Pricing from "./components/princing.jsx";

const App = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Pricing />
    </div>
  );
};

export default App;
