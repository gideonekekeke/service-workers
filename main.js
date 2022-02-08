// first is to make sure service worker are supported
// navigator is basicall the browser object

if ("serviceWorker" in navigator) {
	// we want to render it when the window loads and

	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("./sw_catched_pages.js")

			.then((reg) => console.log("service worker registered"))
			.catch((err) => console.log("service worker error"));
	});
}
