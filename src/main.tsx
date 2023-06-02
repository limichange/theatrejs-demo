import './index.css'

import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'

// https://www.theatrejs.com/docs/0.5/getting-started/with-react-three-fiber

// our Theatre.js project sheet, we'll use this later

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
