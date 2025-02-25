import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        secondary2: "var(--secondary2)",
        textcolor: "var(--text)",
        hilights: "var(--hilights)",
        tertiary: "var(--tertiary)",
        messagetext: "var(--messagetext)"
      },
    },
  },
  plugins: [],
  darkMode: "class"
} satisfies Config;


