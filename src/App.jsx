import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./globalStyle";
import Home from "./pages/Home";
import Barbeiros from "./pages/Barbeiros";
import Servicos from "./pages/Servicos";
import Atendimentos from "./pages/Atendimentos";
import Page404 from "./pages/Page404";
import Layout from "./components/Layout";
import AdicionarBarbeiro from "./pages/AdicionarBarbeiro";
import AdicionarServico from "./pages/AdicionarServico";
import AdicionarAtendimentos from "./pages/AdicionarAtendimento";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />  {/* RESET CSS GLOBAL */}

      <Routes>
        <Route path="/" element={<Layout />}>    {/* para chamar o layout */}

          <Route index element={<Home />} />
          <Route path="/barbeiros" element={<Barbeiros />} />
          <Route path="/adicionarBarbeiro" element={<AdicionarBarbeiro />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/adicionarServico" element={<AdicionarServico />} />
          <Route path="/atendimentos" element={<Atendimentos />} />
          <Route path="/adicionarAtendimentos" element={<AdicionarAtendimentos />} />
          <Route path="*" element={<Page404 />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
