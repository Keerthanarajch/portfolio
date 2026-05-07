import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Achievements from "./components/Achievements"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App