// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import { defineNuxtConfig } from "nuxt/config";
// import { NuxtPage } from "nuxt/schema";

export default defineNuxtConfig({
    ssr: false,
    css: ["news-site-css/dist/variables.css", "news-site-css/dist/global.css", "news-site-css/dist/a11y.css", "news-site-css/dist/icons.css", "news-site-css/dist/text.css"],
    components: ["~/components", "~/components/assets", "~/components/atoms", "~/components/molecules"],
    /* hooks: {
        "pages:extend"(pages: NuxtPage[]) {
            for (const name of ["home", "us", "world", "politics", "business", "opinion", "health"]) {
                pages.push({
                    name,
                    path: name === "home" ? "/" : `/${name}`,
                    file: "~/components/molecules/Page.vue",
                });
            }
        },
    }, */
    nitro: {
        prerender: {
            crawlLinks: false
        },
        output: {
            publicDir: path.join(__dirname, "dist"),
        },
    },
    app: {
        head: {
            title: "The Daily Broadcast",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                {
                    hid: "description",
                    name: "description",
                    content: "A news site developed with Nuxt.",
                },
            ],
        },
        baseURL: "./"
    },
    $production: {
        app: {
            baseURL: "/resources/tentative/newssite/news-nuxt/dist/",
        },
    },
});
