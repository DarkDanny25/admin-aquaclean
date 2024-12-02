const CACHE_NAME = 'admin-manager-cache-v1';
const urlsToCache = [
  '/',
  '/img/logo.png',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  // No añadimos recursos a la caché durante la instalación
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);  // Limpiamos cualquier caché anterior
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Excluir GET, PUT y DELETE de la caché, hacer siempre la solicitud a la red
  if (event.request.method === 'GET' || event.request.method === 'PUT' || event.request.method === 'DELETE') {
    event.respondWith(
      fetch(event.request).catch((error) => {
        console.error('Error al realizar la solicitud fetch:', error);
        return new Response('Error al cargar el recurso.', { status: 404 });
      })
    );
  } 
  // Cachear las solicitudes POST
  else if (event.request.method === 'POST') {
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response && response.ok && !response.redirected) {
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse);  // Guardamos en la caché
          });
        }
        return response;
      }).catch((error) => {
        console.error('Error en la solicitud POST:', error);
        return new Response('Error al procesar la solicitud POST.', { status: 500 });
      })
    );
  } 
  // Si es cualquier otro método (por ejemplo, OPTIONS, PATCH, etc.), solo se realiza la solicitud sin cachear
  else {
    event.respondWith(fetch(event.request));
  }
});