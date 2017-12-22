importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [{
        "url": "/app.css",
        "revision": "ebb5da8a6063ffea1600118c093fd563"
    },
    {
        "url": "/app.js",
        "revision": "e6f1ab4f45d524775bba826d4d2f2674"
    },
    {
        "url": "/home.html",
        "revision": "fa747c5cb6d91be0e92fbec252eb4a23"
    },
    {
        "url": "/index.html",
        "revision": "b42958467aaf24fe585e9aac4c9a9fe1"
    },
    {
        "url": "/subpage.css",
        "revision": "e1d5c0a5c39ee7c1835d8032372a76f4"
    },
    {
        "url": "/subpage.html",
        "revision": "e8321025fbca64101e9925693548ed00"
    },
    {
        "url": "/assets",
        "revision": "e8321025fbca64101e9925693548ed00"
    }
];

const workboxSW = new self.WorkboxSW({
    "skipWaiting": true,
    "clientsClaim": true
});

workboxSW.precache(fileManifest);
workboxSW.precache([]);

// Register png files e.g. https://localhost:3000/images/1.png
workboxSW.router.registerRoute(/\.png$/, workboxSW.strategies.networkFirst());

// Register example path e.g. https://localhost:3000/example
workboxSW.router.registerRoute('/example', workboxSW.strategies.staleWhileRevalidate());
