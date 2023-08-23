
import './App.scss'
import Presentation from "./assets/component/Presentation";

import Stack from "./assets/component/Stack";
import Project from "./assets/section/Project";
import Experience from "./assets/component/Experience";
import Formation from "./assets/component/Formation";
import Contact from "./assets/component/Contact";


function App() {

  return (
    <>

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
