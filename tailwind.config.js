/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand_color_1: '#0284c7',
                error_color: '#ef4444',
            },
        },
    },
    plugins: [],
};
