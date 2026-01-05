import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
                silenceDeprecations: ['import'],
            },
        },
    },
    root: resolve(__dirname),
    publicDir: resolve(__dirname, '../../'), // Serve root assets like resources/js
    server: {
        port: 3000,
    },
});
