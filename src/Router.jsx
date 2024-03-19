import {Routes,Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Layout from "./pages/Layout/Layout"
import Projects from "./pages/Projects/Projects"
import About from "./pages/About/About"
import Testimony from "./pages/Testimony/Testimony"
import Contact from "./pages/Contact/Contact"
import BlogHero from "./pages/Blog/BlogHero";
import Blackeye from "./pages/BlogStories/BlackEyePeas"
import Estacy from "./pages/BlogStories/Estacy"
import Fun from "./pages/BlogStories/FunFun"

const Router = () => {
  return (
   
   <Routes>
    <Route path="" element={<MainLayout/>}>
    <Route index element={<Layout />}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/testimony" element={<Testimony />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/blog" element={<BlogHero />}/>
    <Route path="/blog/blackeye" element={<Blackeye />}/>
    <Route path="/blog/estacy" element={<Estacy />}/>
    <Route path="/blog/Fun" element={<Fun/>}/>
    </Route>
   </Routes>

  )
}

export default Router