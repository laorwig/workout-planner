const CACHE = 'rep-v3';
const ASSETS = ['/', '/index.html', '/exercises.js', '/manifest.json', '/icon-192.png', '/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {})); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(cached => {
    const fresh = fetch(e.request).then(res => { if (res && res.status === 200 && res.type === 'basic') { caches.open(CACHE).then(c => c.put(e.request, res.clone())); } return res; }).catch(() => cached);
    return cached || fresh;
  }));
});
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  e.waitUntil(self.registration.showNotification(data.title || 'rep', { body: data.body || 'Time to check in', icon: '/icon-192.png', badge: '/icon-192.png', tag: data.tag || 'rep', renotify: true }));
});
self.addEventListener('notificationclick', e => { e.notification.close(); e.waitUntil(clients.openWindow('/')); });
