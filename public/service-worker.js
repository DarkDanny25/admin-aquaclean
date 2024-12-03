const CACHE_NAME = 'admin-manager-cache-v1';
const urlsToCache = [ 
  '/img/logo.png', 
  '/manifest.json', 
  '/icon-192x192.png', 
  '/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        urlsToCache.map((url) => {
          return fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Error al obtener el recurso: ${url}`);
              }
              return cache.put(url, response);
            })
            .catch((error) => {
              console.error(`Fallo al intentar almacenar en caché ${url}:`, error);
            });
        })
      );
    }).catch((error) => {
      console.error('Error al abrir el caché:', error);
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

  if (['GET', 'POST', 'PUT', 'DELETE'].includes(requestMethod)) {
    event.respondWith(
      fetch(event.request)
        .catch((error) => {
          console.error('Error al procesar la solicitud:', error);
          return new Response('Error al cargar el recurso.', { status: 404 });
        })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      }).catch((error) => {
        console.error('Error al hacer fetch del recurso:', error);
        return new Response('Error al cargar el recurso.', { status: 404 });
      })
    );
  }
});