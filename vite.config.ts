// vite.config.js
import svgLoader from 'vite-svg-loader'

export default {
    build: {
        target: 'esnext',
    },
    plugins: [svgLoader()]
}