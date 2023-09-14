
import './App.scss'
import Presentation from "./assets/section/Presentation";

import Stack from "./assets/section/Stack";
import Project from "./assets/section/Project";
import Experience from "./assets/section/Experience";
import Formation from "./assets/section/Formation";
import Contact from "./assets/section/Contact";
import Header from "./assets/section/Header";


function App() {

  return (
    <>
<Header />
        <Presentation />
        <Stack />
        <Project />

        <Experience />
        <Formation />
        <Contact />
    </>
  )
}

export default App
