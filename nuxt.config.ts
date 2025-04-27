// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  preset: "node", // important for Node-style apps
  externals: {
    external: [
      ".prisma", // ignore Prisma internals
      "@prisma/client", // don't bundle Prisma
      "process", // don't bundle "process"
    ],
    inline: [],
  },
});
