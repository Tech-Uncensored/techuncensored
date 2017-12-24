/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */


importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js", "precache-manifest.82195349382cc78c15d2e0fa630405da.js");





workbox.skipWaiting();
workbox.clientsClaim();


/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [{
    "url": "app.css",
    "revision": "ebb5da8a6063ffea1600118c093fd563"
  },
  {
    "url": "assets/backdrop1.jpg",
    "revision": "88a6844ef61499d3601d01fa92a24c36"
  },
  {
    "url": "assets/banner-mockup.jpg",
    "revision": "616ae8d4248d4ea3ce2c8c9d5b79bf59"
  },
  {
    "url": "assets/education.jpg",
    "revision": "d62d012faf265aaed8ad5a7f36c627bc"
  },
  {
    "url": "assets/email.png",
    "revision": "f4c4a3e689dff77fabdbc346805ba0af"
  },
  {
    "url": "assets/fb.png",
    "revision": "0a66c132ed84beb3f612412924536819"
  },
  {
    "url": "assets/gh.png",
    "revision": "0a71388310d9971750666fb9095c26a9"
  },
  {
    "url": "assets/header-bg.jpg",
    "revision": "7259f44dfcb7d371169f4a4d13d42b1b"
  },
  {
    "url": "assets/iot_banner2.png",
    "revision": "2d83cd74ac9cb14fd600086789ea75f2"
  },
  {
    "url": "assets/rwd4png.png",
    "revision": "51a70d3dbe9b42317cadf8729676f8f8"
  },
  {
    "url": "assets/software.jpg",
    "revision": "2a348e1d712af8b0886683e8ac532813"
  },
  {
    "url": "assets/tech_uncensored_logo_bg.png",
    "revision": "e7c3d44f99817a8e306ae3571479b1c6"
  },
  {
    "url": "assets/tw.png",
    "revision": "ee12f4e29259546b9e791ac9c72b75ee"
  },
  {
    "url": "assets/wire.jpg",
    "revision": "b3e655484a62416b91738c0ade763c62"
  },
  {
    "url": "assets/yt.png",
    "revision": "9568eb002251b9631e0459f3d4fc752f"
  },
  {
    "url": "fav.png",
    "revision": "7be325555bfee7c67ea2da73cf7ed56e"
  },
  {
    "url": "home.html",
    "revision": "fa747c5cb6d91be0e92fbec252eb4a23"
  },
  {
    "url": "index.html",
    "revision": "fe28ca42a5b9d3cef9924817ba4d9c1c"
  },
  {
    "url": "subpage.css",
    "revision": "e1d5c0a5c39ee7c1835d8032372a76f4"
  },
  {
    "url": "subpage.html",
    "revision": "e8321025fbca64101e9925693548ed00"
  }
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
