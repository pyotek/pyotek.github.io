importScripts('https://cdn.ampproject.org/sw/amp-sw.js');

AMP_SW.init({
    assetCachingOptions: [{
         regexp: /\.(png|jpg|mp4|woff2|woff|css|js|svg)/,
         cachingStrategy: 'CACHE_FIRST'
     }],
     offlinePageOptions: {
        url: '/offline/',
        assets: []
    },
    linkPrefetchOptions: {
        maxAgeSecondsInCache: 60
    }
});

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.open('mysite').then(function(cache) {
//         return cache.match(event.request).then(function(response) {
//           var fetchPromise = fetch(event.request).then(function(networkResponse) {
//             cache.put(event.request, networkResponse.clone());
//             return networkResponse;
//           })
//           // Modify the response here before it goes out..
  
//           return response || fetchPromise;
//         })
//       })
//     );
//   });