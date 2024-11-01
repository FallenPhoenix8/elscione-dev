import type { Config } from "tailwindcss"
import fluid, { extract, screens, fontSize } from "fluid-tailwind"

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        "background-active": "var(--background-color-active)",
        "background-secondary": "var(--background-color-secondary)",
        text: "var(--text-color)",
        "text-secondary": "var(--text-color-secondary)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      borderRadius: {
        radius: "var(--item-radius)",
      },
      margin: {
        section: "var(--margin-section",
      },
    },
    screens,
    fontSize,
  },
  content: {
    files: [
      "~/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./plugins/**/*.{js,ts,mjs}",
      "./composables/**/*.{js,ts,mjs}",
      "./utils/**/*.{js,ts,mjs}",
      "./{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "./{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "./app.config.{js,ts,mjs}",
      "./app/spa-loading-template.html",
    ],
    extract,
  },
  plugins: [
    fluid({
      checkSC144: false,
    }),
  ],
}
