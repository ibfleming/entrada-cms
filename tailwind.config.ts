import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
    colors: {
      "dark-bg": "#424242",
      "light-font": "#FAFAFA",
    },
  },
  plugins: [],
} satisfies Config;
