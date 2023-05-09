import path from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.join(__dirname, 'src/components'),
      lib: path.join(__dirname, 'src/lib'),
      pages: path.join(__dirname, 'src/pages'),
      styles: path.join(__dirname, 'src/styles'),
      test: path.join(__dirname, 'src/test'),
    },
  },
  test: {
    coverage: {
      reporter: ['text', 'json-summary', 'json', 'html'],
    },
    environment: 'jsdom',
    exclude: ['**/*.spec.*', '**/node_modules/**', '**/dist/**', '**/.{idea,git,cache,output,temp}/**'],
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
})
