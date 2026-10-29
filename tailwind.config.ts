import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: "#FAF8F5",
          100: "#F4F0EA",
          200: "#E6DFD3",
        },
        green: {
          primary: "#14221C",
          accent: "#1B2A23",
          light: "#2A3F35",
        },
        brown: {
          primary: "#4A3525",
          accent: "#6E503B",
          light: "#8C694F",
        },
        charcoal: "#0E1110",
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        "spring-overshoot": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ease-in-smooth": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-out-smooth": "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;