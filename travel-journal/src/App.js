import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  return (
    <>
      <Navbar />
      <section className="cards--list">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </section>
    </>
  );
}

export default App;
