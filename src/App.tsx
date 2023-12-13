import { useState } from "react"
import Navbar from "./components/Navbar"
import List from "./components/List"
import Modal from "./components/Modal"
import { dataItem } from "./lib/data"

function App() {
  const [selected, setSelected] = useState<dataItem | null>(null)
  return (
    <>
      <div>
          <Navbar/>
          <List setSelected={setSelected}/>
          <Modal selected={selected} setSelected={setSelected}/>
      </div>
    </>
  )
}

export default App
