import { BrowserRouter,Routes,Route } from "react-router-dom";
import CadreCouleur from "../acceuil/pageAcceuil1.jsx";
import Apropos from "../apropos/pageapropos.jsx"
import Projet from "../projet/pageProjet.jsx"


 export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CadreCouleur />} />
            <Route path="/apropos/pageapropos" element={<Apropos />} />
            <Route path="/projet/pageProjet" element={<Projet />} />
        </Routes>
      </BrowserRouter>
    );
  }
  