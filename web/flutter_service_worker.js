'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cc16aff26aa21e408ee5909e8c5d29f1",
"assets/AssetManifest.bin.json": "ac2d584c3b07a6fe58bf0ddf5b7fc3ed",
"assets/AssetManifest.json": "885ac80e2e18f59aba63864aeaa18caa",
"assets/assets/fonts/IndieFlower-Regular.ttf": "8a33aae7305b37411d775d6617e80aca",
"assets/assets/images/Academys%2520Genius%2520Swordmaster.jpg": "c681e34d71ecf03ec97d11d78770bbe5",
"assets/assets/images/Academys%2520Undercover%2520Professor.jpg": "6882e396ddc490e09cadb2791b30948c",
"assets/assets/images/b.png": "272c6c5c2f081ab279555024dfb81fc0",
"assets/assets/images/Devil%2520Returns%2520To%2520School%2520Days.jpg": "e8aaa08e01a2d4e4db46e041e482376a",
"assets/assets/images/Duke%2520Pendragon.jpg": "9fea0be874a1f2f442972c5c1735fba9",
"assets/assets/images/Genius%2520of%2520the%2520Unique%2520Lineage.jpg": "3ef268f5ac2cb0984d6d818b1713cd8e",
"assets/assets/images/Helmut_%2520The%2520Forsaken%2520Child.jpg": "e9c2399cbda0011dea795eac15a217b4",
"assets/assets/images/Hoarding%2520in%2520Hell.jpg": "423b530eb2de6dfe3b25e9f26f155d3d",
"assets/assets/images/I%2520Killed%2520an%2520Academy%2520Player.jpg": "eaa0ae08072d1fb6550b259024c30a37",
"assets/assets/images/Killer%2520Pietro.jpg": "16d7e11593931adaf0aff7cee89da3ef",
"assets/assets/images/Omniscient%2520Readers%2520Viewpoint.jpg": "2f085951a17cd5327b44a5288b6d3d99",
"assets/assets/images/Pick%2520Me%2520Up,%2520Infinite%2520Gacha.jpg": "10ba8e76323d2f2ce854d0bab8b01fcb",
"assets/assets/images/Reformation%2520of%2520the%2520Deadbeat%2520Noble.jpg": "7368979fa733849ee57f12c3af1bc633",
"assets/assets/images/Regressing%2520with%2520the%2520Kings%2520Power.jpg": "01121b797d0b123b566032e67fead845",
"assets/assets/images/Relife%2520Player.jpg": "7da51637f16e1d58d163af02ebf4491a",
"assets/assets/images/Return%2520of%2520the%25208th%2520Class%2520Magician.jpg": "80723a5345ae982503cd80421657d1bf",
"assets/assets/images/Return%2520of%2520the%2520Bloodthirsty%2520Police.jpg": "7993567f2a2b6dd56da3700991c9bcbb",
"assets/assets/images/Secret%2520Class.jpg": "509e82fbfcffa88271283343f114f4c2",
"assets/assets/images/Solo%2520Leveling.jpg": "b3f51b62222a0a0d2f4e68df77665dbd",
"assets/assets/images/Solo%2520Max-Level%2520Newbie.jpg": "5200aad9ab88af10131c33a15f407f9a",
"assets/assets/images/Star-Embracing%2520Swordmaster.jpg": "690dbb2641dc10ae980ccc74579874a1",
"assets/assets/images/Summer%2520Taste.jpg": "403bdce0f4fd803b422b6fe3ec9abb65",
"assets/assets/images/The%2520Beginning%2520After%2520The%2520End.jpg": "e13de8bd55029a8b1d74ec7092453ddc",
"assets/assets/images/The%2520Genius%2520Assassin%2520Who%2520Takes%2520it%2520All.jpg": "071f51374db896b6b675f9228594aac6",
"assets/assets/images/The%2520Hero%2520Returns.jpg": "bb5d6c10cebc99649f2f81e97bab5041",
"assets/assets/images/The%2520Knight%2520King%2520Who%2520Returned%2520with%2520a%2520God.jpg": "c61b3f556c36c18e14cc9b79e82f681e",
"assets/assets/images/The%2520Live.jpg": "419cc48e18463b9baafd9d6ff75d11a6",
"assets/assets/images/The%2520Max-Level%2520Players%2520100th%2520Regression.jpg": "dd892c82413d3b30728ec1213c7a3763",
"assets/FontManifest.json": "0e63ed24d0d539ffd67f6bd814ba7123",
"assets/fonts/MaterialIcons-Regular.otf": "d7793e25d1a39dd2ac31f43bff6400e3",
"assets/NOTICES": "aece5866b79f28c46a3e5fc5d0cceb64",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "f64bdb5d938914b4fac144c2c3aa1c94",
"canvaskit/canvaskit.wasm": "fcab7f9681c8a50daadbc3c242319078",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "907d264290252a44de8422c5898c4158",
"canvaskit/chromium/canvaskit.wasm": "f6d2a460565f3f70c54aa207ce502b69",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "01a3e940f2ae353a6097a61be6efc01f",
"canvaskit/skwasm.wasm": "2eba7de284f5b90a5710d2fc922efedd",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1bb740642a5a894039320cb48c3d488d",
"/": "1bb740642a5a894039320cb48c3d488d",
"main.dart.js": "2b4eb509b2fe2b7c906aa3939a108404",
"manifest.json": "4c49c4fe0abfa17c75cf84a65eb76573",
"version.json": "0c57e397d77bf89c20ee45727bd59040"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
