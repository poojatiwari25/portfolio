/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // other paths to your components and pages
  ],
  theme: {
    extend: {
      fontSize: {
        base: '18px', // Set a larger base font size globally
        lg: '20px',   // Optional: Adjust larger font sizes
        xl: '24px',   // Optional: For extra-large text
      },
    },
  },
  plugins: [],
};
