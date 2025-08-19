const CACHE_NAME = 'sea-scout-ship4-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/burgee.svg',
  '/seascoutingemblem_small.png',
  '/logo transparent.svg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        console.log('Service Worker: Installed');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and chrome-extension requests
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if found
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', event.request.url);
          return cachedResponse;
        }

        // Otherwise fetch from network
        console.log('Service Worker: Fetching from network', event.request.url);
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response for caching
            const responseToCache = response.clone();

            // Cache successful responses for static assets
            if (shouldCache(event.request.url)) {
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          })
          .catch((error) => {
            console.error('Service Worker: Network request failed', error);
            
            // Return offline fallback for HTML requests
            if (event.request.headers.get('accept')?.includes('text/html')) {
              return caches.match('/');
            }
            
            throw error;
          });
      })
  );
});

// Determine if URL should be cached
function shouldCache(url) {
  // Cache images, CSS, JS files
  return url.includes('.png') || 
         url.includes('.jpg') || 
         url.includes('.jpeg') ||
         url.includes('.svg') ||
         url.includes('.css') ||
         url.includes('.js') ||
         url.includes('fonts');
}

// Handle background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// Background sync handler for contact forms
async function syncContactForm() {
  try {
    // This would handle offline form submissions
    console.log('Service Worker: Syncing contact form data');
    // Implementation would depend on your form handling needs
  } catch (error) {
    console.error('Service Worker: Contact form sync failed', error);
  }
}

// Handle push notifications (for future implementation)
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push received', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New Sea Scout activity update!',
    icon: '/android-chrome-192x192.png',
    badge: '/favicon-32x32.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/android-chrome-192x192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon-32x32.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Sea Scout Ship 4', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked', event);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});