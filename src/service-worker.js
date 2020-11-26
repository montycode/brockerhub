const reactAppRewireWorkbox = require("react-app-rewire-workbox")

self.__precacheManifest = [].concat(self.__precacheManifest || [])
reactAppRewireWorkbox.precaching.suppressWarning()
reactAppRewireWorkbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// App shell
workbox.routing.registerNavigationRoute(
    workbox.precaching.getCacheKeyForURL('./index.html')
  );