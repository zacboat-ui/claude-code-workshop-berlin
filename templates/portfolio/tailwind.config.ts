import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f2435",
        paper: "#f0f9ff",
        accent: "#f97316",
        ocean: "#075985",
        wave: "#38bdf8",
        seafoam: "#e0f2fe",
        sand: "#fef9ee",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
