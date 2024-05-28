<script setup>
import { links, mails } from "./DefaultLinks.ts";

let dev_links = [
  { label: "TypeSense", href: "http://localhost:8108" },
  { label: "Mailpit", href: "http://localhost:8025" },
  { label: "Webmin", href: "https://webmin.umbreon.lan" },
  { label: "Portainer", href: "https://port.umbreon.lan" },
  { label: "Billing", href: "https://billing.sketchni.uk" },
  { label: "Tau", href: "https://tau.umbreon.lan" },
];
</script>

<template>
    <div class="icons max-w-4xl mx-auto">
        <a class="select-none" :title="item.name" v-for="(item, i) in links" :key="i" :href="item.url">
            <img :src="`${item.icon}`" :alt="item.name" />
            <p>{{ item.name }}</p>
        </a>
    </div>

    <div class="my-12 max-w-4xl mx-auto">
        <div class="mx-auto md:px-0">
            <form method="GET" action="https://duckduckgo.com/?t=ffab&ia=web">
                <label for="search" class="sr-only">Search Query</label>
                <div class="mt-2 flex rounded-md shadow-md shadow-neutral-400 dark:shadow-black">
                    <div class="relative flex flex-grow items-stretch focus-within:z-10">
                        <input type="text" id="search" class="searchbox" placeholder="Search DuckDuckGo for..."
                               name="q" autofocus v-shortkey.once.focus="['/']" />
                    </div>

                    <button class="search-btn" type="submit">Search</button>
                </div>
                <p class="search-help-text">Press <kbd>/</kbd> to start search.</p>
            </form>
        </div>
    </div>

    <div class="mail-icons max-w-4xl mx-auto">
        <a class="select-none" :title="mail.name" v-for="(mail, i) in mails" :key="i" :href="mail.url" target="_blank">
            <img :src="`${mail.icon}`" :alt="mail.name" />
            <p>{{ mail.name }}</p>
        </a>
    </div>

    <div class="footer-wrapper">
        <footer>
            <div>
                <p>Dev Links</p>
                <div class="flex items-center space-x-4">
                    <a v-for="(d, i) in dev_links" :key="i" :href="d.href" v-text="d.label" target="_blank"
                       class="cursor-pointer" />
                </div>
            </div>

            <div class="space-x-4">
                <span>&copy; Denver Freeburn {{ new Date().getFullYear() }}</span>
                <span>-</span>
                <span>Source code available at <a target="_blank" class="font-mono"
                                                  href="https://github.com/SketchNI/homepage">github.com</a></span>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.footer-wrapper {
    @apply lg:absolute left-4 right-4 bottom-0 top-auto;
}

footer {
    @apply flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between p-4 text-neutral-600 dark:text-neutral-400;
}

.icons {
    @apply grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-w-4xl pt-4;
}

.mail-icons {
    @apply grid grid-cols-4 max-w-4xl pt-4;
}

.mail-icons > a {
    @apply flex flex-col items-center justify-items-center justify-center p-4;
    @apply hover:bg-neutral-400/70;
    @apply dark:hover:bg-neutral-800 hover:border-transparent;
    @apply hover:shadow-md shadow-neutral-800 dark:shadow-black;
    @apply transition duration-150 ease-in;
}

.mail-icons > a > img {
    @apply h-12 mx-auto;
}

.mail-icons > a > p {
    @apply text-base text-neutral-600 dark:text-neutral-400 font-normal mt-2 text-center;
}

.icons > a {
    @apply flex flex-col items-center justify-items-center justify-center p-4;
    @apply hover:bg-neutral-400/70;
    @apply dark:hover:bg-neutral-800 hover:border-transparent;
    @apply hover:shadow-md shadow-neutral-800 dark:shadow-black;
    @apply transition duration-150 ease-in;
}

.icons > a > img {
    @apply h-12 mx-auto;
}

.icons > a > p {
    @apply text-base text-neutral-600 dark:text-neutral-400 font-normal mt-1.5 text-center;
}

.searchbox {
    @apply block w-full border-0 py-2.5 px-4 ring-1 ring-inset focus:ring-2 focus:ring-inset;
    @apply text-neutral-800 dark:text-neutral-200 bg-neutral-300 dark:bg-neutral-700;
    @apply ring-neutral-400 dark:ring-neutral-600 placeholder:text-neutral-600 dark:placeholder:text-neutral-400;
    @apply focus:ring-blue-600;
    @apply sm:leading-6 text-lg outline-0 outline-none;
    @apply transition duration-150 ease-in;
}

.search-btn {
    @apply bg-gradient-to-br from-yellow-600 to-red-500 hover:from-yellow-600 hover:to-rose-600 px-2 w-24 text-lg py-1;
    @apply hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
    @apply focus-visible:outline-blue-500 font-medium text-white shadow-sm;
    @apply transition duration-150 ease-in;
    text-shadow: 2px 2px 6px #000000;
}

.search-help-text {
    @apply text-xs pt-2 font-medium text-neutral-700 dark:text-neutral-400;
}

kbd {
    @apply border border-gray-600 rounded-md px-1 py-0.5 font-mono text-white bg-gray-800;
}
</style>
