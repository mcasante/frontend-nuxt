// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "light",
  },
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.BASE_API_URL,
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
