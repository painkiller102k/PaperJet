const CACHE_NAME = "paperjet-cache-v1";

const urlsToCache = [
    "./",
    "./index.html",
    "./style.css",
    "./main.js",
    "./manifest.json",

    "./pildid/main.jpeg",
    "./pildid/main_2.jpeg",
    "./pildid/lennukid.jpeg",

    "./pildid/paperjet_1.jpeg",
    "./pildid/paperjet_11.jpeg",
    "./pildid/paperjet_4.jpeg",
    "./pildid/paperjet_44.jpeg",

    "./pildid/icon.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});