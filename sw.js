self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('magical-box-store').then(function(cache) {
     return cache.addAll([
       '/apresentfornils/index.html',
       '/apresentfornils/favicon192.png',
       '/apresentfornils/favicon512.png',
       '/apresentfornils/heart.css',
       '/apresentfornils/jqq.css',
       '/apresentfornils/restest.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});