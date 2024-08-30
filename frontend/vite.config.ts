import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Use polling instead of relying on filesystem events
      interval: 1000,    // Interval for polling in milliseconds
    },
    host: '0.0.0.0',     // Ensures the server is accessible from the Docker container
    port: 5173,          // Matches the port exposed in your Dockerfile
    strictPort: true,    // Fail if the port is already in use
  },
})
