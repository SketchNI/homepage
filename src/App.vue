<script setup>
import { links } from "./DefaultLinks.ts";
import { Storage } from "./utilities/storage.ts";

let faves = links;
if (Storage.has("favourites")) {
  faves = JSON.parse(Storage.get("favourites"));
}

let dev_links = [
  { label: "Meilisearch", href: "http://localhost:7700" },
  { label: "Mailpit", href: "http://localhost:8025" },
  { label: "Webmin", href: "https://webmin.umbreon.lan" }
]
</script>

<template>
    <div class="icons max-w-4xl mx-auto">
        <a class="select-none" :title="item.name" v-for="item in faves" :href="item.url">
            <img :src="`${item.icon}`" :alt="item.name" />
            <p>{{ item.name }}</p>
        </a>
    </div>

    <div class="mt-12 max-w-4xl mx-auto">
        <div class="mx-auto px-4 md:px-0">
            <form method="GET" action="https://www.google.com/search">
                <label for="search" class="sr-only">Search Query</label>
                <div class="mt-2 flex rounded-md shadow-md shadow-neutral-400 dark:shadow-black">
                    <div class="relative flex flex-grow items-stretch focus-within:z-10">
                        <input type="text" id="search" class="searchbox" placeholder="Search Google for..."
                               name="q" v-shortkey.once.focus="['/']" />
                    </div>

                    <button class="search-btn" type="submit">Search</button>
                </div>
                <p class="search-help-text">Press <kbd>/</kbd> to start search.</p>
            </form>
        </div>
    </div>

    <div class="footer-wrapper">
        <footer>
            <div>
                <p>Dev Links</p>
                <div class="flex items-center space-x-4">
                    <a v-for="(d, i) in dev_links" :key="i" :href="d.url" v-text="d.label"
                       class="cursor-pointer" />
                </div>
            </div>

            <div class="space-x-4">
                <span>&copy; Denver Freeburn {{ new Date().getFullYear() }}</span>
                <span>-</span>
                <span>Powered by <a href="https://vuejs.org">VueJS</a></span>
                <span>-</span>
                <span>Source code available at <a target="_blank" class="font-mono"
                                                  href="https://github.com/SketchNI/homepage">github.com</a></span>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.footer-wrapper {
    @apply absolute left-4 right-4 bottom-0 top-auto;
}

footer {
    @apply flex justify-between p-4 text-neutral-600 dark:text-neutral-400;
}

.icons {
    @apply grid grid-cols-6 max-w-4xl pt-4 px-4 md:px-0;
}

.icons > a {
    @apply flex flex-col items-center justify-items-center justify-center p-4;
    @apply hover:bg-neutral-400/70;
    @apply dark:hover:bg-neutral-800 hover:border-transparent;
    @apply hover:shadow-md shadow-neutral-800 dark:shadow-black;
    @apply transition duration-150 ease-in;
}

.icons > a > img {
    @apply h-6 md:h-12 mx-auto;
}

.icons > a > p {
    @apply text-xs md:text-base text-neutral-600 dark:text-neutral-400 font-normal mt-1.5 text-center;
}

.searchbox {
    @apply block w-full border-0 py-2.5 px-4 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm;
    @apply text-neutral-800 dark:text-neutral-200 bg-neutral-300 dark:bg-neutral-700;
    @apply ring-neutral-400 dark:ring-neutral-600 placeholder:text-neutral-600 dark:placeholder:text-neutral-400;
    @apply focus:ring-blue-600;
    @apply sm:leading-6 md:text-lg outline-0 outline-none;
    @apply transition duration-150 ease-in;
}

.search-btn {
    @apply bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl px-2 w-24 text-lg py-1;
    @apply hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
    @apply focus-visible:outline-blue-500 font-medium text-white shadow-sm;
    @apply transition duration-150 ease-in;
    text-shadow: 2px 2px 6px #000000;
}

.search-help-text {
    @apply text-xs pt-2 font-medium text-neutral-700 dark:text-neutral-300;
}
</style>
