import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingHome from './LandingHome.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingHome />
  </StrictMode>,
)
