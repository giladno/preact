import preact from '@preact/preset-vite';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [preact()],
    server: {
        open: true,
        port: 3000,
    },
});
