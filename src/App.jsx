import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import "./styles/styles.css"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )

}

export default App