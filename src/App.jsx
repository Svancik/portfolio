import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Who } from "./components/Who/Who";
import { Works } from "./components/Works/Works";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
