import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyle.ts'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
