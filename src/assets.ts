// Turns a filename in public/ into a URL that works on GitHub Pages.
// The site lives under /CSCI-498E-A-Personal-Website-Project/, so a plain
// '/images/x.png' would 404. BASE_URL comes from `base` in vite.config.ts.
export const imageUrl = (file: string) => `${import.meta.env.BASE_URL}images/${file}`
export const publicUrl = (file: string) => `${import.meta.env.BASE_URL}${file}`
