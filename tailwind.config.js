/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                1440: '1440px',
            },
            backgroundColor: {
                primary: '#F5F5F5F5',
                secondary1: '#1266dd',
                secondary2: '#f73859',
            },
        },
    },
    plugins: [],
};
