import "./App.css";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Pricing from "./components/princing.jsx";
import Contact from "./components/contact.jsx";
import LoginPage from "./login.jsx";

const App = () => {
  const path = window.location.pathname;
  if (path === '/login') {
    return (<LoginPage />);
  }else {
    return (
      <div className="relative overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </div>
      
    );
  }
};

export default App;
