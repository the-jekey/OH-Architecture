import { useState } from 'react'
import Main from './Components/Main'
import LocomotiveScroll from 'locomotive-scroll';
import MainTwo from './Components/MainTwo';
import Hero from './Components/Hero';
import Process from './Components/Process';
import Projects from './Components/Projects';
import About from './Components/About';
import Footer from './Components/Footer';



function App() {

  const locomotiveScroll = new LocomotiveScroll();


  const [count, setCount] = useState(0)

  return (
    <>
      <div className="overflow-hidden font-['font'] selection:bg-black selection:text-white">
        <Main />
        <MainTwo />
        <Hero />
        <Process />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App
