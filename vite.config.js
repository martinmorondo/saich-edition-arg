import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separa React y React DOM en su propio chunk
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            // Separa librerías pesadas como Framer Motion
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            // Todo lo demás va a un chunk general de dependencias
            return 'vendor';
          }
        },
      },
    },
  },
});