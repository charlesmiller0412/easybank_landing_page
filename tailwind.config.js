/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        lineHeight: { normal: "2.5rem", loose: "4.7rem" },
        fontSize: { base: "1.6rem", xl: "4.0rem" },
        screens: {
            xs: "375px",
            ...defaultTheme.screens,
        },
        extend: {
            screens: {
                xl: "1440px",
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
