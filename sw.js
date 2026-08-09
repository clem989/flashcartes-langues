const CACHE='fcl-v26';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png'])).catch(()=>{}));});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window'}).then(cl=>{for(const c of cl){if('focus' in c)return c.focus();}if(self.clients.openWindow)return self.clients.openWindow('./');}));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('./index.html'))));});
