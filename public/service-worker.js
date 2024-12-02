const CACHE_NAME = 'admin-manager-cache-v1';
const urlsToCache = [
  '/',
  '/img/logo.png',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  // En la instalación, no agregamos recursos a la caché
  // Simplemente dejamos que pase sin añadir nada a la caché
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);  // Borrar cualquier caché existente
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Siempre realizar la solicitud desde la red, sin cachear nada
  event.respondWith(
    fetch(event.request).then((response) => {
      // Devolver la respuesta de la red, sin almacenarla en la caché
      return response;
    }).catch((error) => {
      console.error('Error al realizar la solicitud fetch:', error);
      // Opcional: Si la solicitud falla, se puede gestionar el error de alguna manera (por ejemplo, mostrar una página offline)
      return new Response('Error al cargar el recurso.', { status: 404 });
    })
  );
});