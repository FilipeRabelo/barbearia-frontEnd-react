import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Barbeiros from "./pages/Barbeiros"
import Servicos from "./pages/Servicos"
import Atendimentos from "./pages/Atendimentos"
import Page404 from "./pages/Page404"
import Layout from "./components/Layout"
import { GlobalStyles } from "./globalStyle"
import AdicionarBarbeiro from "./pages/AdicionarBarbeiro"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>  {/* RESET CSS GLOBAL */}

        <Routes>
          <Route path="/" element={<Layout />}>    {/* para chamar o layout */}

            <Route index element={<Home />} />
            <Route path="/barbeiros" element={<Barbeiros />} />
            <Route path="/adicionarBarbeiro" element={<AdicionarBarbeiro />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/atendimentos" element={<Atendimentos />} />
            <Route path="*" element={<Page404 />} />

          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
