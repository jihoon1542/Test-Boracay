/* ========= 설정 ========= */
const MAPBOX_TOKEN = 'pk.eyJ1Ijoib2RkZXlzZWh1biIsImEiOiJjbXczNzVhOXkwNnllMnpxM2Y1OWFud290In0.gEvYgtoxrENLN05PjtrHcw';
const MAPBOX_STYLE = 'mapbox://styles/oddeysehun/cmw378pfz009g01q2854qhzjt';
// Google 장소 정보 (Places UI Kit) 브라우저 키. https://jihoon1542.github.io/* 에서만 쓰도록 제한해 둔 키를 넣음
const GOOGLE_KEY = 'AIzaSyBbyVVSulhPZ16fW5SS8BmfTPLROCbiOOw';
const BORACAY = { lat: 11.968, lng: 121.925, bounds: [[121.895, 11.925], [121.965, 12.015]] };
let TZ = 'Asia/Manila';
const STORE_KEY = 'boracay-test-v1';
// 테스트 앱은 원래 앱과 같은 주소(github.io)라 저장소를 따로 씀. 처음 열 때만 원래 앱 데이터를 복사해 옴
try { if (!localStorage.getItem(STORE_KEY) && localStorage.getItem('boracay-app-v1')) localStorage.setItem(STORE_KEY, localStorage.getItem('boracay-app-v1')); } catch (e) {}

/* ========= 아이콘 ========= */
const I = {
  home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',
  list:'<path d="M10 6h10M10 12h10M10 18h10"/><path d="m3 6 1.5 1.5L7 5M3 12l1.5 1.5L7 11M3 18l1.5 1.5L7 17"/>',
  sun:'<path d="M3 18h18M6 21h12M12 3v3M4.2 8.2l1.4 1.4M19.8 8.2l-1.4 1.4M7 18a5 5 0 0 1 10 0"/>',
  ticket:'<path d="M4 6h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4z"/><path d="M14 6v2M14 11v2M14 16v2"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  check:'<path d="M5 12l5 5L20 7"/>',
  edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  food:'<path d="M7 2v9a2 2 0 0 0 2 2v9M11 2v6a2 2 0 0 1-2 2M7 2v6"/><path d="M17 22V2c-2 1-3 4-3 8h3"/>',
  cafe:'<path d="M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/>',
  wave:'<path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>',
  star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  close:'<path d="M6 6l12 12M18 6 6 18"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  img:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  bus:'<rect x="4" y="4" width="16" height="13" rx="3"/><path d="M4 11h16M8 21l-1-4M16 21l1-4"/>',
  boat:'<path d="M3 17l2 4h14l2-4H3zM12 3v11M12 4l6 8h-6"/>',
  bed:'<path d="M3 20V7M3 14h18v6M21 14v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11" r="2"/>',
  back:'<path d="M15 18l-6-6 6-6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  crosshair:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  chev:'<path d="M9 6l6 6-6 6"/>', chevd:'<path d="M6 9l6 6 6-6"/>',
  nav:'<path d="M3 11l19-9-9 19-2-8-8-2z"/>',
  bag:'<path d="M6 7h12l1 13H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
  grid:'<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>',
  coin:'<circle cx="12" cy="12" r="9"/><path d="M9 8h4a2.5 2.5 0 0 1 0 5H9V8zM9 13v4M7 10.5h8"/>',
  book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/>',
  share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
  checksq:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="m8 12 3 3 5-6"/>',
  file:'<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4"/>',
  sunny:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  cloud:'<path d="M17.5 19H8a5 5 0 1 1 1.1-9.9A6 6 0 0 1 20 11.5 3.8 3.8 0 0 1 17.5 19z"/>',
  rain:'<path d="M16 13H7.5a4.5 4.5 0 1 1 1-8.9A5.5 5.5 0 0 1 18.5 6 3.5 3.5 0 0 1 16 13z"/><path d="M8 16l-1 3M12 16l-1 3M16 16l-1 3"/>'
};
const svg = (name, size = 22, color = 'currentColor', w = 2) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[name]}</svg>`;

/* ========= 유틸 ========= */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const uid = () => Math.random().toString(36).slice(2, 9);
const WEEK = ['일','월','화','수','목','금','토'];
const todayStr = () => new Date().toLocaleDateString('en-CA', { timeZone: TZ });
const dateObj = (ds) => new Date(ds + 'T12:00:00+08:00');
const fmtDate = (ds) => { const d = dateObj(ds); return `${d.getUTCMonth()+1}/${d.getUTCDate()} (${WEEK[(d.getUTCDay())]})`; };
const fmtTime = (d) => d.toLocaleTimeString('ko-KR', { timeZone: TZ, hour: '2-digit', minute: '2-digit', hour12: false });
const addDays = (ds, n) => { const d = dateObj(ds); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.style.display = 'block'; clearTimeout(toast._t); toast._t = setTimeout(() => t.style.display = 'none', 2200); }

/* ========= 일출·일몰 계산 (오프라인, SunCalc 방식) ========= */
function sunTimes(ds, lat = (S && S.trip.lat) || BORACAY.lat, lng = (S && S.trip.lng) || BORACAY.lng) {
  const rad = Math.PI/180, dayMs = 864e5, J1970 = 2440588, J2000 = 2451545, e = rad*23.4397, J0 = 0.0009;
  const date = dateObj(ds);
  const d = date.valueOf()/dayMs - 0.5 + J1970 - J2000;
  const fromJ = (j) => new Date((j + 0.5 - J1970) * dayMs);
  const lw = rad * -lng, phi = rad * lat;
  const n = Math.round(d - J0 - lw/(2*Math.PI));
  const at = (Ht) => J0 + (Ht + lw)/(2*Math.PI) + n;
  const ds0 = at(0);
  const M = rad*(357.5291 + 0.98560028*ds0);
  const L = M + rad*(1.9148*Math.sin(M) + 0.02*Math.sin(2*M) + 0.0003*Math.sin(3*M)) + rad*102.9372 + Math.PI;
  const dec = Math.asin(Math.sin(e)*Math.sin(L));
  const tr = (a) => J2000 + a + 0.0053*Math.sin(M) - 0.0069*Math.sin(2*L);
  const noon = tr(ds0);
  const setJ = (h) => tr(at(Math.acos((Math.sin(h) - Math.sin(phi)*Math.sin(dec)) / (Math.cos(phi)*Math.cos(dec)))));
  const s = setJ(-0.833*rad), g = setJ(6*rad);
  return { rise: fromJ(noon - (s - noon)), set: fromJ(s), golden: fromJ(g) };
}

/* ========= 저장소 ========= */
const CATS = { food:'맛집', cafe:'카페', stay:'숙소', spot:'관광', shop:'쇼핑', beach:'해변', act:'액티비티', etc:'기타' };
const CAT_ICON = { food:'food', cafe:'cafe', stay:'bed', beach:'wave', act:'boat', spot:'star', shop:'bag', etc:'pin' };
const TCATS = { flight:'항공', hotel:'숙소', tour:'투어', shuttle:'교통', food:'식당', etc:'기타' };
const TCAT_ICON = { flight:'plane', shuttle:'bus', tour:'boat', hotel:'bed', food:'food', etc:'ticket' };

// 여자친구 구글맵 '보라카이' 저장 목록 (Google place ID만 저장, 위치는 앱에서 Google에 물어봐서 채움)
const FAV_SEED = [["ChIJJdfnlrU9pTMR6_4oqmdDiJU", "Chubby Crab Ph Boracay", "food"], ["ChIJv5vT9mU9pTMRsfVbsbP7gQs", "Cafe Uno Boracay", "food"], ["ChIJDeBfqWQ9pTMRNf9yA0WUpAU", "Gerry's Grill Station 1 (Mito's Place)", "food"], ["ChIJR3yY8xc8pTMRMrKf3UMZ5r0", "The Pig Out Bistro", "food"], ["ChIJyTkDfCI8pTMRQjaytrhnZls", "Money Changer By Queen's", "shop"], ["ChIJ34Ba0Do_pTMR9XHY0I0URtk", "Bistro des Amis", "food"], ["ChIJ-0qso2I8pTMRNIrXs5qrXy4", "Puka Shell Beach", "beach", "puka"], ["ChIJzQb2NBk9pTMRZ27M2o7Govc", "Robinsons Supermarket (Station B Mall)", "shop"], ["ChIJ2ZYowHw9pTMRf_vCEbNCJzc", "The Sunny Side Cafe", "food"], ["ChIJjeyYtyI8pTMRLxBfFIr4bhE", "버짓 마트", "shop"], ["ChIJHV-0-xc8pTMRIGyS0ogx4sA", "Jonah's Fruit Shake & Snack Bar", "cafe", "jonahs"], ["ChIJfZfCZBg8pTMRM8DBzaz2cL4", "Aria Restaurant", "food"], ["ChIJ9SjTsJk_pTMRggd7sWCAoDE", "TGH The Grillhouse Sportsbar", "food"], ["ChIJHVGzVyM8pTMRVGnfxDgGW5E", "레반틴 보라카이", "stay"], ["ChIJEZp3Yzs8pTMRRk39gb5nhyo", "Bulabog Beach", "beach", "bulabog"], ["ChIJHae4G7g9pTMR-fEMTDzw9yM", "I Love Boracay", "spot"], ["ChIJQ4r3_iI8pTMRgFuocXT1w7A", "금강산 보라카이 (한식)", "food"], ["ChIJze8N62I9pTMR4PYCyzm04ZM", "MUNIMUNI BORACAY", "food"], ["ChIJiWR5DAA9pTMR6ZCebiEpLoA", "Chimney Cake Boracay", "cafe"], ["ChIJb3NcfBKdpTMRf5D4rr5fSgA", "cafeone 칼리보 공항 라운지", "cafe"], ["ChIJfQdkayY8pTMR-ykXO5nIPNE", "Club Galaxy", "spot"], ["ChIJlSHGFRg8pTMR_zZ1tMWcLR4", "Summer Place", "food"], ["ChIJwT46r2w9pTMRlVUR2UV-nsY", "JumboCrab", "food"], ["ChIJ_____zw8pTMRGYZAoNDu6Js", "I Luv Backyard BBQ", "food"], ["ChIJgf0DyOc9pTMR2uMXVBMtVt4", "IslandVault (카드·커피)", "shop"], ["ChIJ28YXmxc8pTMRFRIwdq71h3I", "스타벅스 (Boat Station 1)", "cafe"], ["ChIJqUS69SI8pTMRhSfWHsSECs4", "Coco Mama", "cafe"], ["ChIJi-btmyI8pTMR7ePGOYolp-Y", "Island Chicken Inasal", "food"], ["ChIJ0XFGhp89pTMRs_LmuQKrU40", "Redcrab Boracay", "food"], ["ChIJRZVYKD08pTMRd8uuySUcFnY", "Hello Spa & Hello Foot Spa", "act"], ["ChIJCyipUpM9pTMR4PDO0QXc8MY", "졸리비 (Beachfront)", "food"], ["ChIJlRhKuSI8pTMRO4T9oRxbfWU", "HaloMango (D'Mall)", "cafe"], ["ChIJq1AnIxg8pTMR7D0HcFU4EFw", "Gerry's Grill Station 2", "food"], ["ChIJ37BoRE89pTMRDuHn5lI67EI", "Cheeze Moon Pink Moon", "cafe"], ["ChIJUdbVevA9pTMRhhu-JhDyILE", "인생네컷 (D'Mall 2층)", "shop"], ["ChIJb5hQmyI8pTMRZtpq1nlR3ns", "Epic Boracay", "food"], ["ChIJN55cXXE8pTMRkPMfXW6s4J0", "Crimson Resort & Spa", "stay", "crimson"], ["ChIJufKSmyI8pTMRgjGViTPXTh0", "Henann Crystal Sands Resort", "stay", "henann"], ["ChIJ869ObRg8pTMRpzlcCpuT278", "사바비 레스토랑", "food"], ["ChIJIy8j3SM8pTMRF4cTD9InnQA", "차스파 (마사지)", "act"], ["ChIJjX844Dw8pTMRp7Z0wedotN8", "Aqua Boracay", "stay"]];
const PLAN_PLACES = [
  { id:'henann', name:'Henann Crystal Sands Resort', cat:'stay', area:'Station 1~D\'Mall 사이 해변', lat:11.96286, lng:121.92405 },
  { id:'crimson', name:'Crimson Resort & Spa', cat:'stay', area:'Station Zero (Yapak)', lat:11.98239, lng:121.90878 }
];
function planTodos(start) {
  const D = (i) => addDays(start, i), days = {};
  days[D(0)] = [{ id:uid(), time:'15:00', title:'헤난 크리스탈 샌즈 체크인', placeId:'henann', cat:'stay', note:'체크인 15:00부터', done:false }];
  days[D(1)] = [{ id:uid(), time:'', title:'선셋 세일링', placeId:'', where:'White Beach', cat:'sight', sunset:true, note:'오후 · 해변 호객 업체로 현장 예약 (시간 미정, 이날 일몰 17:32)', done:false }];
  days[D(2)] = [
    { id:uid(), time:'07:30', title:'헤난 크리스탈 샌즈 체크아웃', placeId:'henann', cat:'stay', note:'', done:false },
    { id:uid(), time:'08:20', title:'호핑투어 미팅 장소 도착', placeId:'', where:'', cat:'move', note:'미팅 장소 확인 필요 · 12시까지 호핑투어', done:false },
    { id:uid(), time:'12:00', title:'호핑투어 끝', placeId:'', cat:'sight', note:'', done:false },
    { id:uid(), time:'15:00', title:'크림슨 리조트 체크인', placeId:'crimson', cat:'stay', note:'\'크림슨파크 리조트\' → Crimson Resort & Spa (Station Zero)로 넣었어요. 다르면 수정해 주세요', done:false }
  ];
  days[D(3)] = []; days[D(4)] = [];
  return days;
}
function planTickets(start) {
  const D = (i) => addDays(start, i);
  return [
    { id:uid(), cat:'hotel', title:'헤난 크리스탈 샌즈 리조트', date:D(0), time:'15:00', code:'', place:'Henann Crystal Sands Resort, Station 1', url:'', memo:'체크인 12/16 15:00 · 체크아웃 12/18 07:30', imgs:[], files:[] },
    { id:uid(), cat:'tour', title:'선셋 세일링', date:D(1), time:'', code:'', place:'White Beach', url:'', memo:'현장 호객 업체로 예약 예정 · 오후', imgs:[], files:[] },
    { id:uid(), cat:'tour', title:'호핑투어', date:D(2), time:'08:20', code:'', place:'', url:'', memo:'08:20 미팅 · 12:00 종료\n미팅 장소: (확인 필요)', imgs:[], files:[] },
    { id:uid(), cat:'hotel', title:'크림슨 리조트', date:D(2), time:'15:00', code:'', place:'Crimson Resort & Spa, Station Zero', url:'', memo:'체크인 12/18 15:00', imgs:[], files:[] }
  ];
}
function seed() {
  const start = '2026-12-16';
  const P = [
    ...PLAN_PLACES,
    { id:'puka', name:'Puka Shell Beach', cat:'beach', area:'북쪽 해변', lat:11.99508, lng:121.91364 },
    { id:'jonahs', name:"Jonah's Fruit Shake", cat:'food', area:'Station 1', lat:11.96658, lng:121.92098,
      menu:[{ id:uid(), name:'망고 셰이크', price:'' }, { id:uid(), name:'바나나 초코 셰이크', price:'' }, { id:uid(), name:'칼라만시 주스', price:'' }] },
    { id:'willys', name:"Willy's Rock", cat:'spot', area:'Station 1', lat:11.96812, lng:121.91857 },
    { id:'dmall', name:"D'Mall", cat:'spot', area:'Station 2', lat:11.96304, lng:121.92618 },
    { id:'station3', name:'Station 3 해변', cat:'beach', area:'Station 3', lat:11.95201, lng:121.92978 },
    { id:'bulabog', name:'Bulabog Beach', cat:'act', area:'동쪽 해변 · 카이트서핑', lat:11.96264, lng:121.93152 },
    { id:'diniwid', name:'Diniwid Beach', cat:'beach', area:'Station 1 북쪽', lat:11.97635, lng:121.91171 },
    { id:'luho', name:'Mount Luho 전망대', cat:'spot', area:'섬 동쪽 언덕', lat:11.97678, lng:121.92891 }
  ].map((p) => ({ menu: [], memo: '', coordV: 2, ...p }));
  return {
    planV: 1,
    trip: { name:'보라카이 4박5일', start, end: addDays(start, 4) },
    alarm: { offset: 30, off: {}, fired: {} },
    todos: planTodos(start),
    places: P,
    tickets: planTickets(start),
    ui: { tab:'home', day:start, placeFilter:'all', ticketFilter:'all' }
  };
}
/* 이미지(티켓 캡처)는 IndexedDB에 보관, 안 되면 메모리에 */
const memImgs = {};
let idb = null;
try {
  const req = indexedDB.open('boracay-imgs', 1);
  req.onupgradeneeded = () => req.result.createObjectStore('imgs');
  req.onsuccess = () => { idb = req.result; hydrateImages(); };
} catch (e) {}
function putImg(id, blob) {
  memImgs[id] = URL.createObjectURL(blob);
  try { idb && idb.transaction('imgs', 'readwrite').objectStore('imgs').put(blob, id); } catch (e) {}
}
function delImg(id) { try { idb && idb.transaction('imgs', 'readwrite').objectStore('imgs').delete(id); } catch (e) {} }
function hydrateImages() {
  document.querySelectorAll('img[data-img]').forEach((el) => {
    const id = el.dataset.img;
    if (memImgs[id]) { el.src = memImgs[id]; return; }
    if (!idb) return;
    try {
      const r = idb.transaction('imgs').objectStore('imgs').get(id);
      r.onsuccess = () => { if (r.result) { memImgs[id] = URL.createObjectURL(r.result); el.src = memImgs[id]; } };
    } catch (e) {}
  });
}

/* ========= 여행 날짜 ========= */
function tripDays() {
  const out = []; let d = S.trip.start;
  for (let i = 0; i < 30 && d <= S.trip.end; i++) { out.push(d); d = addDays(d, 1); }
  return out;
}
function currentDay() {
  const t = todayStr(), days = tripDays();
  return days.includes(t) ? t : (t < S.trip.start ? S.trip.start : days[days.length - 1]);
}
const dayIndex = (ds) => tripDays().indexOf(ds) + 1;
const todosOf = (ds) => (S.todos[ds] = S.todos[ds] || []);
const sortTodos = (list) => list.sort((a, b) => (a.time || '99') < (b.time || '99') ? -1 : 1);
const placeById = (id) => S.places.find((p) => p.id === id);
function dayTabs(act, sel) {
  return `<div class="daytabs">${tripDays().map((d) => `
    <button class="daytab ${d === sel ? 'on' : ''}" data-act="${act}" data-day="${d}">
      <b>D${dayIndex(d)}</b><span>${fmtDate(d)}</span></button>`).join('')}</div>`;
}

/* ========= 탭 ========= */
const TABS = [['home','홈','home'], ['map','지도','map'], ['todo','일정','list'], ['money','경비','coin'], ['more','더보기','grid']];
function renderTabs() {
  $('#tabs').innerHTML = TABS.map(([id, label, ic]) =>
    `<button data-act="tab" data-tab="${id}" ${S.ui.tab === id || (id === 'more' && SUBTABS.includes(S.ui.tab)) ? 'aria-current="page"' : ''}>${svg(ic, 24)}${label}</button>`).join('');
}
function render() {
  renderTabs();
  const isMap = S.ui.tab === 'map';
  $('#mapView').style.display = isMap ? 'block' : 'none';
  $('#view').style.display = isMap ? 'none' : 'block';
  if (isMap) { renderMap(); return; }
  $('#view').style.background = S.ui.tab === 'home' ? '#fff' : '';
  if (render._last !== S.ui.tab) { render._last = S.ui.tab; requestAnimationFrame(() => { $('#view').scrollTop = 0; }); }
  if (S.ui.tab === 'home' || S.ui.tab === 'sunset') maybeWeather();
  $('#view').innerHTML = ({ home: viewHome, todo: viewTodo, sunset: viewSunset, tickets: viewTickets, money: viewMoney, more: viewMore, places: viewPlaces, check: viewCheck, journal: viewJournal }[S.ui.tab] || viewHome)();
  if (S.ui.tab === 'money') updateFx();
  $('#view').classList.toggle('vhome', S.ui.tab === 'home');
  if (S.ui.tab === 'home') mountHomeMap();
  hydrateImages();
}

/* ========= 홈 ========= */
const MINT_BG = '#E6F3EF';
function miniMap(w, h, stops) {
  // 홈 화면용 작은 지도: 오늘 동선이 다 보이게 맞춤 (없으면 화이트비치 중심)
  const ptsLL = stops.length ? stops.map((p) => [p.lng, p.lat]) : [[121.9175, 11.9760], [121.9285, 11.9565]];
  if (userPos && insideBoracay(userPos)) ptsLL.push([userPos.lng, userPos.lat]);
  const xs = ptsLL.map(([a, b]) => proj(a, b)[0]), ys = ptsLL.map(([a, b]) => proj(a, b)[1]);
  const pad = 70, topPad = 110;
  const bw = Math.max(Math.max(...xs) - Math.min(...xs), 60), bh = Math.max(Math.max(...ys) - Math.min(...ys), 60);
  const k = Math.min((w - pad * 2) / bw, (h - topPad - 50) / bh, 4);
  const cx = (Math.max(...xs) + Math.min(...xs)) / 2, cy = (Math.max(...ys) + Math.min(...ys)) / 2;
  const tx = w / 2 - cx * k, ty = topPad + (h - topPad - 50) / 2 - cy * k;
  const S2 = (lng, lat) => { const [x, y] = proj(lng, lat); return [x * k + tx, y * k + ty]; };
  const P = (arr) => arr.map(([a, b]) => proj(a, b).map((v) => v.toFixed(1)).join(',')).join(' ');
  const route = stops.map((p) => S2(p.lng, p.lat).map((v) => v.toFixed(1)).join(',')).join(' ');
  const pins = stops.map((p, i) => { const [x, y] = S2(p.lng, p.lat);
    return `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})"><path d="M0 0 C-5 -7 -13 -11 -13 -20 A13 13 0 1 1 13 -20 C13 -11 5 -7 0 0 Z" fill="${i === 0 ? G : GL}" stroke="#fff" stroke-width="2.5"/><text y="-15" text-anchor="middle" style="font:700 13px 'Space Grotesk',sans-serif;fill:#fff">${i + 1}</text></g>`; }).join('');
  let me = '';
  if (userPos && insideBoracay(userPos)) { const [x, y] = S2(userPos.lng, userPos.lat); me = `<circle cx="${x}" cy="${y}" r="20" fill="rgba(26,115,232,.18)"/><circle cx="${x}" cy="${y}" r="7" fill="#1A73E8" stroke="#fff" stroke-width="3"/>`; }
  return `<svg width="100%" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="display:block">
    <rect width="100%" height="100%" fill="#BFE6EA"/>
    <g transform="translate(${tx.toFixed(1)},${ty.toFixed(1)}) scale(${k.toFixed(4)})">
      <polygon points="${P(ISLAND)}" fill="#F3F1EA"/>
      ${BEACHES.map((bch) => `<polygon points="${P(bch)}" fill="#F4E3B4" stroke="#F4E3B4" stroke-width="6" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>`).join('')}
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">${ROADS[1].map((g) => `<polyline points="${P(g)}" stroke-width="2" vector-effect="non-scaling-stroke"/>`).join('')}${ROADS[0].map((g) => `<polyline points="${P(g)}" stroke-width="4.5" vector-effect="non-scaling-stroke"/>`).join('')}</g>
    </g>
    ${route && stops.length > 1 ? `<polyline points="${route}" fill="none" stroke="${GL}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
    ${pins}${me}
  </svg>`;
}
const walkInfo = (p) => {
  if (!userPos || !insideBoracay(userPos) || !p || !p.lat) return null;
  const m = Math.hypot((p.lng - userPos.lng) * 108900, (p.lat - userPos.lat) * 110600) * 1.3; // 직선거리 × 1.3 (길 굴곡 보정)
  return { min: Math.max(1, Math.round(m / 75)), dist: m >= 1000 ? (m / 1000).toFixed(1) + 'km' : Math.round(m / 10) * 10 + 'm' };
};
function viewHome() {
  const day = currentDay(), t = sunTimes(day), now = new Date(), days = tripDays();
  const before = todayStr() < S.trip.start;
  const dleft = Math.round((dateObj(S.trip.start) - dateObj(todayStr())) / 864e5);
  const list = sortTodos(todosOf(day).slice()), done = list.filter((x) => x.done).length;
  const stops = list.map((x) => placeById(x.placeId)).filter((p) => p && p.lat);
  const nowHM = fmtTime(now);
  const next = list.find((x) => !x.done && (before || todayStr() !== day || !x.time || x.time >= nowHM)) || list.find((x) => !x.done);
  const np = next && placeById(next.placeId), wi = walkInfo(np);
  const mins = Math.round((t.set - now) / 60000);
  let frac = (now - t.rise) / (t.set - t.rise); frac = before ? 0 : Math.max(0, Math.min(1, frac));
  const countdown = before ? `여행까지 D-${dleft}` : mins > 0 ? `${Math.floor(mins / 60)}시간 ${mins % 60}분 남음` : '오늘 해는 졌어요';
  const tk = nextTicket();
  const ring = list.length ? Math.round(163 * done / list.length) : 0;
  const di = days.indexOf(day), prog = days.length > 1 ? (before ? 0 : di / (days.length - 1)) : 1;
  const steps = days.map((d, i) => {
    const st = before ? '' : i < di ? 'done' : i === di ? 'now' : '';
    return `<button data-act="homeDay" data-day="${d}" class="hstep" aria-label="D${i + 1} 일정 보기">
      <span class="hdot ${st}">${st === 'done' ? svg('check', 13, '#fff', 3) : st === 'now' ? '<i></i>' : ''}</span>
      <b class="num">D${i + 1}</b><span>${fmtDate(d).slice(0, -4)}</span></button>`;
  }).join('');
  return `
  <div class="hmap">
    <div class="hmapbg">${homeMbState === 'failed' ? `<button class="hfail" data-act="homeRetry">${svg('map', 18, G)}지도를 불러오지 못했어요 · 다시 시도</button>` : ''}</div>
    <div class="hhead">
      <div style="min-width:0"><button data-act="trips" style="border:0;background:none;padding:0;font-size:24px;font-weight:700;letter-spacing:-.03em;line-height:1.2;text-align:left;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">${esc(S.trip.name)}</button>
        <div style="font-size:14px;font-weight:700;color:${G};margin-top:2px">${before ? `여행 D-${dleft}` : `여행 ${di + 1}일차`} · ${fmtDate(day)}</div></div>
      <div class="row" style="gap:0">
        <button class="icon" data-act="tab" data-tab="sunset" aria-label="선셋 알람">${svg('bell', 24, '#1C2B2E')}</button>
        <button class="icon" data-act="settings" aria-label="설정">${svg('gear', 22, '#5B6B6E')}</button>
      </div>
    </div>
  </div>
  <div class="hdock${homeFull ? ' down' : ''}">
    <div class="hctl"><button class="hfab" data-act="homeFit" aria-label="오늘 동선 보기">${svg('crosshair', 18, '#1C2B2E')}</button>
      <button class="hbig" data-act="tab" data-tab="map">${svg('map', 16, G)}지도 탭</button></div>
  <div class="hsheet">
    <div class="hgrabzone"><div class="hgrab" aria-hidden="true"></div>
    <button class="hpeek" data-act="homeExpand">${svg('chevd', 16, '#5B6B6E')}<span>위로 올려 일정 보기${next ? ' · 다음: ' + esc(np ? np.name : next.title) : ''}</span></button></div>
    <div class="hsteps"><div class="hline"><i style="width:${(prog * 100).toFixed(0)}%"></i></div>${steps}</div>
    ${next ? `<div class="hnext">
      <span class="hnext-ic">${svg(np ? (CAT_ICON[np.cat] || 'pin') : 'list', 26, '#fff')}</span>
      <button data-act="${np ? 'openPlace' : 'tab'}" data-id="${np ? np.id : ''}" data-tab="todo" style="flex:1;min-width:0;border:0;background:none;padding:0;text-align:left;display:flex;flex-direction:column;gap:2px">
        <span style="font-size:12px;color:${G};font-weight:700">다음 일정${next.time ? ' · ' + esc(next.time) : ''}</span>
        <b style="font-size:17px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(np ? np.name : next.title)}</b>
        <span class="muted" style="font-size:13px">${wi ? `도보 약 ${wi.min}분 · ${wi.dist}` : esc(np ? (np.area || next.title) : '장소 없음')}</span>
      </button>
      ${np && np.lat ? `<button class="hnav" data-act="navTo" data-id="${np.id}" aria-label="길찾기" style="border:0">${svg('nav', 22, G)}</button>` : ''}
    </div>` : `<div class="hnext" style="justify-content:center"><span class="muted" style="font-size:14px">남은 일정이 없어요 · 지도에서 장소를 담아 보세요</span></div>`}
    <div class="htiles">
      <button class="hsun" data-act="tab" data-tab="sunset">
        <span style="font-size:12px;color:#CDEDE5">${before ? '첫날' : '오늘'} 일몰</span>
        <b class="num" style="font-size:36px;line-height:1.05">${fmtTime(t.set)}</b>
        <span style="font-size:12px;color:#E2F5EF">${countdown}</span>
        <span class="hbar"><i style="width:${(frac * 100).toFixed(0)}%"></i></span>
        <span style="font-size:11px;color:#CDEDE5">${S.alarm.off[day] ? '알람 꺼짐' : `알람 ${fmtTime(new Date(t.set - S.alarm.offset * 60000))}`}${wxNowText() ? ' · ' + wxNowText() : ''}</span>
      </button>
      <div style="display:flex;flex-direction:column;gap:10px;flex:1;min-width:0">
        <button class="htile" data-act="tab" data-tab="todo">
          <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="26" fill="none" stroke="#E3E6E3" stroke-width="9"/>${ring ? `<circle cx="32" cy="32" r="26" fill="none" stroke="${GL}" stroke-width="9" stroke-linecap="round" stroke-dasharray="${ring} 200" transform="rotate(-90 32 32)"/>` : ''}</svg>
          <span style="display:flex;flex-direction:column;align-items:flex-start"><span class="small muted">할 일</span><b class="num" style="font-size:17px">${done} / ${list.length}</b></span>
        </button>
        <button class="htile" data-act="${tk ? 'openTicket' : 'tab'}" data-id="${tk ? tk.id : ''}" data-tab="tickets">
          <span style="width:40px;height:40px;border-radius:12px;background:${MINT_BG};display:flex;align-items:center;justify-content:center;flex-shrink:0">${svg(tk ? TCAT_ICON[tk.cat] : 'ticket', 20, G)}</span>
          <span style="display:flex;flex-direction:column;align-items:flex-start;min-width:0;max-width:100%"><b style="font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%">${tk ? esc(tk.title) : '티켓 없음'}</b><span class="small muted" style="white-space:nowrap">${tk ? `${fmtDate(tk.date).slice(0, -4)} ${esc(tk.time)}` : '추가하기'}</span></span>
        </button>
      </div>
    </div>
    ${homeExtra()}
    <div class="between" style="margin-top:4px"><h2>${before ? '첫날' : '오늘'} 할 일</h2><button class="chip" data-act="tab" data-tab="todo" style="height:32px">전체 ›</button></div>
    <div>${list.length ? list.slice(0, 4).map((it) => `<div class="hrow">
      <button class="icon" data-act="toggle" data-id="${it.id}" aria-label="완료 표시" style="width:40px;height:40px"><span class="check ${it.done ? 'on' : ''}" style="border-radius:7px">${it.done ? svg('check', 14, '#fff', 3) : ''}</span></button>
      <span class="num muted" style="width:44px;font-size:14px">${esc(it.time || '--:--')}</span>
      <span style="flex:1;min-width:0;display:flex;flex-direction:column"><span class="${it.done ? 'done-text' : ''}" style="font-size:15px;font-weight:500">${esc(it.title)} ${it.sunset ? '<span class="tag">선셋</span>' : ''}</span>
      ${placeById(it.placeId) ? `<span class="small muted">${esc(placeById(it.placeId).name)}</span>` : ''}</span></div>`).join('') : '<div class="empty">아직 할 일이 없어요</div>'}</div>
  </div></div>`;
}
function homeExtra() {
  const st = S.expenses.reduce((a, e) => a + (+e.amount || 0), 0), bud = +S.trip.budget || 0;
  const ck = S.checklist, cd = ck.filter((x) => x.done).length;
  return `<div class="htiles">
    <button class="htile" data-act="tab" data-tab="money" style="flex-direction:column;align-items:flex-start;gap:4px">
      <span class="small muted">사용한 경비</span><b class="num" style="font-size:15px;white-space:nowrap">${won(st)}</b>
      ${bud ? `<span class="hbar" style="background:#E3E6E3;margin:2px 0 0"><i style="width:${Math.min(100, Math.round(st / bud * 100))}%;background:#2DAA8A"></i></span>` : '<span class="small muted">예산 미설정</span>'}
    </button>
    <button class="htile" data-act="tab" data-tab="check" style="flex-direction:column;align-items:flex-start;gap:4px">
      <span class="small muted">짐 싸기</span><b class="num" style="font-size:16px">${cd} / ${ck.length}</b>
      <span class="hbar" style="background:#E3E6E3;margin:2px 0 0"><i style="width:${ck.length ? Math.round(cd / ck.length * 100) : 0}%;background:#2DAA8A"></i></span>
    </button>
    <button class="htile" data-act="tab" data-tab="places" style="flex-direction:column;align-items:flex-start;gap:4px">
      <span class="small muted">가고 싶은 곳</span><b class="num" style="font-size:16px">${S.places.filter((p) => !p.visited).length}곳</b>
      <span class="small muted">꼭 가기 ${S.places.filter((p) => p.priority === 'must' && !p.visited).length}</span>
    </button>
  </div>`;
}
function nextTicket() {
  const t = todayStr();
  return S.tickets.filter((x) => x.date >= t).sort((a, b) => (a.date + a.time) < (b.date + b.time) ? -1 : 1)[0]
      || S.tickets.slice().sort((a, b) => (a.date + a.time) < (b.date + b.time) ? -1 : 1)[0];
}

/* ========= 일정 ========= */
function findTodoDay(id) { return Object.keys(S.todos).find((d) => S.todos[d].some((x) => x.id === id)); }
function findTodo(id) { const d = findTodoDay(id); return d ? S.todos[d].find((x) => x.id === id) : null; }

/* ========= 선셋 & 알람 ========= */
function viewSunset() {
  const day = currentDay(), t = sunTimes(day), now = new Date();
  let frac = (now - t.rise) / (t.set - t.rise); frac = todayStr() === day ? Math.max(0, Math.min(1, frac)) : 0.88;
  const u = 1 - frac, x = u * u * 20 + 2 * u * frac * 175 + frac * frac * 330, y = u * u * 92 + 2 * u * frac * -20 + frac * frac * 92;
  const mins = Math.round((t.set - now) / 60000);
  return `<div class="stack" style="gap:16px">
    ${subHead('날씨 · 일몰', '최대 16일 예보와 날짜별 일몰, 선셋 알람')}
    ${weatherBlock()}
    <div class="hero stack" style="gap:6px">
      <div class="between"><span class="sub">${fmtDate(day)}</span><span style="font-size:13px;color:#D3F0E8">${mins > 0 && todayStr() === day ? `일몰까지 ${Math.floor(mins/60)}시간 ${mins%60}분` : ''}</span></div>
      <svg viewBox="0 0 350 110" width="100%" aria-hidden="true">
        <path d="M20 92 Q175 -20 330 92" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="4 5" opacity=".5"/>
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="10" fill="#F08A5D"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="17" fill="#F08A5D" opacity=".25"/>
        <path d="M0 92h350" stroke="#fff" stroke-width="1.5" opacity=".6"/>
      </svg>
      <div class="between" style="align-items:flex-end">
        <div class="stack" style="gap:2px"><span class="small" style="color:#CDEDE5">일출</span><span class="num" style="font-size:18px">${fmtTime(t.rise)}</span></div>
        <div class="stack" style="gap:2px;align-items:center"><span class="small" style="color:#CDEDE5">골든아워</span><span class="num" style="font-size:15px">${fmtTime(t.golden)} – ${fmtTime(t.set)}</span></div>
        <div class="stack" style="gap:2px;align-items:flex-end"><span class="small" style="color:#FBC9B2">일몰</span><span class="num" style="font-size:30px;font-weight:700;line-height:1">${fmtTime(t.set)}</span></div>
      </div>
    </div>
    <div class="stack" style="gap:8px">
      <h2>날짜별 일몰</h2>
      <div class="card" style="padding:0 14px">
        ${tripDays().map((d) => {
          const s = sunTimes(d).set, on = !S.alarm.off[d], past = d < todayStr();
          return `<div class="list-row" style="${past ? 'opacity:.55' : ''}">
            <b class="num" style="width:28px;font-size:14px">D${dayIndex(d)}</b>
            <span class="muted" style="width:64px;font-size:13px">${fmtDate(d)}</span>
            <span class="num" style="flex:1;font-size:20px;font-weight:700">${fmtTime(s)}</span>
            ${on ? `<span class="tag" style="font-weight:500;font-size:12px;padding:4px 8px">${fmtTime(new Date(s - S.alarm.offset*60000))} 알람</span>` : '<span class="small muted">꺼짐</span>'}
            <button class="icon" data-act="toggleAlarm" data-day="${d}" aria-label="${fmtDate(d)} 알람"><span class="switch" aria-pressed="${on}"></span></button>
          </div>`; }).join('')}
      </div>
    </div>
    <div class="stack" style="gap:8px">
      <h2>알람 설정</h2>
      <div class="card stack" style="gap:12px">
        <span style="font-size:14px;font-weight:500">일몰 몇 분 전에 깨울까요</span>
        <div class="seg">${[15, 30, 60].map((m) => `<button data-act="offset" data-m="${m}" class="${S.alarm.offset === m ? 'on' : ''}">${m === 60 ? '1시간' : m + '분'} 전</button>`).join('')}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <button class="btn ghost" data-act="notifyPerm">알림 허용</button>
          <button class="btn ghost" data-act="testAlarm">알람 테스트</button>
        </div>
        <button class="btn" data-act="ics">${svg('bell', 18, '#fff')} 폰 캘린더에 알람 넣기 (.ics)</button>
        <span class="small muted">앱 화면이 열려 있으면 소리와 알림으로 깨워 줘요. 화면을 꺼도 울리게 하려면 .ics 파일로 폰 캘린더에 넣어 두세요.</span>
      </div>
      <span class="small muted">일몰 시각은 보라카이 좌표(11.97°N, 121.93°E)로 기기에서 직접 계산해요. 인터넷 없이도 돼요.</span>
    </div>
  </div>`;
}
let audioCtx = null, beepTimer = null;
function unlockAudio() { try { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); if (audioCtx.state === 'suspended') audioCtx.resume(); } catch (e) {} }
function beep() {
  if (!audioCtx) return;
  [0, .25].forEach((dt) => {
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.frequency.value = 880; o.connect(g); g.connect(audioCtx.destination);
    const t0 = audioCtx.currentTime + dt; g.gain.setValueAtTime(.0001, t0); g.gain.exponentialRampToValueAtTime(.4, t0 + .02); g.gain.exponentialRampToValueAtTime(.0001, t0 + .2);
    o.start(t0); o.stop(t0 + .22);
  });
}
function fireAlarm(ds) {
  const s = sunTimes(ds).set;
  const el = $('#alarm');
  el.innerHTML = `${svg('sun', 64, '#F08A5D')}
    <div class="stack" style="gap:6px;align-items:center"><span style="color:#CDEDE5">곧 해가 져요</span>
    <span class="num" style="font-size:64px;font-weight:700;line-height:1">${fmtTime(s)}</span>
    <span style="color:#D3F0E8">일몰 ${S.alarm.offset}분 전이에요. 해변으로 가 볼까요?</span></div>
    <button class="btn" data-act="stopAlarm" style="background:#F08A5D;color:#17806D;width:200px">알람 끄기</button>`;
  el.style.display = 'flex';
  beep(); clearInterval(beepTimer); beepTimer = setInterval(beep, 1200);
  try { if ('Notification' in window && Notification.permission === 'granted') new Notification('보라카이 선셋 알람', { body: `${fmtTime(s)} 일몰 · ${S.alarm.offset}분 전` }); } catch (e) {}
  if (navigator.vibrate) try { navigator.vibrate([400, 200, 400]); } catch (e) {}
}
function checkAlarms() {
  const now = new Date();
  for (const d of tripDays()) {
    if (S.alarm.off[d] || S.alarm.fired[d]) continue;
    const s = sunTimes(d).set, at = new Date(s - S.alarm.offset * 60000);
    if (now >= at && now < s) { S.alarm.fired[d] = true; save(); fireAlarm(d); }
  }
}
function makeICS() {
  const z = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
  const ev = tripDays().filter((d) => !S.alarm.off[d]).map((d) => {
    const s = sunTimes(d).set;
    return ['BEGIN:VEVENT', `UID:sunset-${d}@boracay-app`, `DTSTAMP:${z(new Date())}`, `DTSTART:${z(new Date(s - 30*60000))}`, `DTEND:${z(s)}`,
      `SUMMARY:보라카이 선셋 ${fmtTime(s)}`, 'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:선셋 알람', `TRIGGER;VALUE=DATE-TIME:${z(new Date(s - S.alarm.offset*60000))}`, 'END:VALARM', 'END:VEVENT'].join('\r\n');
  });
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//boracay-app//KO', ...ev, 'END:VCALENDAR'].join('\r\n');
}

/* ========= 티켓 ========= */
/* ========= 장소 ========= */
/* ========= 지도: 직접 그린 보라카이 지도 (기본) + Mapbox (선택) ========= */
const GEO = { minLng: 121.900, maxLng: 121.955, minLat: 11.934, maxLat: 12.004 };
const KY = 10000, KX = KY * Math.cos(11.97 * Math.PI / 180);
const MW = (GEO.maxLng - GEO.minLng) * KX, MH = (GEO.maxLat - GEO.minLat) * KY;
const proj = (lng, lat) => [(lng - GEO.minLng) * KX, (GEO.maxLat - lat) * KY];
const unproj = (x, y) => ({ lng: x / KX + GEO.minLng, lat: GEO.maxLat - y / KY });
const G = '#17806D', GL = '#2DAA8A';
const LABELS = [
  { t:'Station 2', lng:121.9290, lat:11.9583, big:true },
  { t:'Station 1', lng:121.9250, lat:11.9690 },
  { t:'Station 3', lng:121.9335, lat:11.9515 },
  { t:'Cagban 선착장', lng:121.9405, lat:11.9375 }
];
const PALM = '<path d="M0 0 Q2.5 -9 0.5 -19" stroke="#A47447" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M0.5 -19 q-8 -5 -14 1 q7 -2 14 -1z M0.5 -19 q8 -5 14 1 q-7 -2 -14 -1z M0.5 -19 q-3 -8 -10 -10 q5 3 10 10z M0.5 -19 q3 -8 10 -10 q-5 3 -10 10z M0.5 -19 q0 -7 -2 -11 q3 4 2 11z" fill="#3DAE68"/>';
const UMB = '<path d="M0 0 V-11" stroke="#8A6A48" stroke-width="1.5"/><path d="M-9 -10 Q0 -20 9 -10 Z" fill="#2BB0C6"/><path d="M-3 -10 Q0 -19 3 -10 Z" fill="#F7D774"/>';
let view = null, userPos = null, geoWatch = null, mapHeaderBuilt = false;
const ptrs = new Map(); let drag = null, pressTimer = null;

function headerH() { const t = $('#mapTop'); return t ? t.offsetTop + t.offsetHeight : 110; }
function bottomH() { const c = $('#mapCard'); return c && c.offsetHeight ? c.offsetHeight + 24 : 110; }
function fitView() {
  const el = $('#svgmap'), cw = el.clientWidth, ch = el.clientHeight, top = headerH() + 6, bottom = bottomH();
  const fk = Math.min(cw / MW, (ch - top - bottom) / MH) * 1.05, k = fk * 2.1;
  const [cx, cy] = proj(121.9235, 11.9650); // 화이트비치 Station 1~2 중심으로 시작
  view = { k, min: fk * 0.8, max: fk * 8, tx: cw / 2 - cx * k, ty: top + (ch - top - bottom) / 2 - cy * k };
}
const toScreen = (lng, lat) => { const [x, y] = proj(lng, lat); return [x * view.k + view.tx, y * view.k + view.ty]; };
const pts = (arr) => arr.map(([lng, lat]) => proj(lng, lat).map((v) => v.toFixed(1)).join(',')).join(' ');
const spts = (arr) => arr.map(([lng, lat]) => toScreen(lng, lat).map((v) => v.toFixed(1)).join(',')).join(' ');
function lerpLine(line, n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n * (line.length - 1), j = Math.floor(t), f = t - j, a = line[j], b = line[Math.min(j + 1, line.length - 1)];
    out.push([a[0] + (b[0] - a[0]) * f - 0.0006, a[1] + (b[1] - a[1]) * f - 0.0002]);
  }
  return out;
}
const routeStops = () => sortTodos(todosOf(S.ui.day).slice()).map((t) => placeById(t.placeId)).filter((p) => p && p.lat);

// 섬·해변·도로는 지도 좌표로 한 번만 만들어 두고, 확대 정도에 따라 골목 표시만 바꿈
let _mapBase = null;
function mapBaseSvg(k) {
  if (!_mapBase) {
    const line = (g) => pts(g);
    _mapBase = {
      land: `<polygon points="${pts(ISLAND)}" fill="#A9DCE2" stroke="#A9DCE2" stroke-width="22" stroke-linejoin="round"/>
        <polygon points="${pts(ISLAND)}" fill="#F3F1EA" stroke="#E2DCCB" stroke-width="1" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>
        <polygon points="${pts(ISLAND)}" fill="none" stroke="#E4F2E4" stroke-width="10" stroke-linejoin="round" opacity=".7"/>
        ${BEACHES.map((bch) => `<polygon points="${pts(bch)}" fill="#F4E3B4" stroke="#F4E3B4" stroke-width="6" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>`).join('')}`,
      minor: ROADS[1].map((g) => `<polyline points="${line(g)}" vector-effect="non-scaling-stroke"/>`).join(''),
      path: ROADS[2].map((g) => `<polyline points="${line(g)}" vector-effect="non-scaling-stroke"/>`).join(''),
      main: ROADS[0].map((g) => `<polyline points="${line(g)}" vector-effect="non-scaling-stroke"/>`).join('')
    };
  }
  const zf = k / (view.min / 0.8), mw = zf > 2.2 ? 3 : zf > 1.4 ? 2.2 : 1.4, Mw = zf > 2.2 ? 6 : 4.5;
  return _mapBase.land
    + `<g fill="none" stroke-linecap="round" stroke-linejoin="round">`
    + `<g stroke="#DDD4C1" stroke-width="${mw + 1.6}">${_mapBase.minor}</g>`
    + `<g stroke="#D3C7AC" stroke-width="${Mw + 2}">${_mapBase.main}</g>`
    + `<g stroke="#FFFFFF" stroke-width="${mw}">${_mapBase.minor}</g>`
    + `<g stroke="#C9BB9C" stroke-width="1.4" stroke-dasharray="3 3">${_mapBase.path}</g>`
    + `<g stroke="#FFFFFF" stroke-width="${Mw}">${_mapBase.main}</g></g>`;
}
const baseTier = (k) => { const zf = k / (view.min / 0.8); return zf > 2.2 ? 2 : zf > 1.4 ? 1 : 0; };
let svgDom = null, drawRaf = 0;
// 손가락으로 움직이는 동안에는 한 프레임에 한 번만 다시 그림
function requestDraw() { if (!drawRaf) drawRaf = requestAnimationFrame(() => { drawRaf = 0; drawSvgMap(); }); }
function drawSvgMap() {
  if (drawRaf) { cancelAnimationFrame(drawRaf); drawRaf = 0; }
  const el = $('#svgmap'); if (!el.clientWidth) return;
  if (!view) fitView();
  const k = view.k, f = S.ui.placeFilter, zoomed = k > view.min / 0.8 * 1.4;
  const stops = routeStops(), stopIds = stops.map((p) => p.id), sel = S.ui.selPlace;
  const track = (S.track && S.track[S.ui.day]) || [];
  const others = S.places.filter((p) => p.lat && !stopIds.includes(p.id) && (f === 'all' || p.cat === f)).map((p) => {
    const [x, y] = toScreen(p.lng, p.lat), on = p.id === sel;
    return `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})" data-act="selPlace" data-id="${p.id}" role="button" aria-label="${esc(p.name)}" style="cursor:pointer">
      <circle r="22" fill="transparent"/>${on ? `<circle r="17" fill="${GL}" opacity=".25"/>` : ''}
      <circle r="12" fill="#fff" stroke="${on ? G : '#9CC9BF'}" stroke-width="2"/>
      <g transform="translate(-7,-7)">${svg(CAT_ICON[p.cat] || 'pin', 14, G, 2.2)}</g>
      ${zoomed || on ? `<text class="plabel" pointer-events="none" y="26" text-anchor="middle">${esc(p.name)}</text>` : ''}</g>`;
  }).join('');
  const nums = stops.map((p, i) => { const [x, y] = toScreen(p.lng, p.lat), on = p.id === sel;
    return `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})" data-act="selPlace" data-id="${p.id}" role="button" aria-label="${i + 1}번 ${esc(p.name)}" style="cursor:pointer">
      <path d="M0 0 C-5 -7 -14 -12 -14 -22 A14 14 0 1 1 14 -22 C14 -12 5 -7 0 0 Z" fill="${on ? G : GL}" stroke="#fff" stroke-width="2.5"/>
      <text y="-17" text-anchor="middle" style="font:700 14px 'Space Grotesk',sans-serif;fill:#fff">${i + 1}</text>
      ${zoomed || on ? `<text class="plabel" pointer-events="none" y="16" text-anchor="middle">${esc(p.name)}</text>` : ''}</g>`; }).join('');
  let me = '';
  if (userPos) { const [x, y] = toScreen(userPos.lng, userPos.lat);
    me = `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})" pointer-events="none">
      <circle r="26" fill="rgba(26,115,232,.16)"/><circle r="9" fill="#1A73E8" stroke="#fff" stroke-width="3.5"/>
      <g transform="translate(0,-34)"><rect x="-34" y="-15" width="68" height="28" rx="14" fill="#1A73E8"/><path d="M-6 12 L0 19 L6 12 Z" fill="#1A73E8"/>
      <text y="5" text-anchor="middle" style="font:700 13px 'Noto Sans KR',sans-serif;fill:#fff">내 위치</text></g></g>`; }
  const W = el.clientWidth, H = el.clientHeight;
  if (!svgDom || svgDom.root.parentNode !== el || svgDom.w !== W || svgDom.h !== H) {
    el.innerHTML = `<svg width="${W}" height="${H}"><rect width="100%" height="100%" fill="#BFE6EA"/><g class="mbase"></g><g class="mover"></g></svg>`;
    const root = el.firstChild; svgDom = { root, w: W, h: H, base: root.querySelector('.mbase'), over: root.querySelector('.mover'), tier: -1 };
  }
  const tier = baseTier(k);
  if (svgDom.tier !== tier) { svgDom.base.innerHTML = mapBaseSvg(k); svgDom.tier = tier; }
  svgDom.base.setAttribute('transform', `translate(${view.tx.toFixed(1)},${view.ty.toFixed(1)}) scale(${k.toFixed(4)})`);
  svgDom.over.innerHTML = `
    ${PALMS.map(([lng, lat]) => { const [x, y] = toScreen(lng, lat); return `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})" pointer-events="none">${PALM}</g>`; }).join('')}
    ${UMBS.map(([lng, lat]) => { const [x, y] = toScreen(lng, lat); return `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})" pointer-events="none">${UMB}</g>`; }).join('')}
    ${(() => { const [x, y] = toScreen(121.9185, 11.9590); return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" style="font:italic 700 ${Math.round(16 + 6 * Math.min(1, (k / (view.min / 0.8) - 1)))}px Georgia,'Noto Sans KR',serif;fill:#1C3D44" pointer-events="none"><tspan x="${x.toFixed(1)}">White</tspan><tspan x="${x.toFixed(1)}" dy="1.15em">Beach</tspan></text>`; })()}
    ${LABELS.filter((l) => l.big || zoomed).map((l) => { const [x, y] = toScreen(l.lng, l.lat); return `<text class="${l.big ? 'blabel' : 'slabel'}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" pointer-events="none">${l.t}</text>`; }).join('')}
    ${track.length > 1 ? `<polyline points="${spts(track)}" fill="none" stroke="${G}" stroke-width="4" stroke-dasharray="1 8" stroke-linecap="round" pointer-events="none"/>` : ''}
    ${stops.length > 1 && !NAV ? `<polyline points="${spts(stops.map((p) => [p.lng, p.lat]))}" fill="none" stroke="${GL}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" pointer-events="none"/>` : ''}
    ${NAV ? `<polyline points="${spts(NAV.geo)}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" pointer-events="none"/><polyline points="${spts(NAV.geo)}" fill="none" stroke="#1A73E8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" pointer-events="none"/>
      ${!NAV.live ? (() => { const [ox, oy] = toScreen(NAV.origin.lng, NAV.origin.lat); return `<circle cx="${ox}" cy="${oy}" r="8" fill="#fff" stroke="#1A73E8" stroke-width="4" pointer-events="none"/>`; })() : ''}` : ''}
    ${others}${nums}${me}`;
}
function zoomAt(factor, cx, cy) {
  const nk = Math.max(view.min, Math.min(view.max, view.k * factor)), r = nk / view.k;
  view.tx = cx - (cx - view.tx) * r; view.ty = cy - (cy - view.ty) * r; view.k = nk;
  clampView(); requestDraw();
}
function clampView() {
  const el = $('#svgmap'), cw = el.clientWidth, ch = el.clientHeight, w = MW * view.k, h = MH * view.k, m = 80;
  view.tx = Math.min(cw - m, Math.max(m - w, view.tx));
  view.ty = Math.min(ch - m, Math.max(m - h, view.ty));
}
(function bindSvgMap() {
  const el = $('#svgmap');
  const rel = (x, y) => { const r = el.getBoundingClientRect(); return [x - r.left, y - r.top]; };
  const startGesture = () => {
    // 손가락 수가 바뀔 때마다 기준점을 새로 잡아서 화면이 튀지 않게 함
    if (ptrs.size >= 2) { drag.pinch = pinchDist(); drag.c = pinchCenter(); drag.moved = true; clearTimeout(pressTimer); }
  };
  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.size === 1) drag = { moved: false, sx: e.clientX, sy: e.clientY, pinch: null, c: null, long: false, onPin: !!e.target.closest('[data-act]') };
    else { if (!drag) drag = { moved: true, sx: e.clientX, sy: e.clientY, long: false }; startGesture(); try { el.setPointerCapture(e.pointerId); } catch (er) {} }
    clearTimeout(pressTimer);
    if (ptrs.size === 1 && !drag.onPin) {
      pressTimer = setTimeout(() => {
        if (!drag || drag.moved || ptrs.size !== 1) return;
        drag.long = true;
        const [px, py] = rel(drag.sx, drag.sy), x = (px - view.tx) / view.k, y = (py - view.ty) / view.k;
        if (x >= 0 && y >= 0 && x <= MW && y <= MH) addPlaceForm(unproj(x, y));
      }, 550);
    }
  });
  el.addEventListener('pointermove', (e) => {
    if (!ptrs.has(e.pointerId) || !view || !drag) return;
    const prev = ptrs.get(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > 6) {
      drag.moved = true; clearTimeout(pressTimer);
      // 움직이기 시작하면 손가락을 지도에 묶어 둠 (핀 위에서 시작해도, 다시 그려져도 끊기지 않게)
      for (const id of ptrs.keys()) { try { el.setPointerCapture(id); } catch (er) {} }
    }
    if (!drag.moved) return;
    if (ptrs.size >= 2) {
      const d = pinchDist(), c = pinchCenter();
      if (drag.pinch && drag.c) {
        const [cx, cy] = rel(c.x, c.y);
        view.tx += c.x - drag.c.x; view.ty += c.y - drag.c.y; // 두 손가락으로 끌기
        const nk = Math.max(view.min, Math.min(view.max, view.k * d / drag.pinch)), r = nk / view.k;
        view.tx = cx - (cx - view.tx) * r; view.ty = cy - (cy - view.ty) * r; view.k = nk;
        clampView(); requestDraw();
      }
      drag.pinch = d; drag.c = c;
    } else {
      view.tx += e.clientX - prev.x; view.ty += e.clientY - prev.y; clampView(); requestDraw();
    }
  });
  const end = (e) => {
    if (!ptrs.has(e.pointerId)) return;
    clearTimeout(pressTimer);
    const wasTap = drag && !drag.moved && !drag.long && ptrs.size === 1;
    ptrs.delete(e.pointerId);
    try { el.releasePointerCapture(e.pointerId); } catch (er) {}
    if (ptrs.size >= 2) startGesture();
    else if (ptrs.size === 1 && drag) { drag.pinch = null; drag.c = null; }
    if (!ptrs.size) {
      if (drag && drag.moved) { drag.justMoved = Date.now(); }
      if (wasTap && e.type === 'pointerup' && !drag.onPin && S.ui.selPlace) { S.ui.selPlace = null; save(); drawSvgMap(); renderMapCard(); }
    }
  };
  el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end); el.addEventListener('lostpointercapture', (e) => { if (e.target === el) end(e); });
  // 끌고 난 직후 손을 뗄 때 핀이 눌리는 것 막기
  el.addEventListener('click', (e) => { if (drag && drag.justMoved && Date.now() - drag.justMoved < 350) { e.stopPropagation(); e.preventDefault(); } }, true);
  let lastTap = 0, lastPtrType = 'mouse';
  el.addEventListener('pointerdown', (e) => { lastPtrType = e.pointerType; }, true);
  el.addEventListener('pointerup', (e) => { // 두 번 톡 = 확대 (아이폰은 dblclick이 안 옴)
    if (e.pointerType !== 'touch' || (drag && drag.moved) || ptrs.size) return;
    const now = Date.now();
    if (now - lastTap < 300 && !e.target.closest('[data-act]')) { const [x, y] = rel(e.clientX, e.clientY); zoomAt(1.8, x, y); lastTap = 0; } else lastTap = now;
  });
  el.addEventListener('dblclick', (e) => { if (lastPtrType === 'touch') return; const [x, y] = rel(e.clientX, e.clientY); zoomAt(1.6, x, y); });
  el.addEventListener('wheel', (e) => {
    e.preventDefault(); if (!view) return;
    const [x, y] = rel(e.clientX, e.clientY), dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
    zoomAt(Math.exp(-Math.max(-60, Math.min(60, dy)) * (e.ctrlKey ? 0.012 : 0.004)), x, y);
  }, { passive: false });
  // 아이폰 Safari가 지도 대신 화면 전체를 확대해 버리는 것 막기
  ['gesturestart', 'gesturechange', 'gestureend'].forEach((ev) => document.addEventListener(ev, (e) => e.preventDefault(), { passive: false }));
  window.addEventListener('resize', () => { if (S.ui.tab === 'map' && S.ui.mapMode !== 'mapbox' && view) { clampView(); drawSvgMap(); } });
})();
function pinchDist() { const [a, b] = [...ptrs.values()]; return Math.hypot(a.x - b.x, a.y - b.y); }
function pinchCenter() { const [a, b] = [...ptrs.values()]; return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }
const insideBoracay = (p) => p.lat > GEO.minLat && p.lat < GEO.maxLat && p.lng > GEO.minLng && p.lng < GEO.maxLng;
function locate(silent) {
  if (!navigator.geolocation) { silent || toast('이 기기에서는 위치를 쓸 수 없어요'); return; }
  if (geoWatch !== null) { if (userPos && insideBoracay(userPos)) centerOn(userPos); else silent || toast('지금은 보라카이 밖에 있어요'); return; }
  let first = true;
  try {
    geoWatch = navigator.geolocation.watchPosition((pos) => {
      userPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      if (insideBoracay(userPos)) recordTrack(userPos);
      navUpdate();
      if (first) { first = false; if (!silent) insideBoracay(userPos) ? centerOn(userPos) : toast('지금은 보라카이 밖에 있어요. 도착하면 지도에 표시돼요'); }
      refreshMeMarker();
    }, () => { geoWatch = null; silent || toast('위치 권한이 없어요. 브라우저에서 직접 열고 위치를 허용해 주세요'); }, { enableHighAccuracy: true });
  } catch (e) { silent || toast('이 화면에서는 위치를 쓸 수 없어요'); }
}
function recordTrack(p) {
  S.track = S.track || {};
  const day = todayStr(), list = S.track[day] = S.track[day] || [], last = list[list.length - 1];
  const far = !last || Math.hypot((p.lng - last[0]) * 108000, (p.lat - last[1]) * 111000) > 20; // 20m 이상 움직였을 때만
  if (far) { list.push([+p.lng.toFixed(6), +p.lat.toFixed(6)]); if (list.length > 2000) list.shift(); save(); }
}
try { navigator.permissions && navigator.permissions.query({ name: 'geolocation' }).then((r) => { if (r.state === 'granted') locate(true); }).catch(() => {}); } catch (e) {}
function centerOn(p) {
  whenMapReady(() => map.flyTo({ center: [p.lng, p.lat], zoom: Math.max(map.getZoom(), 16), padding: { top: headerH(), bottom: bottomH(), left: 0, right: 0 } }));
}

/* ----- 지도 탭 화면 (헤더 · 범례 · 장소 카드) ----- */
const MAP_CATS = [['food', '맛집', 'food'], ['cafe', '카페', 'cafe'], ['beach', '해변', 'wave']];
const favCount = () => S.places.filter((p) => p.fav).length;
function buildMapHeader() {
  $('#mapTop').innerHTML = `
    <div class="mtrow">
      <div style="position:relative;flex:1;min-width:0">
        <label class="msearch">${svg('search', 18, '#1C2B2E')}
          <input id="placeSearch" type="search" placeholder="장소 검색" aria-label="장소 검색" autocomplete="off">
          <span class="mday"><b id="mapTripName">보라카이</b> <span id="mapDayLabel"></span></span></label>
        <div id="searchResults" class="sresults" style="display:none"></div>
      </div>
      <button class="mfab" data-act="tab" data-tab="sunset" aria-label="선셋 알람">${svg('bell', 21, '#1C2B2E')}</button>
    </div>
    <div class="mcats" id="mapCats"></div>`;
  $('#placeSearch').addEventListener('input', renderSearch);
  $('#placeSearch').addEventListener('focus', renderSearch);
  $('#placeSearch').addEventListener('blur', () => setTimeout(() => { $('#searchResults').style.display = 'none'; }, 200));
  mapHeaderBuilt = true;
}
function renderSearch() {
  const q = $('#placeSearch').value.trim().toLowerCase(), box = $('#searchResults');
  if (!q) { box.style.display = 'none'; return; }
  const hits = S.places.filter((p) => (p.name + ' ' + (p.area || '') + ' ' + (CATS[p.cat] || '')).toLowerCase().includes(q)).slice(0, 6);
  box.innerHTML = hits.length ? hits.map((p) => `<button data-act="searchPick" data-id="${p.id}">${svg(CAT_ICON[p.cat] || 'pin', 18, G)}<span><b>${esc(p.name)}</b><span class="small muted"> · ${esc(p.area || CATS[p.cat])}</span></span></button>`).join('')
    : `<div class="small muted" style="padding:14px">"${esc(q)}" 장소가 없어요. 지도를 길게 눌러 추가해 보세요.</div>`;
  box.style.display = 'block';
}
function renderMapCats() {
  const f = S.ui.placeFilter;
  $('#mapCats').innerHTML = `<button class="mcat fav" data-act="favSheet">${svg('heart', 15, '#E5484D', 2.4)}즐겨찾기 <span class="muted" style="font-weight:500">${favCount()}</span></button>` + MAP_CATS.map(([k, label, ic]) =>
    `<button class="mcat ${f === k ? 'on' : ''}" data-act="pfilter" data-f="${f === k ? 'all' : k}" aria-pressed="${f === k}">${svg(ic, 16, f === k ? '#fff' : G)}${label}</button>`).join('');
}
const routeOn = () => false; // 지도 탭의 동선 표시는 없앰 (홈 지도에서만 오늘 동선을 보여 줌)
const trackOn = () => S.ui.showTrack !== false;
function renderMapLegend() {
  $('#mapLegend').innerHTML = '';
  $('#mapLocate').innerHTML = `<button data-act="locate" aria-label="내 위치로">${svg('crosshair', 22, '#1C2B2E')}</button>`;
}
function routeSheet() {
  const days = tripDays();
  openSheet(`<h2 style="font-size:20px;margin-bottom:12px">지도에 표시할 동선</h2>
    <div class="stack" style="gap:8px">${days.map((d) => { const n = sortTodos(todosOf(d).slice()).filter((x) => { const p = placeById(x.placeId); return p && p.lat; }).length, on = routeOn() && d === S.ui.day;
      return `<button class="card row rday ${on ? 'on' : ''}" data-act="routeDay" data-day="${d}"><b class="num" style="width:34px">D${dayIndex(d)}</b><span style="flex:1;text-align:left">${fmtDate(d)}${d === currentDay() && todayStr() >= S.trip.start ? ' · 오늘' : ''}</span><span class="muted small">${n ? n + '곳' : '장소 없음'}</span>${on ? svg('check', 16, G, 3) : ''}</button>`; }).join('')}</div>
    <div class="between" style="margin-top:14px;gap:10px">
      <button class="btn ghost" data-act="trackToggle" style="flex:1;height:44px">${trackOn() ? '이동 기록 숨기기' : '이동 기록 보기'}</button>
      ${routeOn() ? '<button class="btn ghost" data-act="routeOff" style="flex:1;height:44px">동선 숨기기</button>' : ''}
    </div>`);
}
function fitRoute() {
  const pts = routeStops().map((p) => [p.lng, p.lat]);
  if (!pts.length) return;
  whenMapReady(() => {
    if (pts.length === 1) { map.easeTo({ center: pts[0], zoom: Math.max(map.getZoom(), 15.5), padding: { top: headerH(), bottom: bottomH(), left: 0, right: 0 } }); return; }
    const xs = pts.map((c) => c[0]), ys = pts.map((c) => c[1]);
    map.fitBounds([[Math.min(...xs), Math.min(...ys)], [Math.max(...xs), Math.max(...ys)]], { padding: { top: headerH() + 30, bottom: bottomH() + 40, left: 50, right: 50 }, maxZoom: 16.5 });
  });
}
function placeMapFloat() {
  const card = $('#mapCard'), b = (card.offsetHeight ? card.offsetHeight + 22 : 22);
  $('#mapLegend').style.bottom = b + 'px'; $('#mapLocate').style.bottom = b + 'px';
  const oa = $('.osmattr'); if (oa) oa.style.bottom = (b - 16) + 'px';
  $('#mapView').style.setProperty('--mfloat', (b - 14) + 'px');
}
function renderMapCard() { renderMapCardInner(); placeMapFloat(); }
function renderMapCardInner() {
  const card = $('#mapCard');
  const pinT = S.ui.pinTodo && findTodo(S.ui.pinTodo);
  $('#mapLegend').style.display = NAV ? 'none' : '';
  if (NAV) { card.innerHTML = navCard(); return; }
  if (pinT) { card.innerHTML = `<div class="mcard" style="flex-direction:column;align-items:stretch;gap:8px">
      <span style="font-size:15px"><b>'${esc(pinT.title)}'</b> 위치를 지도에서 <b>길게 눌러</b> 정해 주세요</span>
      <button class="btn ghost" data-act="cancelPin" style="height:38px">취소</button></div>`; return; }
  if (POI) { card.innerHTML = poiCard(); const slot = $('#poiGSlot'); if (slot && POI.gel) slot.appendChild(POI.gel); return; }
  const p = placeById(S.ui.selPlace);
  if (!p) {
    const st = routeOn() ? routeStops() : [];
    card.innerHTML = st.length ? `<div class="rstrip">${st.map((q, i) => `<button data-act="selPlace" data-id="${q.id}" class="rchip"><i>${i + 1}</i>${esc(q.name)}</button>`).join('')}</div>` : '';
    return;
  }
  if (false) { card.innerHTML = `<div class="mhint">지도를 길게 누르면 장소를 추가할 수 있어요</div>`; return; }
  const inPlan = routeStops().some((x) => x.id === p.id);
  if (GOOGLE_KEY && !gAuthFail && p.lat) {
    const g = placeG(p);
    card.innerHTML = `<div class="mcard" style="flex-direction:column;align-items:stretch;gap:8px">
      <div class="between" style="gap:6px"><button data-act="openPlace" data-id="${p.id}" class="row" style="border:0;background:none;padding:0;text-align:left;flex:1;min-width:0;gap:4px">
        <span style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><b style="font-size:16px">${esc(p.name)}</b><span class="muted" style="font-size:12px"> · ${esc(p.area || CATS[p.cat] || '')}</span></span>
        ${svg('chev', 16, '#1C2B2E')}</button>
        <button class="icon" data-act="favToggle" data-id="${p.id}" aria-label="즐겨찾기" style="width:32px;height:32px;flex-shrink:0">${svg('heart', 18, p.fav ? '#E5484D' : '#9AA5A7', 2.2)}</button>
        <button class="icon" data-act="selClear" aria-label="닫기" style="width:32px;height:32px;flex-shrink:0">${svg('close', 16, '#5B6B6E')}</button></div>
      ${g.state === 'ok' ? '<div id="ownGSlot" class="poig"></div>' : `<div class="poig-msg">${g.state === 'loading' ? 'Google 정보 찾는 중…' : g.state === 'none' ? 'Google에서 이 장소를 찾지 못했어요' : 'Google 정보를 불러오지 못했어요'}</div>`}
      <div class="between" style="gap:6px">
        <span class="row" style="gap:12px"><button data-act="openPlace" data-id="${p.id}" class="poilink">메뉴·가격 ›</button>${g.state === 'ok' ? `<button data-act="gFull" data-id="${p.id}" class="poilink">리뷰·사진 ›</button>` : ''}<button data-act="gOther" data-id="${p.id}" class="poilink" style="color:#5B6B6E">${g.state === 'ok' ? '다른 곳?' : '근처 찾기'}</button></span>
        <span class="row" style="gap:6px"><button data-act="navTo" data-id="${p.id}" aria-label="길찾기" class="mbtn" style="background:#EEF4FD;color:#1A73E8;padding:0 12px">${svg('nav', 16, '#1A73E8')}</button>
        <button data-act="placeToTodo" data-id="${p.id}" class="mbtn">${svg('plus', 16, '#fff', 2.6)}${inPlan ? '또 추가' : '일정에 추가'}</button></span>
      </div></div>`;
    const slot = $('#ownGSlot'); if (slot && g.el) slot.appendChild(g.el);
    return;
  }
  card.innerHTML = `<div class="mcard">
    <button data-act="openPlace" data-id="${p.id}" class="mthumb" aria-label="${esc(p.name)} 사진">${p.photo ? `<img data-img="${p.photo}" alt="">` : svg(CAT_ICON[p.cat] || 'pin', 26, G, 1.8)}</button>
    <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:4px">
      <button data-act="openPlace" data-id="${p.id}" class="between" style="border:0;background:none;padding:0;text-align:left;width:100%">
        <span style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><b style="font-size:16px">${esc(p.name)}</b><span class="muted" style="font-size:12px"> · ${esc(p.area || CATS[p.cat] || '')}</span></span>
        ${svg('chev', 20, '#1C2B2E')}</button>
      <div class="between" style="gap:8px">
        <button data-act="openPlace" data-id="${p.id}" style="border:0;background:none;padding:0;color:${G};font-weight:700;font-size:13px;white-space:nowrap;min-height:36px">메뉴·가격 ›</button>
        <span class="row" style="gap:6px">${p.lat ? `<button data-act="navTo" data-id="${p.id}" aria-label="길찾기" class="mbtn" style="background:#EEF4FD;color:#1A73E8;padding:0 12px">${svg('nav', 16, '#1A73E8')}</button>` : ''}
        <button data-act="placeToTodo" data-id="${p.id}" class="mbtn">${svg('plus', 16, '#fff', 2.6)}${inPlan ? '또 추가' : '일정에 추가'}</button></span>
      </div>
    </div></div>`;
  hydrateImages();
}

let map = null, mapState = 'idle', markers = [], numMarkers = [];
function renderMap() {
  S.ui.day = tripDays().includes(S.ui.day) ? S.ui.day : currentDay();
  if (!mapHeaderBuilt) buildMapHeader();
  const day = currentDay(), before = todayStr() < S.trip.start;
  $('#mapTripName').textContent = S.trip.city && !/boracay/i.test(S.trip.city) ? S.trip.name : '보라카이';
  $('#mapDayLabel').textContent = before ? `D-${Math.round((dateObj(S.trip.start) - dateObj(todayStr())) / 864e5)}` : `${dayIndex(day)}일차`;
  renderMapCats(); renderMapLegend(); renderMapCard();
  $('#mapbox').style.display = 'block';
  $('#mapbox').style.top = '0';
  $('#svgmap').style.display = 'none';
  $('.osmattr').style.display = 'none';
  $('#mapLocate').style.display = 'block';
  showMapFail(mapState === 'failed');
  if (mapState === 'idle') loadMapbox();
  if (mapState === 'ready') { map.resize(); refreshMap(); runMapQueue(); }
}
// 지도가 아직 준비 안 됐을 때 '지도에서 보기' 같은 동작은 준비된 뒤에 실행
const mapQueue = [];
function whenMapReady(fn) { if (map && mapState === 'ready') fn(); else mapQueue.push(fn); }
function runMapQueue() { while (map && mapState === 'ready' && mapQueue.length) { try { mapQueue.shift()(); } catch (e) {} } }
function showMapFail(on) {
  let box = $('#mapFail');
  if (!on) { if (box) box.remove(); return; }
  if (!box) { box = document.createElement('div'); box.id = 'mapFail'; $('#mapView').appendChild(box); }
  box.innerHTML = `<div class="mfail">${svg('map', 30, G)}<b>지도를 불러오지 못했어요</b><span class="small muted">인터넷 연결을 확인하고 다시 시도해 주세요.</span><button class="btn" data-act="mapRetry" style="height:44px">다시 시도</button></div>`;
}
function mapboxFailed() {
  mapState = 'failed';
  if (S.ui.tab === 'map') showMapFail(true);
}
function loadMapbox() {
  mapState = 'loading';
  if (window.mapboxgl) { initMap(); return; }
  const V = '3.34.2';
  const srcs = [`https://api.mapbox.com/mapbox-gl-js/v${V}`, `https://unpkg.com/mapbox-gl@${V}/dist`, `https://cdn.jsdelivr.net/npm/mapbox-gl@${V}/dist`];
  const tryAt = (i) => {
    if (i >= srcs.length) { mapboxFailed(); return; }
    const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = srcs[i] + '/mapbox-gl.css'; document.head.appendChild(css);
    const js = document.createElement('script'); js.src = srcs[i] + '/mapbox-gl.js';
    js.onload = () => window.mapboxgl ? initMap() : tryAt(i + 1);
    js.onerror = () => tryAt(i + 1);
    document.head.appendChild(js);
  };
  tryAt(0);
}
function initMap() {
  try {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    map = new mapboxgl.Map({ container: 'mapbox', style: MAPBOX_STYLE, center: [121.9235, 11.9650], zoom: 14.6, minZoom: 13, maxZoom: 19, maxBounds: BORACAY.bounds, attributionControl: true });
  } catch (e) { mapboxFailed(); return; }
  let loaded = false;
  map.on('load', () => {
    loaded = true; mapState = 'ready';
    if (S.ui.mbTheme !== 'original') applyAppTheme();
    const std = !!(map.getStyle().imports || []).length;
    const firstSymbol = std ? undefined : (map.getStyle().layers.find((l) => l.type === 'symbol') || {}).id;
    const empty = { type: 'FeatureCollection', features: [] };
    // 해변 모래사장 (OpenStreetMap 해변 영역, 라벨·도로 아래)
    map.addSource('beach', { type: 'geojson', data: { type: 'FeatureCollection', features: BEACHES.map((c) => ({ type: 'Feature', geometry: { type: 'Polygon', coordinates: [c.concat([c[0]])] } })) } });
    const bslot = std ? { slot: 'bottom' } : {};
    if (S.ui.mbTheme !== 'original') {
      map.addLayer(Object.assign({ id: 'app-beach', type: 'fill', source: 'beach', paint: { 'fill-color': '#F4E3B4', 'fill-opacity': 0.95 } }, bslot), firstSymbol);
      map.addLayer(Object.assign({ id: 'app-beach-edge', type: 'line', source: 'beach', layout: { 'line-join': 'round' }, paint: { 'line-color': '#F4E3B4', 'line-width': ['interpolate', ['linear'], ['zoom'], 13, 3, 16, 6, 18, 10] } }, bslot), firstSymbol);
    }
    ['track', 'route', 'nav'].forEach((id) => map.addSource(id, { type: 'geojson', data: empty }));
    map.addLayer({ id: 'track', type: 'line', source: 'track', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': G, 'line-width': 4, 'line-dasharray': [0.1, 2] } });
    map.addLayer({ id: 'route', type: 'line', source: 'route', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': GL, 'line-width': 4.5 } });
    map.addLayer({ id: 'nav-case', type: 'line', source: 'nav', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': '#fff', 'line-width': 9 } });
    map.addLayer({ id: 'nav', type: 'line', source: 'nav', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': '#1A73E8', 'line-width': 5 } });
    addDecorMarkers();
    setupPoiTap();
    const zc = () => map.getContainer().classList.toggle('z16', map.getZoom() >= 16); map.on('zoom', zc); zc();
    refreshMap();
    showMapFail(false);
    runMapQueue();
  });
  map.on('click', (e) => { if (Date.now() - poiTapAt < 450 || e.originalEvent.target.closest('[data-mb]')) return; if (POI) closePoi(); if (S.ui.selPlace) { S.ui.selPlace = null; save(); refreshMap(); } });
  // 길게 누르면 장소 추가 (그림 지도와 같은 동작)
  let lp = null;
  map.on('touchstart', (e) => { if (e.originalEvent.touches.length !== 1) return; const ll = e.lngLat; lp = setTimeout(() => addPlaceForm(ll), 550); });
  ['touchend', 'touchmove', 'dragstart', 'zoomstart'].forEach((ev) => map.on(ev, () => clearTimeout(lp)));
  map.on('contextmenu', (e) => addPlaceForm(e.lngLat));
  map.on('error', (e) => { console.warn('Mapbox:', e.error && e.error.message); if (!loaded) { try { map.remove(); } catch (er) {} map = null; mapboxFailed(); } });
  setTimeout(() => { if (!loaded && mapState !== 'failed') { try { map && map.remove(); } catch (er) {} map = null; mapboxFailed(); } }, 6000);
}
// Mapbox 지도의 색을 앱 그림 지도처럼 바꿔 칠하기
function applyAppTheme(m = map) {
  if ((m.getStyle().imports || []).length) {
    const cfg = { lightPreset:'day', colorWater:'#BFE6EA', colorLand:'#F3F1EA', colorGreenspace:'#E4F0DF', colorRoads:'#FFFFFF', colorTrunks:'#FFFFFF', colorMotorways:'#FFFFFF', colorBuildings:'#EAE5D8', colorCommercial:'#EFEADF', colorIndustrial:'#EFEADF', colorEducation:'#EFEADF', colorMedical:'#EFEADF', colorPlaceLabels:'#3E5457', colorRoadLabels:'#6B7779', colorPointOfInterestLabels:'#5B6B6E', densityPointOfInterestLabels:4, showPointOfInterestLabels:true, show3dObjects:false, show3dBuildings:false, show3dTrees:false, show3dLandmarks:false, show3dFacades:false };
    (m.getStyle().imports || []).forEach((im) => Object.entries(cfg).forEach(([k, v]) => { try { m.setConfigProperty(im.id, k, v); } catch (e) {} }));
    return;
  }
  const set = (id, prop, val) => { try { m.setPaintProperty(id, prop, val); } catch (e) {} };
  m.getStyle().layers.forEach((l) => {
    const id = l.id.toLowerCase();
    if (l.type === 'background') set(l.id, 'background-color', '#F3F1EA');
    else if (l.type === 'fill') {
      if (/water|ocean|sea/.test(id)) set(l.id, 'fill-color', '#BFE6EA');
      else if (/sand|beach/.test(id)) set(l.id, 'fill-color', '#F4E3B4');
      else if (/park|grass|wood|forest|green|scrub|national|golf|pitch/.test(id)) set(l.id, 'fill-color', '#E4F0DF');
      else if (/building/.test(id)) set(l.id, 'fill-color', '#EAE5D8');
      else if (/land|urban|residential|commercial|industrial|hillshade/.test(id)) set(l.id, 'fill-color', '#F3F1EA');
    } else if (l.type === 'fill-extrusion' && /building/.test(id)) set(l.id, 'fill-extrusion-color', '#EAE5D8');
    else if (l.type === 'line') {
      if (/water|river|stream|canal/.test(id)) set(l.id, 'line-color', '#A9DCE2');
      else if (/road|street|path|bridge|tunnel|track|pedestrian|steps|service|motorway|trunk|primary|secondary|tertiary/.test(id)) {
        set(l.id, 'line-color', /case|casing|outline/.test(id) ? '#E6E1D3' : '#FFFFFF');
      } else if (/admin|boundary/.test(id)) set(l.id, 'line-opacity', 0.3);
    } else if (l.type === 'symbol') {
      set(l.id, 'text-color', /water|ocean|sea|marine/.test(id) ? '#3E7E8A' : '#3E5457');
      set(l.id, 'text-halo-color', 'rgba(243,241,234,0.9)');
      if (/poi/.test(id)) set(l.id, 'icon-opacity', 0.55);
    }
  });
}
let decorMarkers = [], meMarker = null;
function addDecorMarkers() {
  decorMarkers.forEach((m) => m.remove()); decorMarkers = [];
  const mk = (html, ll, anchor) => { const el = document.createElement('div'); el.style.pointerEvents = 'none'; el.innerHTML = html; decorMarkers.push(new mapboxgl.Marker({ element: el, anchor: anchor || 'bottom' }).setLngLat(ll).addTo(map)); };
  PALMS.forEach((ll) => mk(`<svg width="30" height="26" viewBox="-15 -23 30 26" aria-hidden="true">${PALM}</svg>`, ll));
  UMBS.forEach((ll) => mk(`<svg width="20" height="22" viewBox="-10 -21 20 22" aria-hidden="true">${UMB}</svg>`, ll));
}
function mbPin(p, n, on) {
  if (!n && p.fav) {
    const el = document.createElement('button'); el.dataset.mb = '1'; el.setAttribute('aria-label', '즐겨찾기 ' + p.name);
    el.className = 'favpin' + (on ? ' on' : '');
    el.innerHTML = `<span class="favdot">${svg('heart', on ? 14 : 11, '#fff', 2.4)}</span><span class="favlab">${esc(p.name)}</span>`;
    el.addEventListener('click', (ev) => { ev.stopPropagation(); if (POI) closePoi(true); S.ui.selPlace = p.id; save(); refreshMap(); });
    return new mapboxgl.Marker({ element: el, anchor: 'top', offset: [0, -11] }).setLngLat([p.lng, p.lat]).addTo(map);
  }
  const el = document.createElement('button'); el.dataset.mb = '1'; el.setAttribute('aria-label', (n ? n + '번 ' : '') + p.name);
  el.style.cssText = 'border:0;background:none;padding:0;cursor:pointer;display:flex;flex-direction:column;align-items:center';
  const label = `<span style="font:500 11px 'Noto Sans KR',sans-serif;color:#1C2B2E;text-shadow:0 0 3px #fff,0 0 3px #fff;white-space:nowrap;margin-top:2px">${esc(p.name)}</span>`;
  el.innerHTML = n
    ? `<svg width="32" height="40" viewBox="-16 -38 32 40" aria-hidden="true"><path d="M0 0 C-5 -7 -14 -12 -14 -22 A14 14 0 1 1 14 -22 C14 -12 5 -7 0 0 Z" fill="${on ? G : GL}" stroke="#fff" stroke-width="2.5"/><text y="-17" text-anchor="middle" style="font:700 14px 'Space Grotesk',sans-serif;fill:#fff">${n}</text></svg>${label}`
    : `<span style="width:28px;height:28px;border-radius:50%;background:#fff;border:2px solid ${on ? G : '#9CC9BF'};display:flex;align-items:center;justify-content:center;box-shadow:${on ? '0 0 0 6px rgba(45,170,138,.25)' : 'none'}">${svg(CAT_ICON[p.cat] || 'pin', 14, G, 2.2)}</span>${label}`;
  el.addEventListener('click', (ev) => { ev.stopPropagation(); if (POI) closePoi(true); S.ui.selPlace = p.id; save(); refreshMap(); });
  return new mapboxgl.Marker({ element: el, anchor: n ? 'top' : 'center', offset: n ? [0, -40] : [0, 8] }).setLngLat([p.lng, p.lat]).addTo(map);
}
function refreshMeMarker() {
  if (!map || mapState !== 'ready') return;
  if (!(userPos && insideBoracay(userPos))) { if (meMarker) { meMarker.remove(); meMarker = null; } return; }
  if (!meMarker) {
    const el = document.createElement('div'); el.style.pointerEvents = 'none';
    el.innerHTML = `<svg width="80" height="76" viewBox="-40 -60 80 76" aria-hidden="true"><circle r="26" fill="rgba(26,115,232,.16)"/><circle r="9" fill="#1A73E8" stroke="#fff" stroke-width="3.5"/><g transform="translate(0,-34)"><rect x="-34" y="-15" width="68" height="28" rx="14" fill="#1A73E8"/><path d="M-6 12 L0 19 L6 12 Z" fill="#1A73E8"/><text y="5" text-anchor="middle" style="font:700 13px 'Noto Sans KR',sans-serif;fill:#fff">내 위치</text></g></svg>`;
    meMarker = new mapboxgl.Marker({ element: el, anchor: 'center', offset: [0, -22] }).setLngLat([userPos.lng, userPos.lat]).addTo(map);
  } else meMarker.setLngLat([userPos.lng, userPos.lat]);
}
function refreshMap() {
  if (S.ui.tab === 'map') { renderMapCard(); renderMapLegend(); }
  if (mapState !== 'ready') return;
  markers.forEach((m) => m.remove()); numMarkers.forEach((m) => m.remove()); markers = []; numMarkers = [];
  const f = S.ui.placeFilter, stops = routeOn() ? routeStops() : [], ids = stops.map((p) => p.id);
  // 지도에는 그날 일정(번호 핀)만 크게 표시. 다른 저장 장소는 맛집·카페 버튼을 눌렀을 때나 고른 장소만 보여 줌
  S.places.filter((p) => p.lat && !ids.includes(p.id) && ((f === 'fav' ? p.fav : f !== 'all' ? p.cat === f : p.fav) || p.id === S.ui.selPlace)).forEach((p) => markers.push(mbPin(p, 0, p.id === S.ui.selPlace)));
  stops.forEach((p, i) => numMarkers.push(mbPin(p, i + 1, p.id === S.ui.selPlace)));
  const track = (trackOn() && S.track && S.track[S.ui.day]) || [];
  map.getSource('track').setData({ type: 'Feature', geometry: { type: 'LineString', coordinates: track.length > 1 ? track : [] } });
  map.getSource('route').setData({ type: 'Feature', geometry: { type: 'LineString', coordinates: NAV ? [] : stops.map((p) => [p.lng, p.lat]) } });
  map.getSource('nav').setData(NAV ? { type: 'Feature', geometry: { type: 'LineString', coordinates: NAV.geo } } : { type: 'FeatureCollection', features: [] });
  refreshMeMarker();
}

/* ========= 지도 위 가게 누르기 → Google 장소 정보 ========= */
let POI = null, poiMarker = null, poiTapAt = 0, gReady = null, gAuthFail = false;
const POI_GTYPE = { food: ['restaurant'], cafe: ['cafe'], stay: ['lodging'], shop: ['store'] };
const POI_QUERY = { food: 'restaurant', cafe: 'cafe', stay: 'hotel', shop: 'shop', spot: 'tourist attraction', etc: 'place' };
function poiCat(cls, maki) {
  if (cls === 'food_and_drink') return /cafe|coffee|bakery|ice-cream/.test(maki || '') ? 'cafe' : 'food';
  if (cls === 'lodging') return 'stay';
  if (cls === 'store_like') return 'shop';
  if (/beach/.test(maki || '')) return 'beach';
  if (/park|landmark|monument|attraction|viewpoint|museum/.test((cls || '') + (maki || ''))) return 'spot';
  return 'etc';
}
function setupPoiTap() {
  if (!map.addInteraction) return;
  try { map.setConfigProperty('basemap', 'showPointOfInterestLabels', true); map.setConfigProperty('basemap', 'densityPointOfInterestLabels', 4); } catch (e) {}
  const target = { featuresetId: 'poi', importId: 'basemap' };
  try {
    map.addInteraction('poi-tap', { type: 'click', target, handler: (e) => {
      poiTapAt = Date.now();
      const f = e.feature, c = f.geometry && f.geometry.coordinates; if (!c) return true;
      openPoi({ name: (f.properties && f.properties.name) || '', lng: c[0], lat: c[1], cat: poiCat(f.properties.class, f.properties.maki) });
      return true;
    } });
    map.addInteraction('poi-in', { type: 'mouseenter', target, handler: () => { map.getCanvas().style.cursor = 'pointer'; } });
    map.addInteraction('poi-out', { type: 'mouseleave', target, handler: () => { map.getCanvas().style.cursor = ''; } });
  } catch (e) { console.warn('POI tap', e); }
}
function openPoi(p) {
  // 이미 내 장소 목록에 있는 가게면 그 장소를 보여 줌
  const near = (q) => Math.hypot((q.lng - p.lng) * 108900, (q.lat - p.lat) * 110600);
  const mine = p.name && S.places.find((q) => q.lat && near(q) < 60 && q.name.trim().toLowerCase() === p.name.trim().toLowerCase());
  if (mine) { closePoi(true); S.ui.selPlace = mine.id; save(); refreshMap(); return; }
  S.ui.selPlace = null;
  POI = Object.assign({ gid: null, gstate: GOOGLE_KEY ? 'loading' : 'nokey', gel: null, gname: '' }, p);
  if (!poiMarker) { const el = document.createElement('div'); el.className = 'poimark'; el.style.pointerEvents = 'none'; poiMarker = new mapboxgl.Marker({ element: el }); }
  poiMarker.setLngLat([p.lng, p.lat]).addTo(map);
  refreshMap();
  const pt = map.project([p.lng, p.lat]), H = map.getContainer().clientHeight;
  if (pt.y < headerH() + 20 || pt.y > H - bottomH() - 60) map.easeTo({ center: [p.lng, p.lat], padding: { top: headerH(), bottom: bottomH() + 40, left: 0, right: 0 }, duration: 400 });
  if (GOOGLE_KEY && !gAuthFail) lookupGoogle(POI); else if (gAuthFail) { POI.gstate = 'error'; renderMapCard(); }
}
function closePoi(silent) {
  POI = null; if (poiMarker) poiMarker.remove();
  if (!silent) renderMapCard();
}
function loadGoogle() {
  if (!GOOGLE_KEY) return Promise.reject(new Error('nokey'));
  if (gReady) return gReady;
  gReady = new Promise((res, rej) => {
    window.__gInit = res;
    window.gm_authFailure = () => { gAuthFail = true; if (POI) { POI.gstate = 'error'; renderMapCard(); } toast('Google 키를 확인해 주세요 (인증 실패)'); };
    const sc = document.createElement('script');
    sc.src = 'https://maps.googleapis.com/maps/api/js?' + new URLSearchParams({ key: GOOGLE_KEY, v: 'weekly', loading: 'async', callback: '__gInit', language: 'ko', region: 'PH' });
    sc.onerror = () => { gReady = null; rej(new Error('net')); };
    document.head.appendChild(sc);
  }).then(() => google.maps.importLibrary('places'));
  return gReady;
}
async function lookupGoogle(p) {
  p.gstate = 'loading'; renderMapCard();
  try {
    const { Place } = await loadGoogle();
    const d = 0.0012, base = { fields: ['id'], maxResultCount: 3, language: 'ko', locationRestriction: { north: p.lat + d, south: p.lat - d, east: p.lng + d, west: p.lng - d } };
    let r = p.name ? await Place.searchByText(Object.assign({ textQuery: p.name }, base)) : null;
    if (!r || !r.places || !r.places.length) { r = await Place.searchByText(Object.assign({ textQuery: POI_QUERY[p.cat] || 'place', rankPreference: 'DISTANCE' }, base)); p.guess = true; }
    if (POI !== p) return;
    if (r.places && r.places.length) setPoiGid(p, r.places[0].id); else p.gstate = 'none';
  } catch (e) { if (POI !== p) return; p.gstate = gAuthFail ? 'error' : (e.message === 'nokey' ? 'nokey' : 'error'); console.warn('Google', e); }
  renderMapCard();
}
function gCompact(id, onLoad) {
  const el = document.createElement('gmp-place-details-compact');
  el.setAttribute('orientation', 'horizontal'); el.setAttribute('truncation-preferred', '');
  el.innerHTML = `<gmp-place-details-place-request place="${esc(id)}"></gmp-place-details-place-request><gmp-place-media></gmp-place-media><gmp-place-name></gmp-place-name><gmp-place-rating></gmp-place-rating><gmp-place-type></gmp-place-type><gmp-place-price></gmp-place-price><gmp-place-open-now-status></gmp-place-open-now-status><gmp-place-attribution light-scheme-color="gray" dark-scheme-color="white"></gmp-place-attribution>`;
  if (onLoad) el.addEventListener('gmp-load', () => onLoad(el));
  return el;
}
function setPoiGid(p, id) {
  p.gid = id; p.gstate = 'ok';
  p.gel = gCompact(id, (el) => { try { p.gname = (el.place && el.place.displayName) || ''; } catch (e) {} });
  p.gel.addEventListener('gmp-error', () => { if (POI === p) { p.gstate = 'error'; renderMapCard(); } });
}
function poiCard() {
  const p = POI, label = CATS[p.cat] || '장소';
  const g = p.gstate === 'ok' ? `<div id="poiGSlot" class="poig"></div>`
    : p.gstate === 'loading' ? `<div class="poig-msg">Google 정보 찾는 중…</div>`
    : p.gstate === 'none' ? `<div class="poig-msg">Google에서 이 가게를 찾지 못했어요</div>`
    : p.gstate === 'nokey' ? `<div class="poig-msg">Google 키를 넣으면 평점·사진이 보여요</div>`
    : `<div class="poig-msg">Google 정보를 불러오지 못했어요</div>`;
  return `<div class="mcard" style="flex-direction:column;align-items:stretch;gap:8px">
    <div class="between" style="gap:8px"><span style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><b style="font-size:16px">${esc(p.name || label)}</b><span class="muted" style="font-size:12px">${p.name ? ' · ' + label : ''}${p.guess && p.gstate === 'ok' ? ' · 가까운 곳 추정' : ''}</span></span>
      <span class="row" style="gap:0"><button class="icon" data-act="poiFav" aria-label="즐겨찾기에 넣기" style="width:32px;height:32px">${svg('heart', 18, '#9AA5A7', 2.2)}</button>
      <button class="icon" data-act="poiClose" aria-label="닫기" style="width:32px;height:32px;flex-shrink:0">${svg('close', 16, '#5B6B6E')}</button></span></div>
    ${g}
    <div class="between" style="gap:6px">
      <span class="row" style="gap:12px">${p.gstate === 'ok' ? `<button data-act="poiFull" class="poilink">리뷰·사진 ›</button>` : ''}${GOOGLE_KEY && p.gstate !== 'nokey' ? `<button data-act="poiOther" class="poilink" style="color:#5B6B6E">${p.gstate === 'ok' ? '다른 곳이에요' : '근처에서 찾기'}</button>` : ''}</span>
      <span class="row" style="gap:6px"><button data-act="poiNav" aria-label="길찾기" class="mbtn" style="background:#EEF4FD;color:#1A73E8;padding:0 12px">${svg('nav', 16, '#1A73E8')}</button>
      <button data-act="poiAdd" class="mbtn">${svg('plus', 16, '#fff', 2.6)}일정에 추가</button></span>
    </div></div>`;
}
function gFullSheet(id, title) {
  openSheet(`<h2 style="font-size:20px;margin-bottom:10px">${esc(title || '장소 정보')}</h2><div id="gFullSlot" class="gfull"><div class="poig-msg">불러오는 중…</div></div>`);
  loadGoogle().then(() => {
    const slot = $('#gFullSlot'); if (!slot) return;
    const el = document.createElement('gmp-place-details');
    el.innerHTML = `<gmp-place-details-place-request place="${esc(id)}"></gmp-place-details-place-request><gmp-place-all-content></gmp-place-all-content>`;
    el.addEventListener('gmp-error', () => { slot.innerHTML = '<div class="poig-msg">Google 정보를 불러오지 못했어요</div>'; });
    slot.replaceChildren(el);
  }).catch(() => { const slot = $('#gFullSlot'); if (slot) slot.innerHTML = '<div class="poig-msg">Google 정보를 불러오지 못했어요</div>'; });
}
function poiFullSheet() { if (POI && POI.gid) gFullSheet(POI.gid, POI.gname || POI.name); }
function poiOtherSheet(own) {
  const p = own || POI; if (!p) return;
  openSheet(`<h2 style="font-size:20px">근처 ${CATS[p.cat] && p.cat !== 'etc' ? CATS[p.cat] : '가게'}</h2><p class="small muted" style="margin:4px 0 10px">맞는 곳을 누르면 그 가게로 바뀌어요</p><div id="gOtherSlot" class="gfull"><div class="poig-msg">찾는 중…</div></div>`);
  loadGoogle().then(() => {
    const slot = $('#gOtherSlot'); if (!slot) return;
    const el = document.createElement('gmp-place-search'); el.setAttribute('selectable', '');
    el.innerHTML = `<template slot="details-item"><gmp-place-media></gmp-place-media><gmp-place-name></gmp-place-name><gmp-place-rating></gmp-place-rating><gmp-place-type></gmp-place-type></template><gmp-place-attribution light-scheme-color="gray" dark-scheme-color="white"></gmp-place-attribution>`;
    const req = document.createElement('gmp-place-nearby-search-request');
    req.setAttribute('max-result-count', '10');
    req.locationRestriction = { center: { lat: p.lat, lng: p.lng }, radius: 200 };
    if (POI_GTYPE[p.cat]) req.includedTypes = POI_GTYPE[p.cat];
    req.rankPreference = 'DISTANCE';
    el.prepend(req);
    el.addEventListener('gmp-select', (ev) => {
      const pl = ev.place; if (!pl) return;
      if (own) { own.gid = pl.id; delete GOWN[own.id]; save(); closeSheet(); renderMapCard(); return; }
      if (POI !== p) return;
      if (pl.location) { p.lat = pl.location.lat(); p.lng = pl.location.lng(); poiMarker && poiMarker.setLngLat([p.lng, p.lat]); }
      p.guess = false; try { p.gname = pl.displayName || p.gname; } catch (e) {}
      setPoiGid(p, pl.id); closeSheet(); renderMapCard();
    });
    el.addEventListener('gmp-error', () => { slot.innerHTML = '<div class="poig-msg">근처 가게를 불러오지 못했어요</div>'; });
    slot.replaceChildren(el);
  }).catch(() => { const slot = $('#gOtherSlot'); if (slot) slot.innerHTML = '<div class="poig-msg">Google 정보를 불러오지 못했어요</div>'; });
}
// 내 장소(일정에 넣은 곳)도 Google 장소와 연결: 이름+위치로 찾아서 place ID만 저장
const GOWN = {};
const KO_EN = [['해변', 'Beach'], ['전망대', 'Viewpoint'], ['리조트', 'Resort'], ['호텔', 'Hotel'], ['선착장', 'Port'], ['식당', 'Restaurant']];
function gQuery(p) { let q = p.gq || p.name || ''; KO_EN.forEach(([k, e]) => { q = q.split(k).join(e); }); return /boracay/i.test(q) ? q : q + ' Boracay'; }
function placeG(p) {
  let g = GOWN[p.id];
  if (g && g.gid === (p.gid || g.gid)) return g;
  g = GOWN[p.id] = { state: 'loading', gid: p.gid || null, el: null };
  const ready = (id) => {
    g.gid = id; g.state = 'ok'; g.el = gCompact(id);
    g.el.addEventListener('gmp-error', () => { g.state = 'error'; if (S.ui.selPlace === p.id) renderMapCard(); });
  };
  if (p.gid) { loadGoogle().then(() => { ready(p.gid); if (S.ui.selPlace === p.id || (!S.ui.selPlace)) renderMapCard(); }).catch(() => { g.state = 'error'; renderMapCard(); }); return g; }
  loadGoogle().then(async ({ Place }) => {
    const d = p.cat === 'beach' || p.cat === 'act' ? 0.004 : 0.0025;
    const r = await Place.searchByText({ textQuery: gQuery(p), fields: ['id'], maxResultCount: 3, language: 'ko', locationRestriction: { north: p.lat + d, south: p.lat - d, east: p.lng + d, west: p.lng - d } });
    if (r.places && r.places.length) { p.gid = r.places[0].id; save(); ready(p.gid); } else g.state = 'none';
  }).catch((e) => { console.warn('Google', e); g.state = 'error'; }).then(() => { if (S.ui.tab === 'map') renderMapCard(); });
  return g;
}
function ensureGid(p) {
  if (p.gid) return Promise.resolve(p.gid);
  return new Promise((res) => {
    placeG(p);
    const t0 = Date.now(), iv = setInterval(() => { const g = GOWN[p.id]; if (p.gid || !g || g.state !== 'loading' || Date.now() - t0 > 8000) { clearInterval(iv); res(p.gid || null); } }, 200);
  });
}
// 즐겨찾기 장소 위치를 Google에서 받아 25일 동안 기억 (Google 규정상 좌표는 30일까지만 저장)
let favResolving = false;
async function resolveFavs() {
  if (!GOOGLE_KEY || gAuthFail || favResolving || navigator.onLine === false) return;
  const need = S.places.filter((p) => p.fav && p.gid && (!p.lat || !p.gAt || Date.now() - p.gAt > 25 * 864e5));
  if (!need.length) return;
  favResolving = true;
  try {
    const { Place } = await loadGoogle();
    for (const p of need) {
      try { const pl = new Place({ id: p.gid }); await pl.fetchFields({ fields: ['location'] }); if (pl.location) { p.lat = +pl.location.lat().toFixed(6); p.lng = +pl.location.lng().toFixed(6); p.gAt = Date.now(); } } catch (e) {}
    }
    save();
    if (S.ui.tab === 'map') refreshMap(); else if (S.ui.tab === 'home') updateHomeMap();
  } catch (e) {} finally { favResolving = false; }
}
setTimeout(resolveFavs, 1500);
function favSheet() {
  const favs = S.places.filter((p) => p.fav);
  const order = ['food', 'cafe', 'shop', 'act', 'beach', 'spot', 'stay', 'etc'];
  const groups = order.map((c) => [c, favs.filter((p) => (CATS[p.cat] ? p.cat : 'etc') === c)]).filter(([, l]) => l.length);
  const me = userPos && insideBoracay(userPos) ? userPos : null;
  openSheet(`<div class="between"><h2 style="font-size:20px">${svg('heart', 18, '#E5484D')} 즐겨찾기 <span class="muted" style="font-size:14px;font-weight:500">${favs.length}곳</span></h2></div>
    <p class="small muted" style="margin:4px 0 12px">누르면 지도에서 보여 줘요</p>
    ${favs.length ? groups.map(([c, l]) => `<h3 class="small muted" style="margin:12px 0 6px;font-weight:700">${CATS[c] || '기타'} · ${l.length}</h3>
      <div class="stack" style="gap:6px">${l.map((p) => `<button class="card row" data-act="favGo" data-id="${p.id}" style="border:0;text-align:left;gap:10px;min-height:52px">
        <span class="favdot">${svg(CAT_ICON[p.cat] || 'pin', 16, '#fff', 2.2)}</span>
        <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700">${esc(p.name)}</span>
        <span class="small muted">${me && p.lat ? fmtDist(Math.hypot((p.lng - me.lng) * 108900, (p.lat - me.lat) * 110600)) : (p.lat ? '' : '위치 확인 중')}</span></button>`).join('')}</div>`).join('')
      : '<div class="empty">아직 즐겨찾기가 없어요. 장소 카드의 ♥를 눌러 보세요</div>'}`);
}
function toggleFav(p) { p.fav = !p.fav; save(); toast(p.fav ? '즐겨찾기에 넣었어요' : '즐겨찾기에서 뺐어요'); if (p.fav && !p.lat) resolveFavs(); }
function poiAdd() {
  const p = POI; if (!p) return;
  const place = { id: uid(), name: p.gname || p.name || CATS[p.cat] || '새 장소', cat: CATS[p.cat] ? p.cat : 'etc', area: '', lat: +p.lat.toFixed(6), lng: +p.lng.toFixed(6), menu: [], memo: '', coordV: 2 };
  if (p.gid) place.gid = p.gid;
  S.places.unshift(place); closePoi(true); S.ui.selPlace = place.id; save(); refreshMap();
  todoForm(null, place);
}

/* ========= 여러 여행 · 공통 데이터 ========= */
const CHECK_CATS = { before:'출발 전', docs:'서류 · 예약', pack:'짐 싸기', local:'현지 준비', etc:'기타' };
const TODO_CATS = { sight:'관광', meal:'식사', stay:'숙소', move:'이동', etc:'기타' };
const EXP_CATS = { food:'식비', stay:'숙박', flight:'항공', move:'교통', sight:'관광', shop:'쇼핑', etc:'기타' };
const EXP_ICON = { food:'food', stay:'bed', flight:'plane', move:'bus', sight:'star', shop:'bag', etc:'coin' };
const CURS = ['PHP','JPY','USD','EUR','TWD','THB','VND','CNY','MNT','KRW'];
const CHECK_TEMPLATE = [
  ['여행자보험 준비','before'],['이심·유심 준비','before'],['환전·해외 결제 카드 준비','before'],
  ['여권 유효기간 확인','docs'],['항공권·숙소 예약 확인','docs'],['입국 서류 확인','docs'],
  ['충전기·보조배터리','pack'],['상비약·개인 복용약','pack'],['선크림·세면도구','pack'],['여벌 옷·속옷','pack'],['변환 어댑터','pack'],
  ['수영복·래쉬가드','pack'],['아쿠아슈즈','pack'],['방수팩','pack'],['선글라스·모자','pack'],
  ['공항·숙소 이동 방법 확인','local']
];
function ensureTrip(t) {
  t.id = t.id || uid();
  t.trip = Object.assign({ name:'보라카이 여행', city:'Boracay', lat:BORACAY.lat, lng:BORACAY.lng, tz:'Asia/Manila', members:['나','동행'], budget:1500000, cover:null }, t.trip || {});
  t.alarm = t.alarm || { offset:30, off:{}, fired:{} };
  t.todos = t.todos || {}; t.places = t.places || []; t.tickets = t.tickets || [];
  t.checklist = t.checklist || []; t.expenses = t.expenses || []; t.journal = t.journal || [];
  t.ui = Object.assign({ tab:'home', day:t.trip.start, placeFilter:'all', ticketFilter:'all', checkFilter:'all', placeList:'all' }, t.ui || {});
  t.tickets.forEach((x) => { x.imgs = x.imgs || []; x.files = x.files || []; });
  t.places.forEach((p) => { if (PLACE_FIX[p.id] && !p.coordV) { p.lng = PLACE_FIX[p.id][0]; p.lat = PLACE_FIX[p.id][1]; } p.coordV = 2; });
  if (!t.planV && t.trip.start === '2026-11-13') {
    // 예시 일정 → 실제 확정 일정(12/16~20)으로 교체. 체크리스트·경비·기록·직접 넣은 장소는 그대로 둠
    const st = '2026-12-16';
    Object.assign(t.trip, { name: t.trip.name === '보라카이 여행' ? '보라카이 4박5일' : t.trip.name, start: st, end: addDays(st, 4) });
    t.todos = planTodos(st);
    PLAN_PLACES.forEach((pp) => { if (!t.places.some((p) => p.id === pp.id)) t.places.unshift({ menu: [], memo: '', coordV: 2, ...pp }); });
    t.tickets = t.tickets.filter((x) => !((x.title === '호핑투어' || x.title === '인천 → 칼리보') && !x.imgs.length && !(x.files || []).length)).concat(planTickets(st));
    t.ui.day = st; t.alarm.fired = {}; t.alarm.off = {};
  }
  t.planV = 1;
  t.ui.mapMode = 'mapbox'; // 기본(그림) 지도는 없애고 Mapbox만 씀
  if (!t.favV) {
    FAV_SEED.forEach(([gid, name, cat, mine]) => {
      const ex = t.places.find((p) => p.gid === gid || (mine && p.id === mine));
      if (ex) { ex.fav = true; if (ex.gid !== gid) { ex.gid = gid; delete ex.gAt; } }
      else t.places.push({ id: 'g' + gid.slice(-10).replace(/[^A-Za-z0-9]/g, ''), name, cat, area: '', gid, fav: true, menu: [], memo: '', coordV: 2 });
    });
    t.favV = 1;
  }
  return t;
}
let DB;
try {
  const raw = JSON.parse(localStorage.getItem(STORE_KEY));
  if (raw && raw.trips) DB = raw;
  else if (raw && raw.todos) { const t = ensureTrip(raw); DB = { cur: t.id, trips: { [t.id]: t } }; }
} catch (e) {}
if (!DB) { const t = ensureTrip(seed()); DB = { cur: t.id, trips: { [t.id]: t } }; }
Object.values(DB.trips).forEach(ensureTrip);
DB.fx = DB.fx || { at: null, rates: {} };
DB.weather = DB.weather || {};
let S = DB.trips[DB.cur] || Object.values(DB.trips)[0];
DB.cur = S.id;
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(DB)); } catch (e) { toast('저장 공간이 부족해요. 사진 몇 장을 지워 주세요'); } }
const members = () => (S.trip.members && S.trip.members.length ? S.trip.members : ['나']);
const won = (n) => '₩ ' + Math.round(n || 0).toLocaleString('ko-KR');
const krwPer = (cur) => cur === 'KRW' ? 1 : (DB.fx.rates[cur] || (cur === 'PHP' ? 24 : null));
const gSearch = (p) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.lat ? `${p.lat},${p.lng}` : p.q);
function gRoute(points) {
  const enc = (p) => encodeURIComponent(p.lat ? `${p.lat},${p.lng}` : p.q);
  if (!points.length) return null;
  if (points.length === 1) return gSearch(points[0]);
  const mid = points.slice(1, -1).map(enc).join('%7C');
  return `https://www.google.com/maps/dir/?api=1&origin=${enc(points[0])}&destination=${enc(points[points.length - 1])}${mid ? '&waypoints=' + mid : ''}&travelmode=walking`;
}
const todoPoint = (it) => { const p = placeById(it.placeId); return p && p.lat ? { lat: p.lat, lng: p.lng } : (p ? { q: p.name + ' ' + (S.trip.city || '') } : (it.where ? { q: it.where + ' ' + (S.trip.city || '') } : null)); };
const SUBTABS = ['places', 'check', 'tickets', 'sunset', 'journal'];
const subHead = (title, desc, action) => `<div class="stack" style="gap:6px">
  <button class="row muted" data-act="tab" data-tab="more" style="border:0;background:none;padding:0;gap:2px;font-size:14px;font-weight:500;min-height:32px">${svg('back', 18)}더보기</button>
  <div class="between" style="align-items:flex-start"><div class="stack" style="gap:4px"><h1>${title}</h1>${desc ? `<span class="muted" style="font-size:13px">${desc}</span>` : ''}</div>${action || ''}</div></div>`;
const addBtn = (act, label) => `<button class="btn" data-act="${act}" style="height:42px;padding:0 14px;font-size:14px;flex-shrink:0">${svg('plus', 16, '#fff', 2.6)}${label}</button>`;

/* ========= 더보기 ========= */
function viewMore() {
  const t = S.trip, days = tripDays(), dl = Math.round((dateObj(t.start) - dateObj(todayStr())) / 864e5);
  const ck = S.checklist, ckDone = ck.filter((x) => x.done).length;
  const menu = [
    ['places', '장소 · 맛집', 'food', `${S.places.length}곳 · 꼭 가기 ${S.places.filter((p) => p.priority === 'must').length}`],
    ['check', '체크리스트', 'checksq', ck.length ? `준비 ${ckDone} / ${ck.length}` : '기본 준비물로 시작'],
    ['tickets', '예약 보관함', 'ticket', `${S.tickets.length}개의 예약`],
    ['sunset', '날씨 · 일몰', 'sun', `일몰 ${fmtTime(sunTimes(currentDay()).set)} · 선셋 알람`],
    ['journal', '여행 기록', 'book', `${S.journal.length}개의 순간`]
  ];
  return `<div class="stack" style="gap:16px">
    <h1>더보기</h1>
    <div class="tripcard">
      <div class="tripcover">${t.cover ? `<img data-img="${t.cover}" alt="">` : svg('img', 30, '#17806D', 1.6)}</div>
      <div class="stack" style="gap:4px;padding:14px 16px">
        <div class="between"><b style="font-size:19px">${esc(t.name)}</b><span class="tag" style="background:#E6F3EF;color:#17806D">${dl > 0 ? `D-${dl}` : dl === 0 ? 'D-DAY' : todayStr() <= t.end ? '여행 중' : '다녀옴'}</span></div>
        <span class="muted" style="font-size:13px">${fmtDate(t.start)} — ${fmtDate(t.end)} · ${days.length}일 · ${esc(members().join(', '))}</span>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
          <button class="btn ghost" data-act="trips" style="height:42px">여행 바꾸기 · 추가</button>
          <button class="btn ghost" data-act="settings" style="height:42px">여행 설정</button>
        </div>
      </div>
    </div>
    <div class="stack" style="gap:8px">${menu.map(([tab, label, ic, sub]) => `
      <button class="card row" data-act="tab" data-tab="${tab}" style="border:0;text-align:left;gap:14px;padding:14px">
        <span class="micon">${svg(ic, 22, '#17806D')}</span>
        <span class="stack" style="flex:1;gap:2px"><b style="font-size:16px">${label}</b><span class="small muted">${sub}</span></span>${svg('chev', 18, '#5B6B6E')}</button>`).join('')}
      <button class="card row" data-act="share" style="border:0;text-align:left;gap:14px;padding:14px">
        <span class="micon">${svg('share', 22, '#17806D')}</span>
        <span class="stack" style="flex:1;gap:2px"><b style="font-size:16px">함께하기 · 백업</b><span class="small muted">일정 공유, 백업 파일 내보내기·불러오기</span></span>${svg('chev', 18, '#5B6B6E')}</button>
    </div>
  </div>`;
}
function tripsSheet() {
  const list = Object.values(DB.trips).sort((a, b) => a.trip.start < b.trip.start ? -1 : 1);
  openSheet(`<h2 style="margin-bottom:14px">나의 여행</h2>
    <div class="stack" style="gap:8px">${list.map((t) => `<button class="card row" data-act="switchTrip" data-id="${t.id}" style="border:${t.id === S.id ? '2px solid #17806D' : '0'};text-align:left;gap:12px">
      <span class="tripthumb">${t.trip.cover ? `<img data-img="${t.trip.cover}" alt="">` : svg('img', 20, '#17806D')}</span>
      <span class="stack" style="flex:1;gap:2px"><b>${esc(t.trip.name)}</b><span class="small muted">${fmtDate(t.trip.start)} — ${fmtDate(t.trip.end)} · ${esc(t.trip.city || '')}</span></span>
      ${t.id === S.id ? '<span class="tag" style="background:#E6F3EF;color:#17806D">보는 중</span>' : ''}</button>`).join('')}</div>
    <button class="btn" data-act="newTrip" style="width:100%;margin-top:12px">${svg('plus', 18, '#fff', 2.5)} 새로운 여행</button>`);
  hydrateImages();
}
function tripForm(isNew) {
  const t = isNew ? { name:'', city:'', start: todayStr(), end: addDays(todayStr(), 3), members:['나','동행'], budget:'' } : S.trip;
  openSheet(`<h2 style="margin-bottom:14px">${isNew ? '새로운 여행' : '여행 설정'}</h2>
    <form class="stack" style="gap:12px" data-form="trip" data-new="${isNew ? 1 : ''}">
      <label class="field">여행 이름<input name="name" required value="${esc(t.name)}" placeholder="예: 보라카이, 느리게 걷기"></label>
      <label class="field">여행지 영문 도시명 · 날씨·일몰용<input name="city" value="${esc(t.city)}" placeholder="예: Boracay, Osaka"></label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <label class="field">출발일<input type="date" name="start" value="${t.start}" required></label>
        <label class="field">마지막 날<input type="date" name="end" value="${t.end}" required></label>
      </div>
      <label class="field">동행자 · 쉼표로 구분<input name="members" value="${esc((t.members || []).join(', '))}" placeholder="예: 지훈, 다영"></label>
      <label class="field">전체 예산 (원)<input type="number" name="budget" inputmode="numeric" value="${esc(t.budget)}" placeholder="예: 1500000"></label>
      <label class="field">대표 사진<input type="file" name="cover" accept="image/*" style="padding-top:10px"></label>
      <button class="btn" type="submit">${isNew ? '만들기' : '저장'}</button>
      ${isNew ? '' : `<button class="btn ghost" type="button" data-act="mbTheme">Mapbox 색: ${S.ui.mbTheme === 'original' ? '내가 꾸민 원래 색' : '앱 지도 스타일'} (바꾸기)</button>
      ${Object.keys(DB.trips).length > 1 ? `<button class="btn danger" type="button" data-act="delTrip">이 여행 삭제</button>` : `<button class="btn danger" type="button" data-act="reset">예시 데이터로 초기화</button>`}`}
    </form>`);
}
function openOnMap(p, keepZoom) {
  closeSheet(); S.ui.tab = 'map'; S.ui.selPlace = p.id; delete S.ui.pinTodo; save(); render();
  requestAnimationFrame(() => {
    const pts2 = keepZoom ? routeStops().map((x) => [x.lng, x.lat]) : null;
    whenMapReady(() => {
      if (pts2 && pts2.length > 1) map.fitBounds([[Math.min(...pts2.map((c) => c[0])), Math.min(...pts2.map((c) => c[1]))], [Math.max(...pts2.map((c) => c[0])), Math.max(...pts2.map((c) => c[1]))]], { padding: { top: headerH() + 20, bottom: bottomH() + 20, left: 50, right: 50 }, maxZoom: 16.5 });
      else map.flyTo({ center: [p.lng, p.lat], zoom: 16.5, padding: { top: headerH(), bottom: bottomH(), left: 0, right: 0 } });
    });
  });
}
function switchTrip(id) {
  DB.cur = id; S = DB.trips[id]; TZ = S.trip.tz || 'Asia/Manila';
  view = null; S.ui.tab = 'home'; save(); closeSheet(); render(); refreshMap();
}
async function geocodeCity(t) {
  if (!t.trip.city) return;
  try {
    const r = await fetch('https://geocoding-api.open-meteo.com/v1/search?count=1&language=ko&name=' + encodeURIComponent(t.trip.city));
    const j = await r.json(); const g = j.results && j.results[0];
    if (g) { t.trip.lat = g.latitude; t.trip.lng = g.longitude; t.trip.tz = g.timezone || t.trip.tz; delete DB.weather[t.id]; save(); if (t === S) { TZ = t.trip.tz; render(); } }
  } catch (e) {}
}

/* ========= 함께하기 · 백업 ========= */
function itineraryText() {
  const t = S.trip;
  const lines = [`[${t.name}] ${fmtDate(t.start)} ~ ${fmtDate(t.end)} · ${members().join(', ')}`, ''];
  tripDays().forEach((d) => {
    lines.push(`D${dayIndex(d)} ${fmtDate(d)} · 일몰 ${fmtTime(sunTimes(d).set)}`);
    const l = sortTodos(todosOf(d).slice());
    if (!l.length) lines.push('- (일정 없음)');
    l.forEach((it) => { const p = placeById(it.placeId); lines.push(`- ${it.time || '--:--'} ${it.title}${p ? ` (${p.name})` : it.where ? ` (${it.where})` : ''}`); });
    lines.push('');
  });
  if (S.tickets.length) { lines.push('예약'); S.tickets.forEach((x) => lines.push(`- ${fmtDate(x.date)} ${x.time || ''} ${TCATS[x.cat] || ''} ${x.title}${x.code ? ' #' + x.code : ''}`)); }
  return lines.join('\n');
}
function shareSheet() {
  openSheet(`<h2>함께하기 · 백업</h2>
    <p class="muted" style="font-size:13px;line-height:1.6;margin:6px 0 14px">이 앱은 데이터를 폰 안에만 저장해요. 함께 보려면 일정을 글로 보내거나, 백업 파일을 보내서 상대 앱에서 "불러오기" 하면 같은 여행이 그대로 들어가요.</p>
    <div class="stack" style="gap:8px">
      <button class="btn" data-act="copyItin">${svg('list', 18, '#fff')} 일정 텍스트 복사</button>
      <button class="btn ghost" data-act="exportAll">${svg('file', 18)} 전체 백업 파일 저장</button>
      <button class="btn ghost" data-act="exportTrip">${svg('file', 18)} 이 여행만 파일로 저장 (공유용)</button>
      <label class="btn line" style="cursor:pointer">${svg('share', 18)} 백업 파일 불러오기<input type="file" accept=".json,application/json" data-import="1" style="display:none"></label>
    </div>
    <div id="shareOut"></div>`);
}
async function blobToDataURL(b) { return new Promise((res) => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(b); }); }
async function getImgBlob(id) {
  if (idb) { try { const b = await new Promise((res) => { const r = idb.transaction('imgs').objectStore('imgs').get(id); r.onsuccess = () => res(r.result); r.onerror = () => res(null); }); if (b) return b; } catch (e) {} }
  if (memImgs[id]) { try { return await (await fetch(memImgs[id])).blob(); } catch (e) {} }
  return null;
}
function imgIdsOf(t) {
  const ids = [];
  if (t.trip.cover) ids.push(t.trip.cover);
  t.places.forEach((p) => p.photo && ids.push(p.photo));
  t.tickets.forEach((x) => { ids.push(...(x.imgs || [])); (x.files || []).forEach((f) => ids.push(f.id)); });
  t.journal.forEach((j) => j.photo && ids.push(j.photo));
  return ids;
}
async function exportData(onlyCurrent) {
  const trips = onlyCurrent ? { [S.id]: S } : DB.trips;
  const images = {};
  for (const t of Object.values(trips)) for (const id of imgIdsOf(t)) { const b = await getImgBlob(id); if (b) images[id] = await blobToDataURL(b); }
  const data = { app: 'boracay-trip-app', version: 2, exportedAt: new Date().toISOString(), cur: S.id, trips, images };
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  await saveFile((onlyCurrent ? S.trip.name : '여행앱-백업') + '-' + todayStr() + '.json', blob);
}
let dlNS = null;
(async () => { try { if (window.claude && window.claude.use) dlNS = await window.claude.use('downloads'); } catch (e) {} })();
async function saveFile(name, blob) {
  if (dlNS && !/\.ics$/i.test(name)) {
    try { await dlNS.save({ filename: name, data: blob }); toast('파일을 저장했어요'); return; }
    catch (e) { if (e && e.code === 'declined') return; }
  }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  toast('파일 저장을 시작했어요');
}
let pendingImport = null;
async function readImport(file) {
  try {
    const data = JSON.parse(await file.text());
    let trips = data.trips || (data.todos ? { x: data } : null);
    if (!trips) throw new Error();
    pendingImport = data.trips ? data : { trips, images: {} };
    const names = Object.values(trips).map((t) => esc((t.trip && t.trip.name) || '여행')).join(', ');
    $('#shareOut').innerHTML = `<div class="card stack" style="gap:10px;margin-top:14px;background:#E6F3EF">
      <b>불러올 여행: ${names}</b>
      <button class="btn" data-act="importAdd">여행으로 추가하기</button>
      <button class="btn danger" data-act="importReplace">지금 데이터를 모두 바꾸기</button></div>`;
  } catch (e) { toast('이 앱의 백업 파일이 아니에요'); }
}
async function applyImport(replace) {
  const data = pendingImport; if (!data) return;
  for (const [id, url] of Object.entries(data.images || {})) { try { putImg(id, await (await fetch(url)).blob()); } catch (e) {} }
  const incoming = Object.values(data.trips).map((t) => ensureTrip(JSON.parse(JSON.stringify(t))));
  if (replace) { DB.trips = {}; }
  incoming.forEach((t) => { if (!replace && DB.trips[t.id]) t.id = uid(); DB.trips[t.id] = t; });
  pendingImport = null; switchTrip(incoming[0].id); toast(`${incoming.length}개 여행을 불러왔어요`);
}

/* ========= 일정 (보강) ========= */
function todoRow(it, withActions) {
  const p = placeById(it.placeId), pt = todoPoint(it);
  return `<div class="card" style="padding:6px 4px 8px 4px">
    <div class="row" style="gap:4px;align-items:flex-start">
    <button class="icon" data-act="toggle" data-id="${it.id}" aria-label="완료 표시"><span class="check ${it.done ? 'on' : ''}">${it.done ? svg('check', 14, '#fff', 3) : ''}</span></button>
    <div style="flex:1;min-width:0;gap:2px;padding-top:4px" class="stack">
      <span class="row small muted" style="gap:6px;font-weight:500"><span class="num">${esc(it.time || '시간 미정')}</span>${it.cat ? `<span class="ctag">${TODO_CATS[it.cat] || ''}</span>` : ''}</span>
      <span style="font-size:15px;font-weight:500" class="${it.done ? 'done-text' : ''}">${esc(it.title)} ${it.sunset ? '<span class="tag">선셋</span>' : ''}</span>
      ${p ? `<button data-act="openPlace" data-id="${p.id}" class="row small muted" style="gap:4px;border:0;background:none;padding:0;text-align:left">${svg('pin', 12)}${esc(p.name)}</button>` : it.where ? `<span class="row small muted" style="gap:4px">${svg('pin', 12)}${esc(it.where)}</span>` : ''}
      ${it.note ? `<span class="small muted" style="white-space:pre-wrap">${esc(it.note)}</span>` : ''}
      <button data-act="showOnMap" data-id="${it.id}" class="row small" style="gap:4px;border:0;background:none;padding:0;color:#17806D;font-weight:700;margin-top:2px;min-height:28px;text-align:left">${svg('map', 13, '#17806D')}${p && p.lat ? '지도에서 보기' : '지도에 위치 정하기'}</button>
    </div>
    ${withActions ? `<button class="icon" data-act="editTodo" data-id="${it.id}" aria-label="수정">${svg('edit', 18, '#5B6B6E')}</button>
    <button class="icon" data-act="delTodo" data-id="${it.id}" aria-label="삭제">${svg('trash', 18, '#B3412A')}</button>` : ''}
    </div></div>`;
}
function viewTodo() {
  const day = S.ui.day = tripDays().includes(S.ui.day) ? S.ui.day : currentDay();
  const list = sortTodos(todosOf(day)), t = sunTimes(day);
  const done = list.filter((x) => x.done).length;
  const route = gRoute(list.map(todoPoint).filter(Boolean));
  return `<div class="stack" style="gap:14px">
    <div class="between"><h1>일정</h1><span class="muted" style="font-size:13px;font-weight:500">${done} / ${list.length} 완료</span></div>
    ${dayTabs('pickDay', day)}
    <button data-act="tab" data-tab="sunset" class="between" style="border:0;height:46px;border-radius:14px;background:var(--coralbg);color:var(--coralink);padding:0 14px;font-size:14px;font-weight:500">
      <span class="row" style="gap:8px">${svg('sun', 18)} 이 날 일몰 ${fmtTime(t.set)}</span>
      <span class="small">${S.alarm.off[day] ? '알람 꺼짐' : `알람 ${S.alarm.offset}분 전`}</span>
    </button>
    <div class="stack">${list.length ? list.map((x) => todoRow(x, true)).join('') : '<div class="empty">아직 일정이 없어요. 아래 버튼이나 지도에서 장소를 담아 보세요.</div>'}</div>
    ${list.some((x) => { const pp = placeById(x.placeId); return pp && pp.lat; }) ? `<button class="btn ghost" data-act="dayOnMap" data-day="${day}">${svg('map', 18, '#17806D')} 이날 동선 지도에서 보기</button>` : ''}
    <button class="btn" data-act="addTodo">${svg('plus', 18, '#fff', 2.5)} 일정 추가</button>
  </div>`;
}
function todoForm(existing, presetPlace) {
  const it = existing || { time:'', title: presetPlace ? presetPlace.name : '', placeId: presetPlace ? presetPlace.id : '', sunset:false, cat: presetPlace && presetPlace.cat === 'food' ? 'meal' : 'sight', where:'', note:'' };
  const sel = existing ? findTodoDay(existing.id) : S.ui.day;
  openSheet(`
    <h2 style="margin-bottom:14px">${existing ? '일정 수정' : '새로운 일정'}</h2>
    <form class="stack" style="gap:12px" data-form="todo" data-id="${existing ? existing.id : ''}">
      <label class="field">일정 이름<input name="title" required value="${esc(it.title)}" placeholder="예: 선셋 세일링"></label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <label class="field">날짜<select name="day">${tripDays().map((d) => `<option value="${d}" ${d === sel ? 'selected' : ''}>D${dayIndex(d)} · ${fmtDate(d)}</option>`).join('')}</select></label>
        <label class="field">시간<input type="time" name="time" value="${esc(it.time)}"></label>
      </div>
      <label class="field">종류<select name="cat">${Object.entries(TODO_CATS).map(([k, v]) => `<option value="${k}" ${k === it.cat ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
      <label class="field">저장한 장소<select name="placeId"><option value="">선택 안 함</option>${S.places.map((p) => `<option value="${p.id}" ${p.id === it.placeId ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}</select></label>
      <label class="field">또는 장소 이름·주소 (지도 검색용)<input name="where" value="${esc(it.where || '')}" placeholder="예: Boracay Station 2"></label>
      <label class="field">메모<textarea name="note" style="height:80px">${esc(it.note || '')}</textarea></label>
      <label class="row" style="font-size:14px;gap:8px"><input type="checkbox" name="sunset" ${it.sunset ? 'checked' : ''} style="width:20px;height:20px"> 선셋 일정으로 표시</label>
      <button class="btn" type="submit">${existing ? '저장하기' : '추가하기'}</button>
    </form>`);
}

/* ========= 장소 · 맛집 ========= */
function viewPlaces() {
  const f = S.ui.placeList || 'all', q = (S.ui.placeQ || '').toLowerCase();
  const list = S.places.filter((p) => (f === 'all' || (f === 'visited' ? p.visited : f === 'fav' ? p.fav : f === 'must' ? p.priority === 'must' : p.cat === f)))
    .filter((p) => !q || [p.name, p.area, p.signature, p.memo, ...(p.menu || []).map((m) => m.name)].join(' ').toLowerCase().includes(q))
    .sort((a, b) => (a.visited - b.visited) || ((b.priority === 'must') - (a.priority === 'must')));
  const chips = [['all', '전체'], ['fav', '♥ 즐겨찾기'], ['must', '꼭 가기'], ...Object.entries(CATS), ['visited', '방문 완료']];
  return `<div class="stack" style="gap:14px">
    ${subHead('장소 · 맛집', '맛집부터 작은 카페까지. 저장해 두고 일정에 쏙.', addBtn('newPlace', '장소 저장'))}
    <label class="msearch" style="height:46px">${svg('search', 18, '#5B6B6E')}<input id="placeListQ" type="search" placeholder="장소·메뉴 검색" value="${esc(S.ui.placeQ || '')}" aria-label="장소·메뉴 검색"></label>
    <div class="chips">${chips.map(([k, v]) => `<button class="chip ${f === k ? 'on' : ''}" data-act="plist" data-f="${k}">${v}</button>`).join('')}</div>
    <div class="stack" id="placeListBox">${placeCards(list)}</div>
    <span class="small muted">Google 지도 링크나 장소명·주소를 넣어 두면 바로 지도에서 열 수 있어요.</span>
  </div>`;
}
function placeCards(list) {
  return list.length ? list.map((p) => `<div class="card row" style="gap:12px;align-items:flex-start;${p.visited ? 'opacity:.6' : ''}">
    <button data-act="openPlace" data-id="${p.id}" class="mthumb" style="width:64px;height:64px;border-radius:14px" aria-label="${esc(p.name)} 열기">${p.photo ? `<img data-img="${p.photo}" alt="">` : svg(CAT_ICON[p.cat] || 'pin', 24, '#17806D')}</button>
    <button data-act="openPlace" data-id="${p.id}" class="stack" style="flex:1;min-width:0;gap:3px;border:0;background:none;padding:0;text-align:left">
      <span class="row" style="gap:6px;flex-wrap:wrap"><b style="font-size:16px">${esc(p.name)}</b>${p.priority === 'must' ? '<span class="tag">꼭 가기</span>' : ''}</span>
      <span class="small muted">${CATS[p.cat] || '장소'}${p.area ? ' · ' + esc(p.area) : ''}</span>
      ${p.signature || p.priceRange ? `<span class="small">${esc(p.signature || '')}${p.signature && p.priceRange ? ' · ' : ''}${esc(p.priceRange || '')}</span>` : ''}
      ${p.hours ? `<span class="small muted">영업 ${esc(p.hours)}</span>` : ''}
    </button>
    <button class="icon" data-act="visitPlace" data-id="${p.id}" aria-label="방문 완료 표시" style="width:40px;height:40px"><span class="check ${p.visited ? 'on' : ''}">${p.visited ? svg('check', 14, '#fff', 3) : ''}</span></button>
  </div>`).join('') : '<div class="empty">마음에 드는 장소를 저장해 보세요.<br>일정은 나중에 정해도 괜찮아요.</div>';
}
function placeForm(existing, lngLat) {
  const pin = !existing && lngLat && S.ui.pinTodo ? findTodo(S.ui.pinTodo) : null;
  const p = existing || { name: pin ? (pin.where || pin.title) : '', cat: pin && pin.cat === 'meal' ? 'food' : pin ? 'spot' : 'food', priority:'maybe', url:'', area: pin ? (pin.where || '') : '', signature:'', priceRange:'', hours:'', memo:'' };
  openSheet(`<h2 style="margin-bottom:14px">${existing ? '장소 수정' : lngLat ? '여기에 장소 저장' : '마음에 드는 장소'}</h2>
    <form class="stack" style="gap:12px" data-form="place" data-id="${existing ? existing.id : ''}" data-lng="${lngLat ? lngLat.lng : ''}" data-lat="${lngLat ? lngLat.lat : ''}">
      <label class="field">장소 이름<input name="name" required value="${esc(p.name)}" placeholder="예: Jonah's Fruit Shake"></label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <label class="field">분류<select name="cat">${Object.entries(CATS).map(([k, v]) => `<option value="${k}" ${k === p.cat ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
        <label class="field">우선순위<select name="priority"><option value="must" ${p.priority === 'must' ? 'selected' : ''}>꼭 가기</option><option value="maybe" ${p.priority !== 'must' ? 'selected' : ''}>시간 되면</option></select></label>
      </div>
      <label class="field">Google 지도 링크 (선택)<input type="url" name="url" value="${esc(p.url || '')}" placeholder="https://maps.app.goo.gl/..."></label>
      <label class="field">주소 또는 위치 메모<input name="area" value="${esc(p.area || '')}" placeholder="예: Station 1 해변길"></label>
      <label class="field">대표 메뉴<input name="signature" value="${esc(p.signature || '')}" placeholder="예: 망고 셰이크"></label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <label class="field">가격대 · 통화 포함<input name="priceRange" value="${esc(p.priceRange || '')}" placeholder="예: 150~300 PHP"></label>
        <label class="field">영업시간<input name="hours" value="${esc(p.hours || '')}" placeholder="예: 11:00~21:00"></label>
      </div>
      <label class="field">메모<textarea name="memo" style="height:80px">${esc(p.memo || '')}</textarea></label>
      <button class="btn" type="submit">저장하기</button>
    </form>`);
}
function placeSheet(p) {
  const days = tripDays(), rate = krwPer('PHP');
  const link = p.url || gSearch(p.lat ? p : { q: p.name + ' ' + (p.area || S.trip.city || '') });
  openSheet(`
    <div class="between"><span class="small" style="color:var(--coralink);font-weight:500">${CATS[p.cat] || '장소'}${p.priority === 'must' ? ' · 꼭 가기' : ''}</span>
      <span class="row" style="gap:0"><button class="icon" data-act="favToggle" data-id="${p.id}" data-sheet="1" aria-label="즐겨찾기">${svg('heart', 20, p.fav ? '#E5484D' : '#9AA5A7', 2.2)}</button><button class="icon" data-act="editPlace" data-id="${p.id}" aria-label="장소 수정">${svg('edit', 18, '#5B6B6E')}</button>
      <button class="icon" data-act="delPlace" data-id="${p.id}" aria-label="장소 삭제">${svg('trash', 18, '#B3412A')}</button></span></div>
    <h2 style="font-size:22px">${esc(p.name)}</h2>
    <p class="muted small" style="margin:4px 0 12px">${esc(p.area || '')}${p.hours ? ' · 영업 ' + esc(p.hours) : ''}</p>
    <label class="mthumb" style="width:100%;height:150px;margin-bottom:12px;cursor:pointer;flex-direction:column;gap:6px;color:#17806D;font-size:13px;font-weight:500">
      ${p.photo ? `<img data-img="${p.photo}" alt="${esc(p.name)} 사진">` : `${svg('img', 28, '#17806D')}사진 추가`}
      <input type="file" accept="image/*" data-photo="${p.id}" style="display:none"></label>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
      ${p.lat ? `<button class="btn ghost" data-act="placeOnMap" data-id="${p.id}" style="height:44px">${svg('map', 16, '#17806D')} 지도에서 보기</button>` : `<a class="btn ghost" href="${link}" target="_blank" rel="noopener" style="text-decoration:none;height:44px">${svg('map', 16, '#17806D')} 구글에서 찾기 ↗</a>`}
      ${p.lat ? `<button class="btn ghost" data-act="navTo" data-id="${p.id}" style="height:44px">${svg('nav', 16, '#17806D')} 길찾기</button>`
        : `<button class="btn ghost" data-act="visitPlace" data-id="${p.id}" style="height:44px">${p.visited ? '방문 취소' : '방문 완료'}</button>`}
    </div>
    ${p.signature || p.priceRange || p.memo ? `<div class="card stack" style="gap:4px;margin-bottom:12px">
      ${p.signature ? `<span><b>대표 메뉴</b> · ${esc(p.signature)}</span>` : ''}${p.priceRange ? `<span><b>가격대</b> · ${esc(p.priceRange)}</span>` : ''}
      ${p.memo ? `<span class="small muted" style="white-space:pre-wrap">${esc(p.memo)}</span>` : ''}</div>` : ''}
    ${GOOGLE_KEY && p.lat ? `<div class="stack" style="gap:6px;margin-bottom:12px"><div class="between"><h2 style="font-size:15px">Google 정보</h2><button class="poilink" data-act="gFull" data-id="${p.id}">리뷰·사진 ›</button></div><div class="card" id="placeGSlot" style="padding:8px"><div class="poig-msg">불러오는 중…</div></div></div>` : ''}
    <div class="stack" style="gap:8px">
      <h2 style="font-size:15px">메뉴 · 가격</h2>
      <div class="card" style="padding:0 14px">
        ${p.menu.length ? p.menu.map((m) => `<div class="list-row">
          <span style="flex:1;font-size:15px">${esc(m.name)}</span>
          <b class="num">${m.price ? '₱ ' + esc(m.price) : '<span class="small muted" style="font-weight:400">가격 미입력</span>'}</b>
          ${m.price ? `<span class="small muted">≈₩${Math.round(Number(m.price) * rate).toLocaleString()}</span>` : ''}
          <button class="icon" style="width:36px;height:36px" data-act="delMenu" data-pid="${p.id}" data-id="${m.id}" aria-label="메뉴 삭제">${svg('close', 14, '#5B6B6E')}</button>
        </div>`).join('') : '<div class="empty" style="padding:16px 0">메뉴가 아직 없어요</div>'}
      </div>
      <form class="row" data-form="menu" data-pid="${p.id}" style="gap:6px">
        <input name="name" placeholder="메뉴" aria-label="메뉴 이름" required style="flex:1;min-width:0;height:44px;border:1px solid var(--line);border-radius:12px;padding:0 10px">
        <input name="price" placeholder="₱ 가격" aria-label="가격(페소)" inputmode="decimal" style="width:84px;height:44px;border:1px solid var(--line);border-radius:12px;padding:0 10px">
        <button class="btn ghost" type="submit" style="height:44px">추가</button>
      </form>
      <span class="small muted">원화는 1페소 ≈ ${rate.toFixed(1)}원으로 계산해요${DB.fx.at ? '' : ' (환율 탭에서 갱신 가능)'}.</span>
    </div>
    <div class="stack" style="gap:8px;margin-top:16px">
      <h2 style="font-size:15px">일정에 추가</h2>
      <div class="chips">${days.map((d) => `<button class="chip" data-act="placeToDay" data-id="${p.id}" data-day="${d}">D${dayIndex(d)} ${fmtDate(d)}</button>`).join('')}</div>
      <button class="btn" data-act="placeToTodo" data-id="${p.id}">${svg('plus', 18, '#fff', 2.5)} 시간 정해서 추가</button>
    </div>`);
  hydrateImages();
  if (GOOGLE_KEY && p.lat) ensureGid(p).then((id) => { const slot = $('#placeGSlot'); if (!slot) return; if (id) slot.replaceChildren(gCompact(id)); else slot.innerHTML = '<div class="poig-msg">Google에서 이 장소를 찾지 못했어요</div>'; }).catch(() => { const slot = $('#placeGSlot'); if (slot) slot.innerHTML = '<div class="poig-msg">Google 정보를 불러오지 못했어요</div>'; });
}
function addPlaceForm(lngLat) { placeForm(null, lngLat); }

/* ========= 예약 보관함 ========= */
function viewTickets() {
  const f = S.ui.ticketFilter;
  const list = S.tickets.filter((t) => f === 'all' || t.cat === f).sort((a, b) => (a.date + a.time) < (b.date + b.time) ? -1 : 1);
  const next = nextTicket();
  return `<div class="stack" style="gap:14px">
    ${subHead('예약 보관함', '항공권, 숙소, 투어의 예약 정보와 파일을 한곳에.', addBtn('addTicket', '예약 추가'))}
    <div class="chips">
      <button class="chip ${f === 'all' ? 'on' : ''}" data-act="tfilter" data-f="all">전체 ${S.tickets.length}</button>
      ${Object.entries(TCATS).map(([k, v]) => `<button class="chip ${f === k ? 'on' : ''}" data-act="tfilter" data-f="${k}">${v}</button>`).join('')}
    </div>
    ${next && f === 'all' ? `<button class="gcard stack" data-act="openTicket" data-id="${next.id}" style="text-align:left;gap:8px">
      <span class="between"><span class="tag" style="background:#F08A5D;color:#10262B">다음 예약</span><span style="font-size:13px;color:#CDEDE5">${TCATS[next.cat] || ''}</span></span>
      <span style="font-size:24px;font-weight:700;color:#fff"><span class="num">${esc(next.time || '')}</span> ${esc(next.title)}</span>
      <span style="font-size:13px;color:#D3F0E8">${fmtDate(next.date)}${next.code ? ' · 예약번호 ' + esc(next.code) : ''} · 파일 ${next.imgs.length + next.files.length}개</span>
      ${next.imgs.length ? `<span class="thumbs">${next.imgs.slice(0, 4).map((id) => `<img data-img="${id}" alt="예약 캡처">`).join('')}</span>` : ''}
    </button>` : ''}
    <div class="stack">
      ${list.length ? list.map((t) => `<button class="card row" data-act="openTicket" data-id="${t.id}" style="border:0;text-align:left;gap:12px">
        <span class="micon">${svg(TCAT_ICON[t.cat] || 'ticket', 22, '#17806D')}</span>
        <span class="stack" style="flex:1;gap:2px;min-width:0"><b style="font-size:15px;font-weight:500">${esc(t.title)}</b><span class="small muted">${fmtDate(t.date)} ${esc(t.time)}${t.code ? ' · #' + esc(t.code) : ''}</span></span>
        <span class="small muted" style="background:#EAEFEB;border-radius:6px;padding:3px 7px;white-space:nowrap">${t.imgs.length + t.files.length ? '파일 ' + (t.imgs.length + t.files.length) : t.memo ? '메모' : '비어 있음'}</span>
      </button>`).join('') : '<div class="empty">아직 담아둔 예약이 없어요.<br>확정된 예약부터 하나씩 추가해 보세요.</div>'}
    </div>
  </div>`;
}
function ticketForm(existing) {
  const t = existing || { cat:'flight', title:'', date: currentDay(), time:'', memo:'', code:'', place:'', url:'' };
  openSheet(`
    <h2 style="margin-bottom:14px">${existing ? '예약 수정' : '새로운 예약'}</h2>
    <form class="stack" style="gap:12px" data-form="ticket" data-id="${existing ? existing.id : ''}">
      <div style="display:grid;grid-template-columns:1fr 1.4fr;gap:10px">
        <label class="field">예약 종류<select name="cat">${Object.entries(TCATS).map(([k, v]) => `<option value="${k}" ${k === t.cat ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
        <label class="field">예약번호<input name="code" value="${esc(t.code || '')}" placeholder="예: ABC123"></label>
      </div>
      <label class="field">예약 이름<input name="title" required value="${esc(t.title)}" placeholder="예: 호핑투어, 인천 → 칼리보"></label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <label class="field">이용일<input type="date" name="date" value="${esc(t.date)}"></label>
        <label class="field">시간<input type="time" name="time" value="${esc(t.time)}"></label>
      </div>
      <label class="field">주소 / 출발·도착 정보<input name="place" value="${esc(t.place || '')}" placeholder="예: 숙소 앞 픽업"></label>
      <label class="field">예약 페이지 (https://)<input type="url" name="url" value="${esc(t.url || '')}"></label>
      <label class="field">예약 파일 · 캡처 이미지, PDF, 메일(.eml/.txt)<input type="file" name="files" multiple accept="image/*,application/pdf,.pdf,.eml,.txt" style="padding-top:10px"></label>
      <label class="field">메모 · 메일 내용 붙여넣기<textarea name="memo" placeholder="픽업 장소, 포함 사항 등">${esc(t.memo)}</textarea></label>
      <button class="btn" type="submit">${existing ? '저장하기' : '추가하기'}</button>
    </form>`);
}
function ticketDetail(t) {
  openSheet(`
    <div class="between" style="margin-bottom:10px"><span class="tag">${TCATS[t.cat] || '예약'}</span>
      <span class="row" style="gap:0"><button class="icon" data-act="editTicket" data-id="${t.id}" aria-label="수정">${svg('edit', 18, '#5B6B6E')}</button>
      <button class="icon" data-act="delTicket" data-id="${t.id}" aria-label="삭제">${svg('trash', 18, '#B3412A')}</button></span></div>
    <h2 style="font-size:22px">${esc(t.title)}</h2>
    <p class="muted" style="margin:4px 0 12px">${fmtDate(t.date)} ${esc(t.time)}</p>
    <div class="card stack" style="gap:6px;margin-bottom:12px">
      ${t.code ? `<span class="between"><span class="muted">예약번호</span><b class="num" style="font-size:17px">${esc(t.code)}</b></span>` : ''}
      ${t.place ? `<span class="between" style="gap:12px"><span class="muted" style="flex-shrink:0">장소</span><a href="${gSearch({ q: t.place + ' ' + (S.trip.city || '') })}" target="_blank" rel="noopener" style="text-align:right">${esc(t.place)} ↗</a></span>` : ''}
      ${t.url ? `<a href="${esc(t.url)}" target="_blank" rel="noopener" style="font-weight:700">예약 페이지 열기 ↗</a>` : ''}
      ${!t.code && !t.place && !t.url ? '<span class="small muted">예약번호·장소를 수정에서 넣을 수 있어요</span>' : ''}
    </div>
    <div class="full">${t.imgs.map((id) => `<img data-img="${id}" alt="예약 캡처">`).join('')}</div>
    ${t.files.map((f) => `<button class="card row" data-act="openFile" data-id="${f.id}" style="border:0;width:100%;margin-bottom:8px;text-align:left">${svg('file', 20, '#17806D')}<span style="flex:1">${esc(f.name)}</span><span class="small muted">열기</span></button>`).join('')}
    ${t.memo ? `<pre class="memo">${esc(t.memo)}</pre>` : ''}`);
  hydrateImages();
}

/* ========= 체크리스트 ========= */
function viewCheck() {
  const f = S.ui.checkFilter || 'all';
  const all = S.checklist, done = all.filter((x) => x.done).length;
  const list = all.filter((x) => f === 'all' || x.owner === f);
  const groups = Object.entries(CHECK_CATS).map(([k, v]) => [v, list.filter((x) => x.cat === k)]).filter(([, l]) => l.length);
  return `<div class="stack" style="gap:14px">
    ${subHead('체크리스트', '공통 준비와 각자의 짐을 따로 체크해요.', addBtn('addCheck', '항목 추가'))}
    <div class="card stack" style="gap:8px">
      <div class="between"><b>준비 완료 <span class="num">${done} / ${all.length}</span></b><button class="chip" data-act="checkTemplate" style="height:34px">기본 준비물 담기 ＋</button></div>
      <span class="hbar" style="background:#E3E6E3;margin:0"><i style="width:${all.length ? Math.round(done / all.length * 100) : 0}%;background:#2DAA8A"></i></span>
    </div>
    <div class="chips">${[['all', '전체'], ['공통', '공통'], ...members().map((m) => [m, m])].map(([k, v]) => `<button class="chip ${f === k ? 'on' : ''}" data-act="cfilter" data-f="${esc(k)}">${esc(v)}</button>`).join('')}</div>
    ${groups.length ? groups.map(([g, l]) => `<div class="stack" style="gap:6px"><span class="small muted" style="font-weight:700">${g}</span>
      <div class="card" style="padding:0 6px 0 4px">${l.map((x) => `<div class="list-row" style="gap:4px;padding:4px 0">
        <button class="icon" data-act="toggleCheck" data-id="${x.id}" aria-label="${esc(x.title)} 체크" style="width:40px;height:40px"><span class="check ${x.done ? 'on' : ''}" style="border-radius:7px">${x.done ? svg('check', 14, '#fff', 3) : ''}</span></button>
        <span style="flex:1;font-size:15px" class="${x.done ? 'done-text' : ''}">${esc(x.title)}</span>
        <span class="ctag">${esc(x.owner)}</span>
        <button class="icon" data-act="editCheck" data-id="${x.id}" aria-label="수정" style="width:36px;height:36px">${svg('edit', 16, '#5B6B6E')}</button>
        <button class="icon" data-act="delCheck" data-id="${x.id}" aria-label="삭제" style="width:36px;height:36px">${svg('close', 16, '#B3412A')}</button>
      </div>`).join('')}</div></div>`).join('') : '<div class="empty">"기본 준비물 담기"로 시작해 보세요.</div>'}
  </div>`;
}
function checkForm(existing) {
  const x = existing || { title:'', cat:'pack', owner:'공통' };
  openSheet(`<h2 style="margin-bottom:14px">${existing ? '항목 수정' : '챙길 것 추가'}</h2>
    <form class="stack" style="gap:12px" data-form="check" data-id="${existing ? existing.id : ''}">
      <label class="field">항목 이름<input name="title" required value="${esc(x.title)}" placeholder="예: 방수팩"></label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <label class="field">분류<select name="cat">${Object.entries(CHECK_CATS).map(([k, v]) => `<option value="${k}" ${k === x.cat ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
        <label class="field">담당자<select name="owner">${['공통', ...members()].map((m) => `<option ${m === x.owner ? 'selected' : ''}>${esc(m)}</option>`).join('')}</select></label>
      </div>
      <button class="btn" type="submit">저장하기</button>
    </form>`);
}

/* ========= 경비 · 정산 · 환율 ========= */
function settlement() {
  const ms = members(), total = S.expenses.reduce((s, e) => s + (+e.amount || 0), 0), share = total / ms.length;
  const paid = Object.fromEntries(ms.map((m) => [m, 0]));
  S.expenses.forEach((e) => { if (paid[e.payer] === undefined) paid[e.payer] = 0; paid[e.payer] += +e.amount || 0; });
  const bal = Object.entries(paid).map(([m, p]) => ({ m, p, b: p - (ms.includes(m) ? share : 0) }));
  const cred = bal.filter((x) => x.b > 0.5).map((x) => ({ ...x })), debt = bal.filter((x) => x.b < -0.5).map((x) => ({ ...x }));
  const moves = [];
  for (const d of debt) for (const c of cred) { if (d.b >= -0.5) break; const amt = Math.min(-d.b, c.b); if (amt > 0.5) { moves.push({ from: d.m, to: c.m, amt }); d.b += amt; c.b -= amt; } }
  return { total, share, bal, moves };
}
function viewMoney() {
  const st = settlement(), budget = +S.trip.budget || 0, left = budget - st.total;
  const list = S.expenses.slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const cur = S.ui.fxCur || 'PHP', rate = krwPer(cur);
  const byCat = Object.entries(EXP_CATS).map(([k, v]) => [v, S.expenses.filter((e) => e.cat === k).reduce((s, e) => s + (+e.amount || 0), 0)]).filter(([, n]) => n > 0);
  return `<div class="stack" style="gap:16px">
    <div class="between"><h1>경비 · 정산</h1>${addBtn('addExpense', '지출 추가')}</div>
    <div class="gcard stack" style="gap:6px">
      <span style="font-size:13px;color:#CDEDE5">사용한 금액</span>
      <b class="num" style="font-size:34px;color:#fff;line-height:1.1">${won(st.total)}</b>
      ${budget ? `<span class="hbar" style="margin:6px 0 2px"><i style="width:${Math.min(100, Math.round(st.total / budget * 100))}%"></i></span>
      <span class="between" style="font-size:12px;color:#D3F0E8"><span>예산 ${won(budget)}</span><span>${left >= 0 ? '남은 예산 ' + won(left) : '예산 초과 ' + won(-left)}</span></span>` : `<button data-act="settings" style="border:0;background:none;color:#D3F0E8;padding:0;text-align:left;font-size:13px">예산 정하기 ›</button>`}
    </div>
    ${byCat.length ? `<div class="chips">${byCat.map(([v, n]) => `<span class="chip" style="cursor:default">${v} <b class="num">${won(n)}</b></span>`).join('')}</div>` : ''}
    <div class="stack" style="gap:8px">
      <h2>함께 쓴 여행 경비</h2>
      <span class="small muted">원화로 기록하고, 동행자 전원이 똑같이 나눠 부담해요.</span>
      ${list.length ? `<div class="card" style="padding:0 6px 0 14px">${list.map((e) => `<div class="list-row" style="gap:10px">
        <span class="micon" style="width:36px;height:36px;border-radius:10px">${svg(EXP_ICON[e.cat] || 'coin', 18, '#17806D')}</span>
        <span class="stack" style="flex:1;min-width:0;gap:1px"><span style="font-size:15px;font-weight:500">${esc(e.title)}</span><span class="small muted">${e.date ? fmtDate(e.date) : ''} · ${esc(e.payer)} 결제 · ${EXP_CATS[e.cat] || ''}${e.orig ? ' · ' + esc(e.orig) : ''}</span></span>
        <b class="num" style="white-space:nowrap">${won(e.amount)}</b>
        <button class="icon" data-act="editExpense" data-id="${e.id}" aria-label="수정" style="width:34px;height:34px">${svg('edit', 15, '#5B6B6E')}</button>
        <button class="icon" data-act="delExpense" data-id="${e.id}" aria-label="삭제" style="width:34px;height:34px">${svg('close', 15, '#B3412A')}</button>
      </div>`).join('')}</div>` : '<div class="card empty">첫 번째 지출을 기록해 보세요.</div>'}
    </div>
    <div class="stack" style="gap:8px">
      <h2>우리의 정산</h2>
      <div class="card stack" style="gap:10px">
        <div class="between"><span class="muted">총 지출</span><b class="num">${won(st.total)}</b></div>
        <div class="between"><span class="muted">1인당 (${members().length}명)</span><b class="num">약 ${won(st.share)}</b></div>
        <div style="height:1px;background:#EEF0EC"></div>
        ${st.bal.map((x) => `<div class="between"><span><b>${esc(x.m)}</b> <span class="small muted">· ${won(x.p)} 냄</span></span><span class="num" style="font-weight:700;color:${x.b >= 0 ? '#17806D' : '#B3412A'}">${x.b >= 0 ? '받을 금액 ' : '보낼 금액 '}${won(Math.abs(x.b))}</span></div>`).join('')}
        ${st.moves.length ? `<div class="stack" style="gap:6px;background:#E6F3EF;border-radius:12px;padding:10px 12px">${st.moves.map((m) => `<span style="font-size:14px"><b>${esc(m.from)}</b> → <b>${esc(m.to)}</b> <b class="num">${won(m.amt)}</b> 보내기</span>`).join('')}</div>` : ''}
        <span class="small muted">원 단위 반올림으로 1원 차이가 날 수 있어요.</span>
      </div>
    </div>
    <div class="stack" style="gap:8px">
      <h2>여행지 돈, 원화로 얼마?</h2>
      <div class="card stack" style="gap:10px">
        <div style="display:grid;grid-template-columns:1fr 1.3fr;gap:10px">
          <label class="field">현지 통화<select id="fxCur" data-fx="cur">${CURS.map((c) => `<option ${c === cur ? 'selected' : ''}>${c}</option>`).join('')}</select></label>
          <label class="field">현지 금액<input id="fxAmt" data-fx="amt" type="number" inputmode="decimal" value="${esc(S.ui.fxAmt || '')}" placeholder="예: 500"></label>
        </div>
        <label class="field"><span id="fxRateLabel">1 ${cur}당 원화 (직접 고쳐도 돼요)</span><input id="fxRate" data-fx="rate" type="number" inputmode="decimal" step="any" value="${rate ? +rate.toFixed(4) : ''}" placeholder="환율 입력"></label>
        <div class="between"><span class="muted">원화 환산</span><b class="num" id="fxOut" style="font-size:24px">₩ 0</b></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <button class="btn ghost" data-act="fxRefresh" style="height:44px">환율 새로고침 ↻</button>
          <button class="btn" data-act="fxToExpense" style="height:44px">이 금액으로 지출 ＋</button>
        </div>
        <span class="small muted">${DB.fx.at ? `기준 ${esc(DB.fx.at)} · Exchange Rate API 참고 환율` : '인터넷이 되면 최신 참고 환율을 받아와요'}. 카드·환전 수수료는 빠져 있어요.</span>
      </div>
    </div>
  </div>`;
}
function updateFx() {
  const amt = parseFloat(($('#fxAmt') || {}).value), rate = parseFloat(($('#fxRate') || {}).value), out = $('#fxOut');
  if (out) out.textContent = won(isNaN(amt) || isNaN(rate) ? 0 : amt * rate);
}
async function fetchFx(manual) {
  try {
    const j = await (await fetch('https://open.er-api.com/v6/latest/KRW')).json();
    if (j.result !== 'success') throw new Error();
    const rates = {}; CURS.forEach((c) => { if (j.rates[c]) rates[c] = 1 / j.rates[c]; });
    DB.fx = { at: (j.time_last_update_utc || '').slice(5, 16), rates, fetched: Date.now() }; save();
    if (S.ui.tab === 'money') render(); if (manual) toast('환율을 새로 받았어요');
  } catch (e) { if (manual) toast('지금은 환율을 받아올 수 없어요. 직접 입력해 주세요'); }
}
function expenseForm(existing, preset) {
  const e = existing || Object.assign({ title:'', amount:'', date: tripDays().includes(todayStr()) ? todayStr() : S.trip.start, payer: members()[0], cat:'food' }, preset || {});
  openSheet(`<h2 style="margin-bottom:14px">${existing ? '지출 수정' : '지출 기록'}</h2>
    <form class="stack" style="gap:12px" data-form="expense" data-id="${existing ? existing.id : ''}" data-orig="${esc(e.orig || '')}">
      <label class="field">사용 내역<input name="title" required value="${esc(e.title)}" placeholder="예: 망고 셰이크 2잔"></label>
      <label class="field">금액 (원) · 외화는 원화로 환산해서<input type="number" name="amount" inputmode="numeric" required value="${esc(e.amount)}"></label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <label class="field">결제일<input type="date" name="date" value="${esc(e.date)}"></label>
        <label class="field">결제한 사람<select name="payer">${members().map((m) => `<option ${m === e.payer ? 'selected' : ''}>${esc(m)}</option>`).join('')}</select></label>
      </div>
      <label class="field">분류<select name="cat">${Object.entries(EXP_CATS).map(([k, v]) => `<option value="${k}" ${k === e.cat ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
      <button class="btn" type="submit">저장하기</button>
    </form>`);
}

/* ========= 날씨 ========= */
const WX = (c) => c === 0 ? ['맑음', 'sunny'] : c <= 2 ? ['구름 조금', 'cloud'] : c === 3 ? ['흐림', 'cloud'] : c <= 48 ? ['안개', 'cloud'] : c <= 57 ? ['이슬비', 'rain'] : c <= 67 ? ['비', 'rain'] : c <= 77 ? ['눈', 'cloud'] : c <= 82 ? ['소나기', 'rain'] : ['뇌우', 'rain'];
const wxOf = () => DB.weather[S.id];
async function fetchWeather(manual) {
  const t = S.trip, id = S.id;
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${t.lat}&longitude=${t.lng}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunset&timezone=auto&forecast_days=16`;
    const j = await (await fetch(url)).json();
    if (!j.daily) throw new Error();
    DB.weather[id] = { at: Date.now(), data: j }; save();
    if (S.id === id && (S.ui.tab === 'sunset' || S.ui.tab === 'home')) render();
    if (manual) toast('날씨를 새로 받았어요');
  } catch (e) { if (manual) toast('지금은 날씨를 받아올 수 없어요'); }
}
function maybeWeather() { const w = wxOf(); if (!w || Date.now() - w.at > 3600e3) fetchWeather(false); }
function weatherBlock() {
  const w = wxOf();
  if (!w) return `<div class="card stack" style="gap:8px"><b>${esc(S.trip.city || '여행지')}의 하늘</b><span class="small muted">인터넷이 연결된 브라우저에서 열면 최대 16일 예보가 보여요.</span><button class="btn ghost" data-act="wxRefresh" style="height:42px">날씨 불러오기 ↻</button></div>`;
  const d = w.data, cur = d.current || {}, [cl, ci] = WX(cur.weather_code);
  const inTrip = new Set(tripDays());
  return `<div class="card stack" style="gap:12px">
    <div class="between"><div class="row" style="gap:12px">${svg(ci, 40, '#F08A5D', 1.8)}<div class="stack" style="gap:0"><b class="num" style="font-size:30px;line-height:1.1">${Math.round(cur.temperature_2m)}°</b><span class="small muted">${esc(S.trip.city)} · 지금 ${cl}</span></div></div>
      <button class="chip" data-act="wxRefresh" style="height:34px">새로고침 ↻</button></div>
    <div class="wxrow">${d.daily.time.map((ds, i) => { const [l, ic] = WX(d.daily.weather_code[i]); return `<div class="wxday ${inTrip.has(ds) ? 'trip' : ''}">
      <span class="small" style="font-weight:700">${ds.slice(5).replace('-', '.')}</span>${svg(ic, 24, ic === 'sunny' ? '#F08A5D' : '#5B8C9A', 1.8)}
      <span class="small">${l}</span><span class="num small"><b>${Math.round(d.daily.temperature_2m_max[i])}°</b> <span class="muted">${Math.round(d.daily.temperature_2m_min[i])}°</span></span>
      <span class="small muted">☼ ${(d.daily.sunset[i] || '').slice(11, 16)}</span></div>`; }).join('')}</div>
    <span class="small muted">초록 테두리는 여행 날짜예요. 예보 범위 밖이면 출발이 가까워진 뒤 다시 확인해 주세요. 출처: Open-Meteo · ${new Date(w.at).toLocaleString('ko-KR', { month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit' })}</span>
  </div>`;
}
const wxNowText = () => { const w = wxOf(); if (!w || !w.data.current) return ''; return `${Math.round(w.data.current.temperature_2m)}° ${WX(w.data.current.weather_code)[0]}`; };

/* ========= 여행 기록 ========= */
function viewJournal() {
  const list = S.journal.slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  return `<div class="stack" style="gap:14px">
    ${subHead('여행 기록', '사진 한 장, 짧은 한 줄로 여행을 기억해요.', addBtn('addJournal', '기록 남기기'))}
    ${list.length ? list.map((j) => `<div class="card" style="padding:0;overflow:hidden">
      ${j.photo ? `<img data-img="${j.photo}" alt="${esc(j.title)}" style="width:100%;max-height:260px;object-fit:cover;display:block">` : ''}
      <div class="stack" style="gap:4px;padding:14px">
        <div class="between"><b style="font-size:17px">${esc(j.title)}</b><span style="color:#F08A5D;letter-spacing:1px" aria-label="만족도 ${j.rating}점">${'★'.repeat(j.rating || 0)}<span style="color:#D3DAD5">${'★'.repeat(5 - (j.rating || 0))}</span></span></div>
        <span class="small muted">${j.date ? fmtDate(j.date) : ''}${j.place ? ' · ' + esc(j.place) : ''}</span>
        ${j.note ? `<p style="margin:6px 0 0;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(j.note)}</p>` : ''}
        <div class="row" style="justify-content:flex-end;gap:0"><button class="icon" data-act="editJournal" data-id="${j.id}" aria-label="수정">${svg('edit', 17, '#5B6B6E')}</button><button class="icon" data-act="delJournal" data-id="${j.id}" aria-label="삭제">${svg('trash', 17, '#B3412A')}</button></div>
      </div></div>`).join('') : '<div class="empty">오늘의 좋았던 순간을 남겨볼까요?</div>'}
  </div>`;
}
function journalForm(existing) {
  const j = existing || { title:'', date: tripDays().includes(todayStr()) ? todayStr() : S.trip.start, place:'', rating:5, note:'' };
  openSheet(`<h2 style="margin-bottom:14px">${existing ? '기록 수정' : '오늘의 순간 남기기'}</h2>
    <form class="stack" style="gap:12px" data-form="journal" data-id="${existing ? existing.id : ''}">
      <label class="field">한 줄 제목<input name="title" required value="${esc(j.title)}" placeholder="예: 인생 선셋 본 날"></label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <label class="field">날짜<input type="date" name="date" value="${esc(j.date)}"></label>
        <label class="field">만족도<select name="rating">${[5, 4, 3, 2, 1].map((n) => `<option value="${n}" ${n === +j.rating ? 'selected' : ''}>${'★'.repeat(n)} ${n}</option>`).join('')}</select></label>
      </div>
      <label class="field">장소<input name="place" value="${esc(j.place)}" placeholder="예: Willy's Rock"></label>
      <label class="field">이 순간의 이야기<textarea name="note">${esc(j.note)}</textarea></label>
      <label class="field">사진 한 장<input type="file" name="photo" accept="image/*" style="padding-top:10px"></label>
      <button class="btn" type="submit">저장하기</button>
    </form>`);
}

/* ========= 새 기능 클릭 ========= */
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act, id = b.dataset.id, rr = () => { save(); render(); };
  switch (a) {
    case 'trips': tripsSheet(); break;
    case 'newTrip': tripForm(true); break;
    case 'settings': tripForm(false); break;
    case 'switchTrip': switchTrip(id); toast(`${S.trip.name}(으)로 바꿨어요`); break;
    case 'delTrip':
      if (b.dataset.confirm) { const gone = S.id; delete DB.trips[gone]; delete DB.weather[gone]; switchTrip(Object.keys(DB.trips)[0]); toast('여행을 삭제했어요'); }
      else { b.dataset.confirm = '1'; b.textContent = '한 번 더 누르면 삭제돼요'; }
      break;
    case 'reset':
      if (b.dataset.confirm) { const t = ensureTrip(seed()); t.id = S.id; DB.trips[S.id] = t; switchTrip(S.id); toast('예시 데이터로 초기화했어요'); }
      else { b.dataset.confirm = '1'; b.textContent = '한 번 더 누르면 초기화돼요'; }
      break;
    case 'share': shareSheet(); break;
    case 'copyItin': {
      const txt = itineraryText();
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => toast('일정을 복사했어요. 카톡에 붙여넣어 보내세요'))
        .catch(() => { $('#shareOut').innerHTML = `<label class="field" style="margin-top:12px">아래 글을 길게 눌러 복사하세요<textarea readonly style="height:200px">${esc(txt)}</textarea></label>`; });
      break;
    }
    case 'exportAll': exportData(false); break;
    case 'exportTrip': exportData(true); break;
    case 'importAdd': applyImport(false); break;
    case 'importReplace':
      if (b.dataset.confirm) applyImport(true); else { b.dataset.confirm = '1'; b.textContent = '한 번 더 누르면 모두 바뀌어요'; }
      break;
    case 'plist': S.ui.placeList = b.dataset.f; rr(); break;
    case 'mbTheme':
      S.ui.mbTheme = S.ui.mbTheme === 'original' ? 'app' : 'original'; save();
      if (map) { try { map.remove(); } catch (er) {} map = null; mapState = 'idle'; markers = []; numMarkers = []; decorMarkers = []; meMarker = null; }
      closeSheet(); toast(S.ui.mbTheme === 'original' ? '내가 꾸민 원래 색으로 보여드릴게요' : '앱 지도 스타일로 칠할게요'); break;
    case 'showOnMap': {
      const t = findTodo(id), d = findTodoDay(id), p = t && placeById(t.placeId);
      S.ui.day = d; S.ui.placeFilter = 'all';
      if (p && p.lat) { openOnMap(p); }
      else { S.ui.pinTodo = id; S.ui.selPlace = null; closeSheet(); S.ui.tab = 'map'; save(); render(); toast('지도를 길게 눌러 위치를 정해 주세요'); }
      break;
    }
    case 'dayOnMap': { S.ui.day = b.dataset.day; S.ui.placeFilter = 'all'; const st = sortTodos(todosOf(S.ui.day).slice()).map((x) => placeById(x.placeId)).find((pp) => pp && pp.lat); if (st) openOnMap(st, true); break; }
    case 'placeOnMap': openOnMap(placeById(id)); break;
    case 'cancelPin': delete S.ui.pinTodo; save(); renderMapCard(); break;
    case 'newPlace': placeForm(null, null); break;
    case 'editPlace': placeForm(placeById(id)); break;
    case 'visitPlace': { const p = placeById(id); p.visited = !p.visited; save(); if ($('#sheet').style.display === 'block') placeSheet(p); render(); break; }
    case 'openFile': (async () => { const blob = await getImgBlob(id); if (!blob) { toast('파일을 찾을 수 없어요'); return; } const a2 = document.createElement('a'); a2.href = URL.createObjectURL(blob); a2.target = '_blank'; a2.rel = 'noopener'; document.body.appendChild(a2); a2.click(); a2.remove(); })(); break;
    case 'addCheck': checkForm(null); break;
    case 'editCheck': checkForm(S.checklist.find((x) => x.id === id)); break;
    case 'delCheck': S.checklist = S.checklist.filter((x) => x.id !== id); rr(); break;
    case 'toggleCheck': { const x = S.checklist.find((y) => y.id === id); x.done = !x.done; rr(); break; }
    case 'cfilter': S.ui.checkFilter = b.dataset.f; rr(); break;
    case 'checkTemplate': {
      const have = new Set(S.checklist.map((x) => x.title)); let n = 0;
      CHECK_TEMPLATE.forEach(([t, c]) => { if (!have.has(t)) { S.checklist.push({ id: uid(), title: t, cat: c, owner: '공통', done: false }); n++; } });
      rr(); toast(n ? `기본 준비물 ${n}개를 담았어요` : '이미 다 담겨 있어요'); break;
    }
    case 'addExpense': expenseForm(null); break;
    case 'editExpense': expenseForm(S.expenses.find((x) => x.id === id)); break;
    case 'delExpense': S.expenses = S.expenses.filter((x) => x.id !== id); rr(); toast('지출을 지웠어요'); break;
    case 'fxRefresh': fetchFx(true); break;
    case 'fxToExpense': {
      const amt = parseFloat($('#fxAmt').value), rate = parseFloat($('#fxRate').value), cur = $('#fxCur').value;
      if (isNaN(amt) || isNaN(rate)) { toast('현지 금액과 환율을 넣어 주세요'); break; }
      expenseForm(null, { amount: Math.round(amt * rate), orig: `${amt.toLocaleString()} ${cur}` }); break;
    }
    case 'wxRefresh': fetchWeather(true); break;
    case 'addJournal': journalForm(null); break;
    case 'editJournal': journalForm(S.journal.find((x) => x.id === id)); break;
    case 'delJournal': { const j = S.journal.find((x) => x.id === id); if (j && j.photo) delImg(j.photo); S.journal = S.journal.filter((x) => x.id !== id); rr(); toast('기록을 지웠어요'); break; }
  }
});
document.addEventListener('input', (e) => {
  const el = e.target;
  if (el.id === 'placeListQ') {
    S.ui.placeQ = el.value; const box = $('#placeListBox');
    if (box) { const tmp = document.createElement('div'); tmp.innerHTML = viewPlaces(); box.innerHTML = tmp.querySelector('#placeListBox').innerHTML; hydrateImages(); }
  }
  if (el.dataset && el.dataset.fx) {
    if (el.dataset.fx === 'cur') { S.ui.fxCur = el.value; S.ui.fxAmt = ($('#fxAmt') || {}).value; save(); const r = krwPer(el.value); $('#fxRate').value = r ? +r.toFixed(4) : ''; $('#fxRateLabel').textContent = `1 ${el.value}당 원화 (직접 고쳐도 돼요)`; }
    if (el.dataset.fx === 'amt') { S.ui.fxAmt = el.value; save(); }
    if (el.dataset.fx === 'rate') { const r = parseFloat(el.value); if (!isNaN(r) && r > 0) { DB.fx.rates[$('#fxCur').value] = r; save(); } }
    updateFx();
  }
});
document.addEventListener('change', (e) => {
  const inp = e.target;
  if (inp.dataset && inp.dataset.import && inp.files[0]) readImport(inp.files[0]);
  if (inp.dataset && inp.dataset.fx === 'cur') inp.dispatchEvent(new Event('input', { bubbles: true }));
});

/* ========= 폼 저장 ========= */
document.addEventListener('submit', async (e) => {
  const form = e.target; e.preventDefault();
  const fd = new FormData(form), kind = form.dataset.form, id = form.dataset.id;
  const str = (k) => String(fd.get(k) || '').trim();
  if (kind === 'todo') {
    const data = { time: str('time'), title: str('title'), placeId: str('placeId'), cat: str('cat'), where: str('where'), note: str('note'), sunset: !!fd.get('sunset') };
    const day = str('day');
    if (id) { const old = findTodoDay(id), t = findTodo(id); Object.assign(t, data); if (old !== day) { S.todos[old] = S.todos[old].filter((x) => x.id !== id); todosOf(day).push(t); } }
    else todosOf(day).push({ id: uid(), done: false, ...data });
    S.ui.day = day; closeSheet(); save(); render(); refreshMap(); toast(id ? '수정했어요' : '추가했어요');
  }
  if (kind === 'menu') {
    const p = placeById(form.dataset.pid);
    p.menu.push({ id: uid(), name: str('name'), price: str('price').replace(/[^\d.]/g, '') });
    save(); placeSheet(p);
  }
  if (kind === 'place') {
    const data = { name: str('name'), cat: str('cat'), priority: str('priority'), url: str('url'), area: str('area'), signature: str('signature'), priceRange: str('priceRange'), hours: str('hours'), memo: str('memo') };
    let p = id && placeById(id);
    if (p) Object.assign(p, data);
    else { const lng = parseFloat(form.dataset.lng), lat = parseFloat(form.dataset.lat); p = { id: uid(), menu: [], visited: false, lat: isNaN(lat) ? null : lat, lng: isNaN(lng) ? null : lng, ...data }; S.places.push(p);
      if (S.ui.pinTodo && p.lat) { const tt = findTodo(S.ui.pinTodo); if (tt) { tt.placeId = p.id; S.ui.selPlace = p.id; } delete S.ui.pinTodo; save(); closeSheet(); render(); refreshMap(); toast('일정에 위치를 연결했어요'); return; } }
    save(); render(); refreshMap(); placeSheet(p); toast(id ? '수정했어요' : '장소를 저장했어요');
  }
  if (kind === 'ticket') {
    const t = id ? S.tickets.find((x) => x.id === id) : { id: uid(), imgs: [], files: [] };
    Object.assign(t, { cat: str('cat'), title: str('title'), date: str('date'), time: str('time'), memo: String(fd.get('memo') || ''), code: str('code'), place: str('place'), url: str('url') });
    for (const file of form.querySelector('[name=files]').files) {
      if (file.type.startsWith('image/')) { const imgId = uid(); putImg(imgId, file); t.imgs.push(imgId); }
      else if (file.type === 'application/pdf' || /\.pdf$/i.test(file.name)) { const fid = uid(); putImg(fid, file); t.files.push({ id: fid, name: file.name }); }
      else { try { const txt = await file.text(); t.memo = (t.memo ? t.memo + '\n\n' : '') + `[${file.name}]\n` + txt.slice(0, 20000); } catch (err) {} }
    }
    if (!id) S.tickets.push(t);
    closeSheet(); save(); render(); toast(id ? '저장했어요' : '예약을 보관했어요');
  }
  if (kind === 'check') {
    const data = { title: str('title'), cat: str('cat'), owner: str('owner') };
    if (id) Object.assign(S.checklist.find((x) => x.id === id), data); else S.checklist.push({ id: uid(), done: false, ...data });
    closeSheet(); save(); render();
  }
  if (kind === 'expense') {
    const data = { title: str('title'), amount: Math.round(+str('amount') || 0), date: str('date'), payer: str('payer'), cat: str('cat') };
    if (id) Object.assign(S.expenses.find((x) => x.id === id), data); else S.expenses.push({ id: uid(), orig: form.dataset.orig || '', ...data });
    S.ui.tab = 'money'; closeSheet(); save(); render(); toast('지출을 기록했어요');
  }
  if (kind === 'journal') {
    const data = { title: str('title'), date: str('date'), place: str('place'), rating: +str('rating') || 5, note: String(fd.get('note') || '') };
    const j = id ? S.journal.find((x) => x.id === id) : { id: uid() };
    Object.assign(j, data);
    const f = form.querySelector('[name=photo]').files[0];
    if (f) { if (j.photo) delImg(j.photo); j.photo = uid(); putImg(j.photo, f); }
    if (!id) S.journal.push(j);
    closeSheet(); save(); render(); toast('기록을 남겼어요');
  }
  if (kind === 'trip') {
    const s = str('start'), en = str('end');
    if (en < s) { toast('마지막 날이 출발일보다 빨라요'); return; }
    const data = { name: str('name') || '새 여행', city: str('city'), start: s, end: en, members: str('members').split(',').map((x) => x.trim()).filter(Boolean), budget: +str('budget') || 0 };
    if (!data.members.length) data.members = ['나'];
    let t, cityChanged = true;
    if (form.dataset.new) {
      t = ensureTrip({ trip: data, ui: { tab: 'home', day: s } }); DB.trips[t.id] = t;
    } else { t = S; cityChanged = t.trip.city !== data.city; Object.assign(t.trip, data); t.alarm.fired = {}; if (cityChanged) delete DB.weather[t.id]; }
    const cv = form.querySelector('[name=cover]').files[0];
    if (cv) { if (t.trip.cover) delImg(t.trip.cover); t.trip.cover = uid(); putImg(t.trip.cover, cv); }
    save();
    if (data.city && (form.dataset.new || cityChanged)) geocodeCity(t);
    if (form.dataset.new) { switchTrip(t.id); toast('새 여행을 만들었어요'); } else { closeSheet(); render(); toast('저장했어요'); }
  }
});

/* ========= 앱 안 길찾기 (Mapbox Directions · 도보) ========= */
let NAV = null;
const hav = (a, b) => { const R = 6371000, r = Math.PI / 180, dLa = (b[1] - a[1]) * r, dLo = (b[0] - a[0]) * r;
  const x = Math.sin(dLa / 2) ** 2 + Math.cos(a[1] * r) * Math.cos(b[1] * r) * Math.sin(dLo / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(x)); };
const fmtDist = (m) => m >= 1000 ? (m / 1000).toFixed(1) + 'km' : Math.max(0, Math.round(m / 10) * 10) + 'm';
const gDir = (p) => `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}&travelmode=walking`;
async function fetchRoute(o, d) {
  const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${o.lng},${o.lat};${d.lng},${d.lat}?geometries=geojson&overview=full&steps=true&language=ko&access_token=${MAPBOX_TOKEN}`;
  const r = await fetch(url); const j = await r.json();
  if (!j.routes || !j.routes.length) throw new Error(j.message || 'no route');
  const rt = j.routes[0], geo = rt.geometry.coordinates, cum = [0];
  for (let i = 1; i < geo.length; i++) cum.push(cum[i - 1] + hav(geo[i - 1], geo[i]));
  let acc = 0; const steps = [];
  rt.legs[0].steps.forEach((s) => { steps.push({ text: s.maneuver.instruction, at: acc, dist: s.distance }); acc += s.distance; });
  return { geo, cum, steps, total: rt.distance, dur: rt.duration };
}
async function navTo(destId) {
  const dest = typeof destId === 'object' ? destId : placeById(destId);
  if (!dest || !dest.lat) { toast('이 장소는 지도 위치가 없어요'); return; }
  closeSheet();
  if (!(userPos && insideBoracay(userPos))) {
    if (geoWatch === null) locate(true);
    toast('내 위치를 찾는 중…');
    for (let i = 0; i < 8 && !(userPos && insideBoracay(userPos)); i++) await new Promise((r) => setTimeout(r, 500));
  }
  if (userPos && insideBoracay(userPos)) startNav(dest, { lng: userPos.lng, lat: userPos.lat, label: '내 위치' }, true);
  else originSheet(dest);
}
function originSheet(dest) {
  const opts = S.places.filter((p) => p.lat && p.id !== dest.id);
  openSheet(`<h2>출발지 고르기</h2>
    <p class="muted" style="font-size:13px;line-height:1.6;margin:6px 0 12px">지금은 내 위치를 쓸 수 없거나 보라카이 밖에 있어요. 보라카이에서 위치를 허용하면 내 위치에서 바로 안내해요. 미리 보려면 출발지를 골라 주세요.</p>
    <div class="stack" style="gap:6px;max-height:340px;overflow-y:auto">${opts.map((p) => `<button class="card row" data-act="navFrom" data-id="${p.id}" data-to="${dest.id}" style="border:0;text-align:left;gap:10px">
      <span class="micon" style="width:36px;height:36px">${svg(CAT_ICON[p.cat] || 'pin', 18, '#17806D')}</span><span style="flex:1">${esc(p.name)}</span>${svg('chev', 16, '#5B6B6E')}</button>`).join('')}</div>
    <a class="btn ghost" href="${gDir(dest)}" target="_blank" rel="noopener" style="text-decoration:none;width:100%;margin-top:12px">구글맵으로 길안내 ↗</a>`);
}
async function startNav(dest, origin, live) {
  toast('경로를 찾는 중…');
  try {
    const r = await fetchRoute(origin, dest);
    NAV = Object.assign(r, { dest, origin, live, remaining: r.total, lastRoute: Date.now(), next: r.steps[1] || null, toNext: r.steps[1] ? r.steps[1].at : r.total });
    $('#toast').style.display = 'none';
    S.ui.tab = 'map'; S.ui.selPlace = dest.id; delete S.ui.pinTodo; save(); render();
    requestAnimationFrame(fitNav);
  } catch (e) {
    openSheet(`<h2>길찾기를 할 수 없어요</h2>
      <p class="muted" style="font-size:13px;line-height:1.6;margin:6px 0 14px">경로 서버(Mapbox)에 연결하지 못했어요. Claude 앱 안이나 인터넷이 안 될 때는 길찾기가 안 돼요. Safari 같은 브라우저로 연 앱에서 다시 해 보거나 구글맵으로 안내받으세요.</p>
      <a class="btn" href="${gDir(dest)}" target="_blank" rel="noopener" style="text-decoration:none;width:100%">구글맵으로 길안내 ↗</a>`);
  }
}
function fitPoints(coords) {
  const el = $('#svgmap'); if (!view || !el.clientWidth) return;
  const ps = coords.map((c) => proj(c[0], c[1])), xs = ps.map((p) => p[0]), ys = ps.map((p) => p[1]);
  const top = headerH() + 30, availH = el.clientHeight - top - bottomH() - 30, bw = Math.max(...xs) - Math.min(...xs) + 1, bh = Math.max(...ys) - Math.min(...ys) + 1;
  view.k = Math.max(view.min, Math.min(view.max, Math.min((el.clientWidth - 100) / bw, availH / bh)));
  view.tx = el.clientWidth / 2 - (Math.max(...xs) + Math.min(...xs)) / 2 * view.k;
  view.ty = top + availH / 2 - (Math.max(...ys) + Math.min(...ys)) / 2 * view.k;
  clampView(); drawSvgMap();
}
function fitNav() {
  if (!NAV) return;
  if (map && mapState === 'ready') {
    const xs = NAV.geo.map((c) => c[0]), ys = NAV.geo.map((c) => c[1]);
    map.fitBounds([[Math.min(...xs), Math.min(...ys)], [Math.max(...xs), Math.max(...ys)]], { padding: { top: headerH() + 20, bottom: bottomH() + 20, left: 40, right: 40 } });
    refreshMap(); return;
  }
  const el = $('#svgmap'); if (!view || !el.clientWidth) return;
  const ps = NAV.geo.map((c) => proj(c[0], c[1])), xs = ps.map((p) => p[0]), ys = ps.map((p) => p[1]);
  const top = headerH() + 30, availH = el.clientHeight - top - bottomH() - 30, bw = Math.max(...xs) - Math.min(...xs) + 1, bh = Math.max(...ys) - Math.min(...ys) + 1;
  view.k = Math.max(view.min, Math.min(view.max, Math.min((el.clientWidth - 80) / bw, availH / bh)));
  view.tx = el.clientWidth / 2 - (Math.max(...xs) + Math.min(...xs)) / 2 * view.k;
  view.ty = top + availH / 2 - (Math.max(...ys) + Math.min(...ys)) / 2 * view.k;
  clampView(); drawSvgMap();
}
function navUpdate() {
  if (!NAV || !NAV.live || !userPos) return;
  const me = [userPos.lng, userPos.lat];
  if (hav(me, [NAV.dest.lng, NAV.dest.lat]) < 25) { const name = NAV.dest.name; endNav(); toast(`${name}에 도착했어요!`); if (navigator.vibrate) try { navigator.vibrate(200); } catch (e) {} return; }
  let bi = 0, bd = Infinity;
  NAV.geo.forEach((c, i) => { const d = hav(me, c); if (d < bd) { bd = d; bi = i; } });
  if (bd > 40 && Date.now() - NAV.lastRoute > 15000) {
    NAV.lastRoute = Date.now();
    fetchRoute({ lng: userPos.lng, lat: userPos.lat }, NAV.dest).then((r) => { if (!NAV) return; Object.assign(NAV, r, { remaining: r.total, next: r.steps[1] || null, toNext: r.steps[1] ? r.steps[1].at : r.total }); toast('경로를 다시 찾았어요'); refreshMap(); }).catch(() => {});
    return;
  }
  const done = NAV.cum[bi];
  NAV.remaining = Math.max(0, NAV.total - done);
  const nx = NAV.steps.find((s) => s.at > done + 5);
  NAV.next = nx || null; NAV.toNext = nx ? nx.at - done : NAV.remaining;
  if (S.ui.tab === 'map') { renderMapCard(); refreshMap(); }
}
function endNav() { NAV = null; if (S.ui.tab === 'map') { renderMapCard(); refreshMap(); } }
function navCard() {
  const min = Math.max(1, Math.round(NAV.remaining / NAV.total * NAV.dur / 60));
  return `<div class="mcard" style="flex-direction:column;align-items:stretch;gap:8px">
    <div class="row" style="gap:12px">
      <span class="micon" style="background:#1A73E8">${svg('nav', 22, '#fff')}</span>
      <div class="stack" style="flex:1;min-width:0;gap:2px">
        <span class="small" style="color:#1A73E8;font-weight:700">${NAV.live ? '도보 안내 중' : `${esc(NAV.origin.label || '')}에서 미리보기`}</span>
        <b style="font-size:17px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(NAV.dest.name)}</b>
      </div>
      <div class="stack" style="align-items:flex-end;gap:0"><b class="num" style="font-size:22px">${min}분</b><span class="small muted">${fmtDist(NAV.remaining)}</span></div>
    </div>
    <div class="row" style="gap:10px;background:#EEF4FD;border-radius:14px;padding:10px 12px;font-size:14px">
      <b class="num" style="color:#1A73E8;white-space:nowrap">${fmtDist(NAV.toNext)}</b><span style="flex:1">${esc(NAV.next ? NAV.next.text : '목적지 도착')}</span>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
      <button class="btn ghost" data-act="navSteps" style="height:42px;font-size:14px">단계 보기</button>
      <a class="btn ghost" href="${gDir(NAV.dest)}" target="_blank" rel="noopener" style="height:42px;font-size:14px;text-decoration:none">구글맵 ↗</a>
      <button class="btn danger" data-act="navEnd" style="height:42px;font-size:14px">안내 종료</button>
    </div></div>`;
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act, id = b.dataset.id;
  if (a === 'navTo') navTo(id);
  if (a === 'navFrom') { const o = placeById(id); closeSheet(); startNav(b.dataset.to === 'poi' && POI ? { id: 'poi', name: POI.gname || POI.name || CATS[POI.cat], lat: POI.lat, lng: POI.lng } : placeById(b.dataset.to), { lng: o.lng, lat: o.lat, label: o.name }, false); }
  if (a === 'navEnd') endNav();
  if (a === 'navSteps' && NAV) openSheet(`<h2 style="margin-bottom:12px">${esc(NAV.dest.name)}까지 · ${fmtDist(NAV.total)}</h2>
    <div class="card" style="padding:0 14px">${NAV.steps.map((s, i) => `<div class="list-row" style="gap:12px"><b class="num" style="width:22px;color:#1A73E8">${i + 1}</b><span style="flex:1;font-size:14px">${esc(s.text)}</span><span class="small muted">${s.dist ? fmtDist(s.dist) : ''}</span></div>`).join('')}</div>`);
});

/* ========= 홈 화면 미니 지도 · 내 Mapbox 지도 ========= */
let mbLibPromise = null;
function loadMapboxLib() {
  if (window.mapboxgl) return Promise.resolve();
  if (mbLibPromise) return mbLibPromise;
  const V = '3.34.2';
  const srcs = [`https://api.mapbox.com/mapbox-gl-js/v${V}`, `https://unpkg.com/mapbox-gl@${V}/dist`, `https://cdn.jsdelivr.net/npm/mapbox-gl@${V}/dist`];
  mbLibPromise = new Promise((res, rej) => {
    const tryAt = (i) => {
      if (i >= srcs.length) { mbLibPromise = null; rej(new Error('lib')); return; }
      const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = srcs[i] + '/mapbox-gl.css'; document.head.appendChild(css);
      const js = document.createElement('script'); js.src = srcs[i] + '/mapbox-gl.js';
      js.onload = () => window.mapboxgl ? res() : tryAt(i + 1);
      js.onerror = () => tryAt(i + 1);
      document.head.appendChild(js);
    };
    tryAt(0);
  });
  return mbLibPromise;
}
// 홈: 지도는 화면 전체에 깔려 있고, 일정 카드(dock)가 그 위로 올라오거나 내려감 (지도 크기를 바꾸지 않아서 부드러움)
let homeFull = false;
function setHomeFull(on) {
  homeFull = on;
  const d = document.querySelector('.hdock'); if (!d) return;
  d.style.transition = ''; d.style.transform = '';
  d.classList.toggle('down', on);
  if (!on) { const sh = d.querySelector('.hsheet'); if (sh) sh.scrollTop = 0; }
}
(function bindHomeSwipe() {
  let st = null;
  const dockOffset = (d) => d.offsetHeight - 76; // 내려갔을 때 이동 거리
  document.addEventListener('touchstart', (e) => {
    const d = e.target.closest && e.target.closest('.hdock');
    if (!d || S.ui.tab !== 'home' || e.touches.length !== 1 || e.target.closest('.hctl')) { st = null; return; }
    const sh = d.querySelector('.hsheet');
    st = { d, sh, y0: e.touches[0].clientY, t0: Date.now(), dy: 0, drag: false, grab: !!e.target.closest('.hgrabzone'), off: dockOffset(d), raf: 0 };
  }, { passive: true });
  document.addEventListener('touchmove', (e) => {
    if (!st) return;
    const dy = e.touches[0].clientY - st.y0; st.dy = dy;
    if (!st.drag) {
      if (Math.abs(dy) < 6) return;
      // 펼쳐진 상태: 카드 내용이 맨 위일 때 아래로 끌면 드래그, 아니면 카드 안 스크롤
      if (!homeFull && dy > 0 && (st.grab || st.sh.scrollTop <= 0)) st.drag = true;
      else if (homeFull) st.drag = true;
      else { st = null; return; }
      st.d.style.transition = 'none';
    }
    e.preventDefault();
    const base = homeFull ? st.off : 0, y = Math.max(0, Math.min(st.off, base + dy));
    if (!st.raf) st.raf = requestAnimationFrame(() => { if (st) { st.d.style.transform = `translateY(${y}px)`; st.raf = 0; } });
  }, { passive: false });
  const end = () => {
    if (!st) return;
    const s0 = st; st = null;
    if (!s0.drag) return;
    if (s0.raf) cancelAnimationFrame(s0.raf);
    const v = s0.dy / Math.max(1, Date.now() - s0.t0); // px/ms
    const goDown = homeFull ? !(s0.dy < -40 || v < -0.4) : (s0.dy > 80 || v > 0.5);
    setHomeFull(goDown);
  };
  document.addEventListener('touchend', end); document.addEventListener('touchcancel', end);
})();
let homeMap = null, homeMbEl = null, homeMbState = 'idle', homeMbKey = '', homeMarkers = [], homeFitSig = '';
function dropHomeMap() {
  if (homeMap) { try { homeMap.remove(); } catch (e) {} }
  homeMap = null; homeMbState = 'idle'; homeMarkers = []; homeFitSig = '';
  if (homeMbEl) { homeMbEl.remove(); homeMbEl = null; }
}
function mountHomeMap() {
  const host = document.querySelector('.hmap');
  const want = S.ui.mapMode === 'mapbox' && host;
  const key = (S.ui.mbTheme || 'app') + '|' + S.id;
  if (!want) { if (homeMbEl) homeMbEl.remove(); return; }
  if (homeMbState === 'failed') return;
  if (homeMbKey !== key) { dropHomeMap(); homeMbKey = key; }
  if (!homeMbEl) {
    homeMbEl = document.createElement('div');
    homeMbEl.style.cssText = 'position:absolute;inset:0;opacity:0;transition:opacity .35s';
    homeMbEl.setAttribute('aria-label', '오늘 동선 지도');
  }
  host.insertBefore(homeMbEl, host.children[1] || null); // 그림 지도 위, 헤더 카드 아래
  if (homeMbState === 'ready') { homeMap.resize(); updateHomeMap(); const o = host.querySelector('.hosm'); if (o) o.style.display = 'none'; return; }
  if (homeMbState === 'loading') return;
  homeMbState = 'loading';
  loadMapboxLib().then(() => {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    let m;
    try { m = new mapboxgl.Map({ container: homeMbEl, style: MAPBOX_STYLE, center: [121.9235, 11.9650], zoom: 14, minZoom: 12.5, maxZoom: 19, maxBounds: BORACAY.bounds, dragRotate: false, pitchWithRotate: false, touchPitch: false, attributionControl: false, logoPosition: 'bottom-right' }); m.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right'); try { m.touchZoomRotate.disableRotation(); } catch (e) {} }
    catch (e) { dropHomeMap(); homeMbState = 'failed'; return; }
    homeMap = m;
    let loaded = false;
    m.on('load', () => {
      loaded = true; homeMbState = 'ready';
      if (S.ui.mbTheme !== 'original') applyAppTheme(m);
      const std = !!(m.getStyle().imports || []).length;
      m.addSource('beach', { type: 'geojson', data: { type: 'FeatureCollection', features: BEACHES.map((c) => ({ type: 'Feature', geometry: { type: 'Polygon', coordinates: [c.concat([c[0]])] } })) } });
      if (S.ui.mbTheme !== 'original') m.addLayer(Object.assign({ id: 'app-beach', type: 'fill', source: 'beach', paint: { 'fill-color': '#F4E3B4', 'fill-opacity': 0.95 } }, std ? { slot: 'bottom' } : {}));
      m.addSource('route', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
      m.addLayer({ id: 'route', type: 'line', source: 'route', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': GL, 'line-width': 4.5 } });
      PALMS.forEach((ll) => { const el = document.createElement('div'); el.innerHTML = `<svg width="26" height="23" viewBox="-15 -23 30 26" aria-hidden="true">${PALM}</svg>`; new mapboxgl.Marker({ element: el, anchor: 'bottom' }).setLngLat(ll).addTo(m); });
      UMBS.forEach((ll) => { const el = document.createElement('div'); el.innerHTML = `<svg width="18" height="20" viewBox="-10 -21 20 22" aria-hidden="true">${UMB}</svg>`; new mapboxgl.Marker({ element: el, anchor: 'bottom' }).setLngLat(ll).addTo(m); });
      try {
        m.setConfigProperty('basemap', 'densityPointOfInterestLabels', 4);
        m.addInteraction('home-poi', { type: 'click', target: { featuresetId: 'poi', importId: 'basemap' }, handler: (e) => {
          const f = e.feature, c = f.geometry && f.geometry.coordinates; if (!c) return true;
          const poi = { name: (f.properties && f.properties.name) || '', lng: c[0], lat: c[1], cat: poiCat(f.properties.class, f.properties.maki) };
          const cam = { center: m.getCenter(), zoom: Math.max(m.getZoom(), 16) };
          S.ui.tab = 'map'; save(); render();
          whenMapReady(() => { map.jumpTo(cam); openPoi(poi); });
          return true;
        } });
        m.addInteraction('home-poi-in', { type: 'mouseenter', target: { featuresetId: 'poi', importId: 'basemap' }, handler: () => { m.getCanvas().style.cursor = 'pointer'; } });
        m.addInteraction('home-poi-out', { type: 'mouseleave', target: { featuresetId: 'poi', importId: 'basemap' }, handler: () => { m.getCanvas().style.cursor = ''; } });
      } catch (e) {}
      updateHomeMap();
      m.once('idle', () => { if (homeMbEl) homeMbEl.style.opacity = '1'; const o = document.querySelector('.hosm'); if (o) o.style.display = 'none'; });
    });
    m.on('error', () => { if (!loaded) { dropHomeMap(); homeMbState = 'failed'; } });
    setTimeout(() => { if (!loaded && homeMbState !== 'failed') { dropHomeMap(); homeMbState = 'failed'; } }, 6000);
  }).catch(() => { dropHomeMap(); homeMbState = 'failed'; });
}
function updateHomeMap() {
  if (!homeMap || homeMbState !== 'ready') return;
  const day = currentDay();
  const stops = sortTodos(todosOf(day).slice()).map((x) => placeById(x.placeId)).filter((p) => p && p.lat);
  homeMarkers.forEach((mk) => mk.remove()); homeMarkers = [];
  stops.forEach((p, i) => {
    const el = document.createElement('div');
    el.innerHTML = `<svg width="28" height="35" viewBox="-14 -34 28 36" aria-hidden="true"><path d="M0 0 C-5 -7 -13 -11 -13 -20 A13 13 0 1 1 13 -20 C13 -11 5 -7 0 0 Z" fill="${i === 0 ? G : GL}" stroke="#fff" stroke-width="2.5"/><text y="-15" text-anchor="middle" style="font:700 13px 'Space Grotesk',sans-serif;fill:#fff">${i + 1}</text></svg>`;
    el.style.cursor = 'pointer'; el.addEventListener('click', (ev) => { ev.stopPropagation(); placeSheet(p); });
    homeMarkers.push(new mapboxgl.Marker({ element: el, anchor: 'bottom' }).setLngLat([p.lng, p.lat]).addTo(homeMap));
  });
  if (userPos && insideBoracay(userPos)) {
    const el = document.createElement('div');
    el.innerHTML = '<svg width="40" height="40" viewBox="-20 -20 40 40" aria-hidden="true"><circle r="18" fill="rgba(26,115,232,.18)"/><circle r="7" fill="#1A73E8" stroke="#fff" stroke-width="3"/></svg>';
    homeMarkers.push(new mapboxgl.Marker({ element: el, anchor: 'center' }).setLngLat([userPos.lng, userPos.lat]).addTo(homeMap));
  }
  homeMap.getSource('route').setData({ type: 'Feature', geometry: { type: 'LineString', coordinates: stops.length > 1 ? stops.map((p) => [p.lng, p.lat]) : [] } });
  const sig = day + stops.map((p) => p.id).join(',');
  if (sig !== homeFitSig) {
    homeFitSig = sig;
    const pts = stops.length ? stops.map((p) => [p.lng, p.lat]) : WHITE_BEACH;
    const xs = pts.map((c) => c[0]), ys = pts.map((c) => c[1]);
    if (pts.length > 1) homeMap.fitBounds([[Math.min(...xs), Math.min(...ys)], [Math.max(...xs), Math.max(...ys)]], { padding: { top: 110, bottom: homeFull ? 110 : Math.round(((document.querySelector('.hdock') || {}).offsetHeight || 300) + 40), left: 60, right: 60 }, maxZoom: 15.5, duration: 0 });
    else homeMap.jumpTo({ center: pts[0], zoom: 15, padding: { top: 90, bottom: homeFull ? 80 : Math.round(((document.querySelector('.hdock') || {}).offsetHeight || 300)), left: 0, right: 0 } });
  }
}

/* ========= 시트 ========= */
function openSheet(html) { $('#sheet').innerHTML = `<div class="grab"></div>${html}`; $('#sheet').style.display = 'block'; $('#sheetBg').style.display = 'block'; }
function closeSheet() { $('#sheet').style.display = 'none'; $('#sheetBg').style.display = 'none'; }
$('#sheetBg').addEventListener('click', closeSheet);

/* ========= 클릭 처리 ========= */
document.addEventListener('click', (e) => {
  unlockAudio();
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act, id = b.dataset.id;
  const rerender = () => { save(); render(); };
  switch (a) {
    case 'tab': closeSheet(); if (POI) closePoi(true); S.ui.tab = b.dataset.tab; rerender(); break;
    case 'poiClose': closePoi(); break;
    case 'favSheet': favSheet(); break;
    case 'favGo': { const p = placeById(id); closeSheet(); if (!p) break; if (!p.lat) { toast('위치를 확인하는 중이에요. 잠시 후 다시 눌러 주세요'); resolveFavs(); break; } if (POI) closePoi(true); S.ui.selPlace = p.id; save(); refreshMap(); whenMapReady(() => map.flyTo({ center: [p.lng, p.lat], zoom: Math.max(map.getZoom(), 16.5), padding: { top: headerH(), bottom: bottomH() + 120, left: 0, right: 0 } })); break; }
    case 'favToggle': { const p = placeById(id); if (!p) break; toggleFav(p); if (b.dataset.sheet) placeSheet(p); if (S.ui.tab === 'map') { refreshMap(); renderMapCats(); } else rerender(); break; }
    case 'poiFav': { const p = POI; if (!p) break; const place = { id: uid(), name: p.gname || p.name || CATS[p.cat] || '새 장소', cat: CATS[p.cat] ? p.cat : 'etc', area: '', lat: +p.lat.toFixed(6), lng: +p.lng.toFixed(6), menu: [], memo: '', coordV: 2, fav: true }; if (p.gid) place.gid = p.gid; S.places.unshift(place); closePoi(true); S.ui.selPlace = place.id; save(); refreshMap(); renderMapCats(); toast('즐겨찾기에 넣었어요'); break; }
    case 'homeFit': homeFitSig = ''; updateHomeMap(); break;
    case 'homeExpand': setHomeFull(false); break;
    case 'homeCollapse': setHomeFull(true); break;
    case 'homeRetry': dropHomeMap(); homeMbState = 'idle'; rerender(); break;
    case 'poiFull': poiFullSheet(); break;
    case 'poiOther': poiOtherSheet(); break;
    case 'poiNav': if (POI) navTo({ id: 'poi', name: POI.name || CATS[POI.cat], lat: POI.lat, lng: POI.lng }); break;
    case 'poiAdd': poiAdd(); break;
    case 'gFull': { const p = placeById(id); if (p) ensureGid(p).then((gid) => gid ? gFullSheet(gid, p.name) : toast('Google에서 이 장소를 찾지 못했어요')); break; }
    case 'gOther': { const p = placeById(id); if (p) poiOtherSheet(p); break; }
    case 'homeDay': S.ui.day = b.dataset.day; S.ui.tab = 'todo'; rerender(); break;
    case 'pickDay': S.ui.day = b.dataset.day; rerender(); break;
    case 'mapDay': S.ui.day = b.dataset.day; save(); renderMap(); refreshMap(); break;
    case 'toggle': { const t = findTodo(id); t.done = !t.done; rerender(); break; }
    case 'delTodo': { const d = findTodoDay(id); S.todos[d] = S.todos[d].filter((x) => x.id !== id); rerender(); toast('삭제했어요'); break; }
    case 'editTodo': todoForm(findTodo(id)); break;
    case 'addTodo': todoForm(null); break;
    case 'openPlace': placeSheet(placeById(id)); break;
    case 'addPlace': addPlaceForm(null); break;
    case 'delPlace': S.places = S.places.filter((p) => p.id !== id); closeSheet(); save(); render(); refreshMap(); toast('장소를 지웠어요'); break;
    case 'delMenu': { const p = placeById(b.dataset.pid); p.menu = p.menu.filter((m) => m.id !== id); save(); placeSheet(p); break; }
    case 'placeToDay': { const p = placeById(id); todosOf(b.dataset.day).push({ id: uid(), time: '', title: p.name, placeId: p.id, done: false }); save(); closeSheet(); render(); refreshMap(); toast(`D${dayIndex(b.dataset.day)} 일정에 담았어요`); break; }
    case 'placeToTodo': todoForm(null, placeById(id)); break;
    case 'pfilter': S.ui.placeFilter = b.dataset.f; save(); renderMapCats(); refreshMap(); break;
    case 'selPlace': S.ui.selPlace = id; save(); refreshMap(); break;
    case 'searchPick': { const p = placeById(id); S.ui.selPlace = id; if (p.cat && S.ui.placeFilter !== 'all' && S.ui.placeFilter !== p.cat) S.ui.placeFilter = 'all'; $('#placeSearch').value = ''; $('#searchResults').style.display = 'none'; save(); renderMap(); if (p.lat && view) centerOn(p); break; }
    case 'routeSheet': routeSheet(); break;
    case 'routeDay': S.ui.day = b.dataset.day; S.ui.showRoute = true; S.ui.selPlace = null; if (POI) closePoi(true); save(); closeSheet(); refreshMap(); fitRoute(); break;
    case 'routeOff': S.ui.showRoute = false; S.ui.selPlace = null; save(); closeSheet(); refreshMap(); break;
    case 'trackToggle': S.ui.showTrack = !trackOn(); save(); closeSheet(); refreshMap(); toast(trackOn() ? '이동 기록을 보여 줘요' : '이동 기록을 숨겼어요'); break;
    case 'selClear': S.ui.selPlace = null; save(); refreshMap(); break;
    case 'mapNextDay': { const ds = tripDays(), i = ds.indexOf(S.ui.day); S.ui.day = ds[(i + 1) % ds.length]; S.ui.selPlace = null; save(); refreshMap(); toast(`D${dayIndex(S.ui.day)} ${fmtDate(S.ui.day)} 동선`); break; }
    case 'locate': locate(); break;
    case 'mapRetry': if (map) { try { map.remove(); } catch (er) {} map = null; } mapState = navigator.onLine === false ? 'failed' : 'idle'; renderMap(); if (mapState === 'failed') toast('아직 인터넷에 연결되지 않았어요'); break;
    case 'toggleAlarm': { const d = b.dataset.day; S.alarm.off[d] = !S.alarm.off[d]; delete S.alarm.fired[d]; rerender(); break; }
    case 'offset': S.alarm.offset = Number(b.dataset.m); S.alarm.fired = {}; rerender(); break;
    case 'notifyPerm':
      if (!('Notification' in window)) { toast('이 브라우저는 알림을 지원하지 않아요'); break; }
      Notification.requestPermission().then((p) => toast(p === 'granted' ? '알림을 켰어요' : '알림이 허용되지 않았어요')).catch(() => toast('이 화면에서는 알림을 켤 수 없어요'));
      break;
    case 'testAlarm': fireAlarm(currentDay()); break;
    case 'stopAlarm': clearInterval(beepTimer); $('#alarm').style.display = 'none'; break;
    case 'ics': {
      const blob = new Blob([makeICS()], { type: 'text/calendar' }), url = URL.createObjectURL(blob);
      const link = document.createElement('a'); link.href = url; link.download = 'boracay-sunset.ics'; document.body.appendChild(link); link.click(); link.remove();
      toast('파일을 열어 캘린더에 추가하세요'); break;
    }
    case 'tfilter': S.ui.ticketFilter = b.dataset.f; rerender(); break;
    case 'addTicket': ticketForm(null); break;
    case 'openTicket': ticketDetail(S.tickets.find((t) => t.id === id)); break;
    case 'editTicket': ticketForm(S.tickets.find((t) => t.id === id)); break;
    case 'delTicket': { const t = S.tickets.find((x) => x.id === id); t.imgs.forEach(delImg); S.tickets = S.tickets.filter((x) => x.id !== id); closeSheet(); rerender(); toast('티켓을 지웠어요'); break; }
  }
});

document.addEventListener('change', (e) => {
  const inp = e.target.closest('input[data-photo]'); if (!inp || !inp.files[0]) return;
  const p = placeById(inp.dataset.photo), imgId = uid();
  putImg(imgId, inp.files[0]); p.photo = imgId; save(); placeSheet(p); hydrateImages(); if (S.ui.tab === 'map') renderMapCard();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.matches('[role="button"][data-act]')) e.target.click();
});

/* ========= 시작 ========= */
TZ = S.trip.tz || 'Asia/Manila';
if (!DB.fx.fetched || Date.now() - DB.fx.fetched > 12 * 3600e3) fetchFx(false);
render();
setInterval(() => { checkAlarms(); if (S.ui.tab === 'home') render(); }, 30000);
checkAlarms();

/* ========= PWA: 오프라인 캐시 ========= */
if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('./sw.js').catch(() => {}); });
}
