import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Logo from "./components/Logo";
import Projects from "./components/Projects";
import About from "./components/About";
import Qualification from "./components/Qualification";

function App() {
  return (
    <div>
      <Header />
      <Layout />
      <Logo/>
      <Projects />
      <About/>
      <Qualification />
    </div>
  );
}

export default App;
