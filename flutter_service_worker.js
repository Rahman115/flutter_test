'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "994aea3201543b529af3f30d4bfc8c2f",
".git/config": "f559f90595bed09106e9b466b74aee47",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "847351189cb0565e4576ef56d0cff0a3",
".git/HEAD": "7143352ba35e66dbfc470278560ad768",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "fe699596ff811a9d77bd8a289b1352c7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8cfb861a68c2379716b999f8c8a0a13b",
".git/logs/refs/heads/cloud": "59026efd26778cb57193c7c9fc26ddcc",
".git/logs/refs/heads/master": "507002cf664674a8396f81c78cdcb950",
".git/logs/refs/remotes/origin/cloud": "b5727b275862f7ae63addbf025c20ebc",
".git/logs/refs/remotes/origin/master": "d1883ba1edf1585995811a71e8951bcb",
".git/logs/refs/remotes/origin/member": "f277b987a5b8dfc9f8b337789e54d6ed",
".git/objects/01/1d42550ee10f50ec6fdc3cd9a19120ce8379f3": "1716d3a7c220bf080554419abd7a712d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/272b8d30d4e80908b1792fb22ed4f484edd251": "c530974dd0880ef08d3cf04dabbc89d4",
".git/objects/07/55741fc9aca250667a2ce0f2ff34c36239fb7e": "f335372b965ddd3be82037183a99bed1",
".git/objects/08/608a6166b2bb1a59788bdae2d8e70b184148a9": "a56323cb7b2e0c813a97a6b7f95dcd87",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/759ad1126e80a39c1060c36a54c6b44553cde8": "dbaa8bb30a1b79836b1e5d3994acfe65",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/19/5540f718e82469656056f674b9f7004164c737": "d47bd633b946889e35e5d0a8c759e016",
".git/objects/1a/f3cf41757b89ac0625774b62def66a913a2d24": "22d5c01500d7c4f0d834cf3fcb1f7287",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/31/26c114e0fb8bba39047179cc8b808c7de57fc6": "153700269c3617e8d8926c112ef9fce1",
".git/objects/49/cf667db7f58e9a82ca4f2e630e7871ee0dea94": "23c5ea52c29852d039487ed786e667cb",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/589f77b146fec5cd3433387b12972436cb0f70": "3876534d191243b87d82379157ba13db",
".git/objects/50/4e58fbb1f0cb9b65338e4a0fb8034751ef82f8": "dec9b72e10cc3588e52b4f8ace099967",
".git/objects/56/410f498eaaf89536b4e6176cedb94f1728929b": "7259a77b2c10c81ceadf15a1c072b644",
".git/objects/56/9855c91504fed07c7e4172e6bb46a69411f1d9": "a636170f0aa62d06b28331eade23bf86",
".git/objects/58/657c2becd4447f883c4f4a5fc9f4c0c10f65bb": "b0dc18804f6994aea82e283c4593bb1f",
".git/objects/6b/77a2eebc2fd07d52e0bfece9ce5bf90e5bc87e": "5f8fdd639bafd435035b248f496194a1",
".git/objects/72/06f3e8cab4f9c0bd6d7964f9360b21cbdb5421": "12b6878145d8c9a5dc88e4c2c965f949",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/83/b11440fcb236c44e22058bb06c4bf46a4ac9c0": "8347533d15ad71aa5e7cc2e4250dec0c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/e6a127a04c442e5e14538c702e25c52d200852": "4d328aedca97f7f2a7a6bf8eb01dfa06",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a6/efaf724aa963db0e97a6a99e4c736a4dff8593": "42107ec46f55bb3c3e336c87b08ed8cb",
".git/objects/a7/e9b9859266660ca590e37b326e0f933ca8bc4d": "df79cdb7940f2732187d571fbcc9e7bb",
".git/objects/b5/55a665b7f1e3196cb45c344b3287adb436ba59": "3930e2a9276b81ae42171462d5b21e9a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c7/9732941b87d7e5783689ffee07198c50f15608": "cdb1784582f7f3f87d88bfc4b0eda52f",
".git/objects/ca/65c44bdf8f5b3c5bcd7fee838a1c311aa22fab": "59eb24d2dbab2c48ac2c37349f897c73",
".git/objects/cc/c70b5d63594580863fe3fe64cf9ba1ce499493": "10bd9faada4bd32045d796c4af726ae9",
".git/objects/d0/a5912947ceb27505c2661b95b18352688a4b73": "5c7526ce1c2c2423ec7c6459cc90b530",
".git/objects/da/b4cbbc077b3ee86efce372fa78797752d35126": "60808ddafced33c37bbcf10ccd5a8d2f",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/ed/34a045982ae48a12f8caa0be581462e971a13f": "5bbf93ae3d66d89f86530a4a57e8b8bf",
".git/objects/ee/3a517a51ecabf45a27aa921c78205b119d67a8": "08889e7371ec6890e7d5ba50cae32456",
".git/objects/ee/5c701ef8a3fbc3f53833536ff886a99c7c12a4": "2d263224afceef9dc3793ec9398e4010",
".git/objects/f2/f83638ccb0a50e8aaf35fe5282a410e8f9deac": "9b5fc833e484bd0f5500c392892c9340",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "a3486daf2e78247b29dc33666c9fe4c6",
".git/refs/heads/cloud": "21a5447a0b60ea4a7441d32782dbe39c",
".git/refs/heads/master": "a3486daf2e78247b29dc33666c9fe4c6",
".git/refs/remotes/origin/cloud": "21a5447a0b60ea4a7441d32782dbe39c",
".git/refs/remotes/origin/master": "42f7fb9799b1620ca25dd3241eb4fbaf",
".git/refs/remotes/origin/member": "42f7fb9799b1620ca25dd3241eb4fbaf",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/NOTICES": "53597e0b7f3e4bbe237939e3a037493c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1aefb48f48d4ce9baa2369b5be8fc464",
"/": "1aefb48f48d4ce9baa2369b5be8fc464",
"main.dart.js": "06a13a2bfe16d2523ebdb74af0fb48c8",
"manifest.json": "b3e4599c82e93482449c68dd9fde72ad",
"README.md": "edd1e63c3a4dfb53fb33370284a5dd1c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
