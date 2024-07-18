import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#2d7e38",
        background: "#F5F5F5",
        secondary: "#333333",
        tertiary: "#cccccc",
      },
      fontFamily: {
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
} satisfies Config;
