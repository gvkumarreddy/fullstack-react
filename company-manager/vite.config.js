import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// npm install tailwindcss @tailwindcss/vite
//@import "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // New line
  ],
  server: {
    port: 4000,
  },
})
