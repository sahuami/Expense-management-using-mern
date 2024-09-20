// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // proxy: 'http:localhost:8080.api.v1', // Backend server URL



// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
   
  },
});

