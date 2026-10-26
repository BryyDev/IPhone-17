import Colors from "./components/Colors"
import Footer from "./components/Footer"
import Hero from "./components/Hero" // importando o componente
import Highlights from "./components/Highlights"
import Intro from "./components/Intro"
import NavBar from "./components/NavBar" // importando o componente

function App() {
  

  return (
    <div>
      <NavBar/> {/* nome do componente */}
      <Hero/> {/* nome do componente */}
      <Intro/> {/* nome do componente */}
      <Highlights/> {/* nome do componente */}
      <Colors/> {/* nome do componente */}
      <Footer/> {/* nome do componente */}
    </div>
  )
}

export default App
