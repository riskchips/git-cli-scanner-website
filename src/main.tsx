import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Demo from './Demo.tsx'

const Page = window.location.pathname.replace(/\/$/, '') === '/demo' ? Demo : App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
