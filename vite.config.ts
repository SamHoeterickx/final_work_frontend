import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@modules": path.resolve(__dirname, "./src/modules"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@components": path.resolve(__dirname, "./src/shared/components"),
            "@const": path.resolve(__dirname, "./src/shared/const"),
            "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
            "@styles": path.resolve(__dirname, "./src/shared/styles"),
        }
    },
    plugins: [
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react(),
    ],
})
