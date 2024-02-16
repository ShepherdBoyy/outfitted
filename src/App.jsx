import "./App.css"
import Navbar from "./Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Wardrobe from "./Pages/Wardrobe"
import TopTrends from "./Pages/TopTrends"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/outfitted" element={<Home />} />
          <Route path="outfitted/about" element={<About />} />
          <Route path="outfitted/wardrobe" element={<Wardrobe />} />
          <Route path="outfitted/top-trends" element={<TopTrends />} />
        </Routes>
      </div>
    </>
  )
}

export default App
