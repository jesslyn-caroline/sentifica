import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./screens/Layout"
import Home from "./screens/Home"
import Analyze from "./screens/Analyze"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/analyze" element={<Analyze/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
