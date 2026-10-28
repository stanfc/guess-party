// CI injects the commit SHA. Updates activate after all existing game tabs close,
// so a running round always uses one consistent build.
const CACHE_PREFIX = 'guess-party-';
const CACHE_NAME = `${CACHE_PREFIX}__BUILD_ID__`;
const APP_FILES = [
  './', './index.html', './style.css', './app.js', './game.js', './decks.js',
  './catalog.js', './pwa.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES.map(path => new Request(path, { cache: 'reload' })))));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const scope = new URL(self.registration.scope);
  if (event.request.method !== 'GET' || url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  const appPaths = APP_FILES.map(path => new URL(path, scope).pathname);
  if (!appPaths.includes(url.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    return await cache.match(event.request, { ignoreSearch: true }) || fetch(event.request);
  })());
});
