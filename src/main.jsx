
import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppPageAcceuil1 from './acceuil/pageAcceuil1.jsx'
import Apropos from "./apropos/pageApropos.jsx";
import Projet from "./projet/pageProjet";
import Contact from "./contact/pageContact";
import Service from "./service/pageService";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AppPageAcceuil1 />} />
          <Route path="/apropos/pageApropos" element={<Apropos />} />
          <Route path="/service/pageService" element={<Service />} />
          <Route path="/projet/pageProjet" element={<Projet />} />
          <Route path="/contact/pageContact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}


let rootContainer = document.getElementById('root')
  createRoot(rootContainer).render(
        <StrictMode>
          <App/>
        </StrictMode>
    )
