import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.tsx'
import '../src/styles/index.css'
import 'remixicon/fonts/remixicon.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
