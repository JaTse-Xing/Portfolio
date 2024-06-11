import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Tech from "./components/Tech"
import About from "./components/About"
import Footer from "./components/Footer"
function App() { 
  return (
    <main className="bg-black">
      <Navbar/> 
      <Hero />
      <About/>
      <Highlights/>
      <Tech/>
      <Footer/>

    </main>
  )
}
export default App