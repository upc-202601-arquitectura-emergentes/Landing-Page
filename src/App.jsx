import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import { About } from './components/About/About'
import { BrandCarousel } from './components/BrandCarousel/BrandCarousel'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Service } from './components/Service/Service'
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Service />
              <BrandCarousel />
              <Contact/>
            </main>
            <Footer/>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
