/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            xl: "1440px",
        },
        extend: {
            screens: {
                xs: "375px",
            },
            colors: {
                "dark-blue": "hsl(233, 26%, 24%)",
                "lime-green": "hsl(136, 65%, 51%)",
                "bright-cyan": "hsl(192, 70%, 51%)",
                "gray-blue": "hsl(233, 8%, 62%)",
                "light-gray-blue": "hsl(220, 16%, 96%)",
                "light-gray": "hsl(0, 0%, 98%)",
                "off-white": "hsl(0, 0%, 100%)",
            },
        },
    },
    plugins: [],
};
