import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#2d7e38",
        background: {
          100: "#f5f5f5",
          200: "#ebebeb",
          300: "#777777",
        },
        secondary: "#333333",
        tertiary: "#cccccc",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        poppins: "var(--font-poppins)",
        "ibm-plex-sans": "var(--font-ibm-plex-sans)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
} satisfies Config;

// #ebebeb #F5F5F5
