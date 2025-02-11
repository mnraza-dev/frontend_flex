import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define light mode colors
        lightGrayColor: "rgb(246 247 249 / 1)",
        customCardBg: "rgb(52 58 70 / 1)", // Dark card background
        tealColor: "rgb(43 110 98 / 1)",  // Teal color
        primary: "#000", // Light mode primary text color
        secondary: "rgb(85 85 85)", // Light mode secondary text color
        link: "#000", // Light mode link color

        // Dark mode colors
        "card-dark": "rgb(52 58 70 / 1)", // Dark background for cards
        "primary-dark": "#fff", // Dark mode primary text color
        "link-dark": "#fff", // Dark mode link color
        "secondary-dark": "rgb(150 150 150)", // Dark mode secondary text color
      },
    },
  },
  darkMode: "class", // Enable dark mode by class
  plugins: [],
} satisfies Config;
