const CACHE_NAME = 'admin-manager-cache-v1';
const urlsToCache = [
  '/',
  '/img/logo.png',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(urlsToCache.map((url) => cache.add(url)));
    }).catch((error) => {
      console.error('Error al precachear recursos:', error);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  const requestMethod = event.request.method;

  if (['GET', 'PUT', 'DELETE'].includes(requestMethod)) {
    event.respondWith(
      fetch(event.request).catch((error) => {
        return new Response('Error al cargar el recurso.', { status: 404 });
      })
    );
  } else if (requestMethod === 'POST') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.ok && !response.redirected) {
            const clonedResponse = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clonedResponse));
          }
          return response;
        })
        .catch((error) => {
          return new Response('Error al procesar la solicitud POST.', { status: 500 });
        })
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});