//catcing all the pages when offline

const cacheName = "v1";

const cacheAssets = ["index.html", "style.css", "main.js"];

// call install event

self.addEventListener("install", (e) => {
	console.log("service worker installed");

	e.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => {
				console.log("service worker : caching files");
				cache.addAll(cacheAssets);
			})
			.then(() => self.skipWaiting()),
	);
});

// activate the event

self.addEventListener("activate", (e) => {
	console.log("service worker activated");
});

// call fetch event when we are offline

self.addEventListener("fetch", (e) => {
	console.log("service worker fetching");

	e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
