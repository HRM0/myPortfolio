import React from "react"
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import AboutMe from "./components/AboutMe"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Welcome />
        <AboutMe />
      </main>
    </>
  )
}

export default App
