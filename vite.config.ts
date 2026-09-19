import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` must match the repo name, because GitHub Pages serves this site from
// /<repo-name>/ and not from the domain root. If it's wrong, the page loads
// but its CSS and JS 404 (an unstyled page). If you ever move to a
// <username>.github.io repo, change this to '/'.
export default defineConfig({
  base: '/CSCI-498E-A-Personal-Website-Project/',
  plugins: [react()],
})
