// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo", "@nuxtjs/turnstile"],
  css: ["@/assets/index.css"],
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  turnstile: {
    siteKey: "0x4AAAAAAAUBxBNAPgRBo5hj",
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://my-portfolio-cry.pages.dev",
      },
    },
  },
  app: {
    head: {
      title: "Milind Ranjan Portfolio",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "Milind's portfolio website showcasing Milind’s work",
        },
        {
          name: "keywords",
          content: "portfolio, website, developer, programmer",
        },
      ],
    },
  },
});