import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Logo from "./components/Logo";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <Layout />
      <Logo/>
      <Projects />
      <About/>
    </div>
  );
}

export default App;
