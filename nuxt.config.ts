// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
  ],
  tailwindcss: {
    configPath: "./tailwind.config",
    cssPath: "./assets/css/tailwind.css",
    exposeConfig: true,
    editorSupport: true,
  },
  googleFonts: {
    families: {
      Lato: true,
    },
  },

  css: ["./assets/css/tailwind.css"],
})