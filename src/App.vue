<script setup>
import { links, mails } from "./DefaultLinks.ts";

let dev_links = [
    { label: "Mailpit", href: "https://mailpit.jinjo.lan" },
    { label: "Webmin", href: "https://webmin.jinjo.lan" },
    { label: "Portainer", href: "https://port.jinjo.lan" },
    { label: "Dashboard", href: "https://dash.jinjo.lan" },
    { label: "Sentry", href: "https://sentry.jinjo.lan" },
    { label: "Billing", href: "https://billing.sketchni.uk" },
    { label: "Monopoly", href: "http://monopoly.jinjo.lan" },
];
</script>

<template>
    <div class="mx-auto max-w-4xl icons">
        <a
            class="select-none"
            :title="item.name"
            v-for="(item, i) in links"
            :key="i"
            :href="item.url"
        >
            <img :src="`${item.icon}`" :alt="item.name" />
            <p>{{ item.name }}</p>
        </a>
    </div>

    <div class="mx-auto my-12 max-w-4xl">
        <div class="mx-auto sm:px-0 md:px-6">
            <form method="GET" action="https://google.com/search?t=ffab&ia=web">
                <label for="search" class="sr-only">Search Query</label>
                <div class="flex mt-2 rounded-full shadow-md shadow-black">
                    <div class="flex relative flex-grow items-stretch focus-within:z-10">
                        <input
                            type="text"
                            id="search"
                            class="searchbox"
                            placeholder="Search DuckDuckGo for..."
                            name="q"
                            autofocus
                            v-shortkey.once.focus="['/']"
                        />
                    </div>

                    <button class="search-btn" type="submit">Search</button>
                </div>
                <p class="search-help-text">
                    Press <kbd>/</kbd> to start search.
                </p>
            </form>
        </div>
    </div>

    <div class="mx-auto max-w-4xl mail-icons">
        <a
            class="select-none"
            :title="mail.name"
            v-for="(mail, i) in mails"
            :key="i"
            :href="mail.url"
            target="_blank"
        >
            <img :src="`${mail.icon}`" :class="mail.name" :alt="mail.name" />
            <p>{{ mail.name }}</p>
        </a>
    </div>

    <div class="footer-wrapper">
        <footer>
            <div class="mt-6 text-sm lg:mt-0">
                <p>Dev Links</p>
                <div class="flex items-center space-x-4">
                    <a
                        v-for="(d, i) in dev_links"
                        :key="i"
                        :href="d.href"
                        v-text="d.label"
                        target="_blank"
                        class="cursor-pointer"
                    />
                </div>
            </div>

            <div class="space-x-4">
                <span
                    >&copy; Denver Freeburn {{ new Date().getFullYear() }}</span
                >
            </div>
        </footer>
    </div>
</template>

<style scoped lang="postcss">
.footer-wrapper {
    @apply lg:absolute left-4 right-4 bottom-0 top-auto;
}

footer {
    @apply flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between p-4 text-gray-400 items-end;
}

.icons {
    @apply grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-w-4xl lg:pt-4;
}

.mail-icons {
    @apply grid grid-cols-3 max-w-4xl pt-4;
}

.mail-icons > a {
    @apply flex flex-col items-center justify-items-center justify-around p-4 rounded-xl;
    @apply bg-gradient-to-br hover:from-blue-700/60 hover:to-red-700/60 border-none;
    @apply transition duration-150 ease-in;
}

.mail-icons > a > img {
    @apply h-12 mx-auto;
}

.mail-icons > a > p {
    @apply text-base text-gray-400 font-normal mt-2 text-center;
}

.icons > a {
    @apply flex flex-col items-center justify-items-center justify-center p-4 rounded-xl;
    @apply bg-gradient-to-br hover:from-blue-700/60 hover:to-red-700/60 border-none;
    @apply transition duration-150 ease-in;
}

.icons > a > img {
    @apply h-12 mx-auto;
}

.icons > a > p {
    @apply text-base text-gray-400 font-normal mt-1.5 text-center;
}

.searchbox {
    @apply block w-full border-2 border-r-0 border-gray-600 py-2.5 px-4 md:rounded-l-full;
    @apply text-gray-200 bg-gray-800;
    @apply ring-gray-600 placeholder:text-neutral-400;
    @apply focus:outline-none focus:border-blue-500;
    @apply sm:leading-6 text-lg outline-0 outline-none;
    @apply transition duration-150 ease-in;
}

.search-btn {
    @apply font-medium text-white from-blue-500 to-red-500 md:rounded-r-full px-2 w-24 text-lg;
    @apply bg-gradient-to-br hover:from-blue-700 hover:to-red-700;
    @apply focus-visible:outline-none border-none;
    @apply transition duration-150 ease-in;
    text-shadow: 2px 2px 6px #000000;
}

.search-help-text {
    @apply text-xs pt-2 font-medium text-gray-400;
}

kbd {
    @apply border border-gray-600 rounded-md px-1 py-0.5 font-mono text-white bg-gray-800;
}
</style>
