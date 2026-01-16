import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tokuyama: {
          red: "#B11226",
        },
      },
    },
  },
  plugins: [],
};

export default config;
