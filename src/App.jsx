import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"


function App() {
  const cards = data.map((journey, ind) => {
    return (
      <Card 
        key={ind}
        item={journey}
      />  
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className='cards'>
        {cards}
      </section>
    </div>
  )
}

export default App
