import "./App.css";
import { BrowserRouter} from "react-router-dom";
import Router from "./Router";

function App() {
  return (

    <BrowserRouter>
    <Router basename="/personal-portfolio-website"/>
    </BrowserRouter>
  
  );
}

export default App;
