import NavBar from "./componenets/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import BanhoTosa from "./pages/BanhoTosa";
import Adestramento from "./pages/Adestramento";

function App() {

  return (
    <>
    <BrowserRouter>
      <header>
        <div className="container">
          <NavBar />
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="banho-e-tosa" element={ <BanhoTosa />} />
          <Route path="/adestramento" element={ <Adestramento />} />
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}

export default App;