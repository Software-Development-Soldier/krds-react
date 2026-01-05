import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            include: ['src/UIKit'],
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
                silenceDeprecations: ['import'],
            },
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/UIKit/index.ts'),
            name: 'KRDSReact',
            fileName: (format) => `krds-react.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
