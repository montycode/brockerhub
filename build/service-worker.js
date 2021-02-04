/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-0c7afc7d'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  workbox.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/app.bundle.js",
    "revision": "569b9786aaad1f161f102cde25726e87"
  }, {
    "url": "/assets/17152b4656c333517e9dde88d51316c8.png",
    "revision": "89a435f05fd663f55a800aa01de43fd3"
  }, {
    "url": "/assets/5980655b020b66e411c5ffaaeaf71bc9.png",
    "revision": "5a720330ccd6af94db9b90dad3160473"
  }, {
    "url": "/assets/698d239f7b0c4fa1b25d1aaaae1dc745.gif",
    "revision": "33a752211d05af6684e26ec63c2ed965"
  }, {
    "url": "/assets/939c68e755cf14fab3471f41ba659ee2.gif",
    "revision": "a770b6797b68e3f8920e473eb824bac0"
  }, {
    "url": "/assets/d01dbb13a7d4826873f42499d30c1a08.png",
    "revision": "ade0bae1da81f9b7b92364de0f3c481e"
  }, {
    "url": "/favicon.ico",
    "revision": "555a9cb9eb5f38bc7452689fa86de29a"
  }, {
    "url": "/fonts/rw-widgets.eot",
    "revision": "bc7c4a59f924cf037aad6e1f9edba366"
  }, {
    "url": "/fonts/rw-widgets.svg",
    "revision": "792dcd18baf5f544aabcad1883d673c2"
  }, {
    "url": "/fonts/rw-widgets.ttf",
    "revision": "eceddf474df95d8d4a7e316668c3be85"
  }, {
    "url": "/fonts/rw-widgets.woff",
    "revision": "12f0820c451bdc75f4d1ef97732bf6e8"
  }, {
    "url": "/icon_1024x1024.a5d875cbad2b4312fd82905cdc2f2fa8.png",
    "revision": "a5d875cbad2b4312fd82905cdc2f2fa8"
  }, {
    "url": "/icons/android/icon_144x144.267ad6640a3a042f4339e96457ec6053.png",
    "revision": "267ad6640a3a042f4339e96457ec6053"
  }, {
    "url": "/icons/android/icon_192x192.64522786dff6e5d50e32124b1957713c.png",
    "revision": "64522786dff6e5d50e32124b1957713c"
  }, {
    "url": "/icons/android/icon_36x36.e972ab91573c45db94ab4aaddc8fc3b4.png",
    "revision": "e972ab91573c45db94ab4aaddc8fc3b4"
  }, {
    "url": "/icons/android/icon_48x48.1d548bd059ceaebf7ba204c345a57442.png",
    "revision": "1d548bd059ceaebf7ba204c345a57442"
  }, {
    "url": "/icons/android/icon_512x512.4ca807abd493f8d7575b249348f20994.png",
    "revision": "4ca807abd493f8d7575b249348f20994"
  }, {
    "url": "/icons/android/icon_72x72.976b44191b402078e8e24cd57a840c6e.png",
    "revision": "976b44191b402078e8e24cd57a840c6e"
  }, {
    "url": "/icons/android/icon_96x96.39eaa644befb2b9cefc2f0b0ff9d6240.png",
    "revision": "39eaa644befb2b9cefc2f0b0ff9d6240"
  }, {
    "url": "/icons/ios/icon_1024x1024.a5d875cbad2b4312fd82905cdc2f2fa8.png",
    "revision": "a5d875cbad2b4312fd82905cdc2f2fa8"
  }, {
    "url": "/icons/ios/icon_120x120.1b06d9cc19c290b8fbddc8e5898d5f2b.png",
    "revision": "1b06d9cc19c290b8fbddc8e5898d5f2b"
  }, {
    "url": "/icons/ios/icon_152x152.aad9c946c509afeb4e9b312f0c7a3c27.png",
    "revision": "aad9c946c509afeb4e9b312f0c7a3c27"
  }, {
    "url": "/icons/ios/icon_167x167.5701e9b26c886f3277b84a14b1764de1.png",
    "revision": "5701e9b26c886f3277b84a14b1764de1"
  }, {
    "url": "/icons/ios/icon_180x180.7f9c4c2ad6fa953417d7255ecd54fa4b.png",
    "revision": "7f9c4c2ad6fa953417d7255ecd54fa4b"
  }, {
    "url": "/index.html",
    "revision": "626c85e7611fd8ae193bb2886da79ac5"
  }, {
    "url": "/manifest.b29ffcc97af476fd03e1a1d33743a7a7.json",
    "revision": "b29ffcc97af476fd03e1a1d33743a7a7"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
