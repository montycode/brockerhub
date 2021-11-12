const reactAppRewireWorkbox = require("react-app-rewire-workbox")

self.__precacheManifest = [].concat(self.__precacheManifest || [])
reactAppRewireWorkbox.precaching.suppressWarning()
reactAppRewireWorkbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// App shell
workbox.routing.registerNavigationRoute(
    workbox.precaching.getCacheKeyForURL("/")
);

workbox.routing.registerRoute(/^https?:\/\/api.brokerhub.mx\/api\/.*/,
    workbox.strategies.staleWhileRevalidate(), 'GET');
  
workbox.registerRoute(/^https?.*/,
    workbox.strategies.networkFirst(), 'GET');

workbox.routing.registerRoute(
    /\/assets\//,
    new workbox.strategies.CacheFirst({
        cacheName: 'assets-cache',
        plugins: [
        new workbox.expiration.Plugin({
            maxAgeSeconds: 7 * 24 * 60 * 60,
            maxEntries: 20
        })
        ]
    })
);