
import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import AppPageAcceuil1 from './acceuil/pageAcceuil1.jsx'

let rootContainer = document.getElementById('root')
  createRoot(rootContainer).render(
        <StrictMode>
          <AppPageAcceuil1/>
        </StrictMode>
    )