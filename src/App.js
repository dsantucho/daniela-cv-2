import "./App.css";
// Ract router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
//components
import NavBar from "./components/NavBar";

//Pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <ParallaxProvider>
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
      </ParallaxProvider>
    </Router>
  );
}

export default App;
