import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Escenarios from "./pages/Escenarios";
import Wiki from "./pages/Wiki";
import Navbar from "./components/Navbar";

function App(){
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route index element={<Inicio/>}/>
          <Route path="/Escenarios" element={<Escenarios/>}/>
          <Route path="/Wiki" element={<Wiki/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;