// 보라카이 여행앱 서비스 워커: 앱 화면은 오프라인에서도 열리게, 지도·날씨·환율 같은 실시간 데이터는 항상 인터넷에서
const VERSION = 'boracay-test-7';
const SHELL = ['./', './index.html', './app.css', './app.js', './data.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
// 글꼴과 지도 라이브러리는 한 번 받으면 저장해 두고 씀 (Mapbox 지도 조각·API 응답은 저장하지 않음)
const LIB_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'unpkg.com', 'cdn.jsdelivr.net'];
const isMapboxLib = (u) => u.hostname === 'api.mapbox.com' && u.pathname.startsWith('/mapbox-gl-js/');

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION && k.startsWith('boracay-test-')).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // 앱 파일: 인터넷이 되면 최신으로 받아 저장, 안 되면 저장본으로
    e.respondWith(fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('./index.html'))));
    return;
  }
  if (LIB_HOSTS.includes(url.hostname) || isMapboxLib(url)) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
      return res;
    })));
  }
  // 그 밖(Mapbox 지도 조각·길찾기, 날씨, 환율, OpenStreetMap)은 브라우저 기본 동작
});
