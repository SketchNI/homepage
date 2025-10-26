import youtube from "./assets/youtube.svg";
import bbc from "./assets/bbc.svg";
import plex from "./assets/plex.svg";
import google from "./assets/google.svg";
import bluesky from "./assets/bluesky.svg";
import github from "./assets/github.svg";
import amazon from "./assets/amazon.svg";
import wikipedia from "./assets/wikipedia.svg";
import steam from "./assets/steam.svg";
import sciencenews from "./assets/sciencenews.webp";
import skynews from "./assets/skynews.png";
import laracasts from "./assets/laracasts.png";
import npm from "./assets/npm.svg";

import outlook from "./assets/outlook.svg";
import gmail from "./assets/gmail.svg";
import rainloop from "./assets/rainloop.png";
import packagist from "./assets/packagist.png";

export let links: Array<object> = [
  {
    name: "BBC News",
    url: "https://bbc.co.uk/news",
    icon: bbc,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/",
    icon: youtube,
  },
  {
    name: "Plex",
    url: "https://plex.jinjo.lan",
    icon: plex,
  },
  {
    name: "Google",
    url: "https://google.co.uk",
    icon: google,
  },
  {
    name: "BlueSky",
    url: "https://deer.social",
    icon: bluesky,
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: github,
  },
  {
    name: "Sky News",
    url: "https://news.sky.com",
    icon: skynews,
  },
  {
    name: "Amazon",
    url: "https://amazon.co.uk",
    icon: amazon,
  },
  {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Main_Page",
    icon: wikipedia,
  },
  {
    name: "Steam",
    url: "https://store.steampowered.com",
    icon: steam,
  },
  {
    name: "Laracasts",
    url: "https://laracasts.com",
    icon: laracasts,
  },
  {
    name: "Science News",
    url: "https://www.sciencenews.org/",
    icon: sciencenews,
  },
];

export let mails: Array<object> = [
  {
    name: "Outlook",
    url: "https://outlook.com",
    icon: outlook,
  },
  {
    name: "GMail",
    url: "https://gmail.com",
    icon: gmail,
  },
  {
    name: "Freeburn",
    url: "https://freeburn.uk",
    icon: rainloop,
  },
  {
    name: "Packagist",
    url: "https://packagist.org",
    icon: packagist,
  },
  {
    name: "NPM",
    url: "https://npmjs.com",
    icon: npm,
  }
];

export let dev_links = [
  { label: "Webmin", href: "https://webmin.jinjo.lan" },
  { label: "Portainer", href: "https://port.jinjo.lan" },
  { label: "Forgejo", href: "https://git.sketchni.uk" },
  { label: "Billing", href: "https://billing.sketchni.uk" },
  { label: "Traq", href: "https://traq.sketchni.uk" },
  { label: "Pelican", href: "https://peli.sketchni.uk" },
  { label: "S3", href: "https://s3w.sketchni.uk/" },
  { label: "Immich", href: "https://img.sketchni.uk/" },
  { label: "Mailpit", href: "https://mailpit.jinjo.lan/" },
];
