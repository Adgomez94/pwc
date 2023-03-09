import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MarvelProvider from './store/Marvel/MarvelProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MarvelProvider>
     <App />
    </MarvelProvider>
  </React.StrictMode>,
)
