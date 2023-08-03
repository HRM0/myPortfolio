import React from "react"
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"

function App() {

  return (
    <>
      <Navbar />
      <Welcome />
      <div className='text-3xl font-bold underline'>
        hello world
      </div>
    </>
  )
}

export default App
