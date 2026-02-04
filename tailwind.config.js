/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "electric-cyan": "#00DDFF",
        "industrial-after-dark": "#0F172A",
        "neon-purple": "#8458B3",
        "chalk-white": "#F8FAFC"
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 221, 255, 0.35)"
      }
    }
  },
  plugins: []
};
