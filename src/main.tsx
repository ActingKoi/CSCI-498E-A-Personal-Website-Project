import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// Self-hosted fonts (from npm, so no requests to Google at runtime).
import '@fontsource-variable/fraunces'
import '@fontsource-variable/figtree'

// Entry point: find the #root div in index.html and render <App /> into it.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
