import NavBar from "./componenets/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import BanhoTosa from "./pages/BanhoTosa";

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
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}

export default App;