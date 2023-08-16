import "./App.css";
// Ract router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import NavBar from "./components/NavBar";

//Pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <header>
        <NavBar></NavBar>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
      <footer>
        {/* <BannerFooter />
        <Copyright /> */}
      </footer>
    </Router>
  );
}

export default App;
