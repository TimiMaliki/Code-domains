import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Logo from "./components/Logo";
import Projects from "./components/Projects";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Layout />
      <Logo/>
      <Projects />
     <About/>
       <Qualification />
      {/* <Testimony/>
      <Footer/> */}
    </div>
  );
}

export default App;
