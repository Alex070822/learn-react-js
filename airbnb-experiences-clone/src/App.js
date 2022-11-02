import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/data"

function App() {
  return (
    <div className="root-container">
      <Navbar />
      <Hero />
      <section className="cards--list">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </section>
    </div>
  )
}

export default App
