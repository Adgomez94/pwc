import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MarvelProvider from './store/Marvel/MarvelProvider'
import { MarvelApp } from './MarvelApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MarvelProvider>
     <MarvelApp />
    </MarvelProvider>
  </React.StrictMode>,
)
