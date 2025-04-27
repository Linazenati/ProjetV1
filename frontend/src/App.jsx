import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Bo from "./pages/bo"
import Fo from "./pages/fo"

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Fo />} />
        <Route path="/web/*" element={<Fo />} />

        <Route path="/admin/*" element={<Bo />} />
      </Routes>
    </Router>
  )
}

export default App
