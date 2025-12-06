import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'      // your global styles
import LandingHome from './LandingHome'   // your main component

// Get the div with id="root" from index.html
const root = createRoot(document.getElementById('root'))

// Render your app
root.render(
  <React.StrictMode>
    <LandingHome />
  </React.StrictMode>
)
