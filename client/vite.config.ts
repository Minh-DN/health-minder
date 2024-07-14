import path from 'path';

import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

// Load environment variables from .env.development if in development mode
if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '.env.development' });
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
});
