const CACHE='ukiyo-b3-shell-v2';
const SHELL=['./','./index.html','./assets/css/styles.css','./assets/js/app.js','./assets/js/catalogue.js','./assets/js/data.js','./assets/js/recommendations.js','./assets/js/state.js','./assets/js/storage.js','./assets/js/ui.js','./assets/icons/favicon.svg','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match('./index.html'))))});
