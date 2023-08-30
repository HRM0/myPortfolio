import React from "react"
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Welcome />
        <AboutMe />
        <Projects />
      </main>
    </>
  )
}

export default App
