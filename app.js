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
  wallet:'<path d="M4 7h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M4 7l11-3v3M16 13h2"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
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
// 12/15 받은 예약 내역(픽업·샌딩·투어)을 일정과 예약 탭에 반영. 이미 고친 항목은 건드리지 않고 없는 것만 추가
function applyBookings(t) {
  const D = (i) => addDays(t.trip.start, i);
  const gidId = (gid) => (t.places.find((p) => p.gid === gid) || {}).id;
  const addPlace = (pl) => { if (!t.places.some((p) => p.id === pl.id || p.gid === pl.gid)) t.places.push({ menu: [], memo: '', coordV: 2, gres: true, ...pl }); return gidId(pl.gid) || pl.id; };
  const astoria = addPlace({ id: 'astoria', name: 'Astoria Boracay', cat: 'stay', area: 'Station 1 해변 · 호핑 미팅', gid: 'ChIJLXwWmhc8pTMR01_fX-02M9Y' });
  const klo = addPlace({ id: 'klo', name: '칼리보 국제공항', cat: 'etc', area: '칼리보 (보라카이까지 차+배 약 2시간)', gid: 'ChIJiSeRGWudpTMRpfVW8G1UMVc' });
  const muni = gidId('ChIJze8N62I9pTMR4PYCyzm04ZM') || addPlace({ id: 'munimuni', name: 'MUNIMUNI BORACAY', cat: 'food', area: 'Station 1', gid: 'ChIJze8N62I9pTMR4PYCyzm04ZM' });
  const day = (i) => (t.todos[D(i)] = t.todos[D(i)] || []);
  const has = (i, re) => day(i).some((x) => re.test(x.title));
  if (!has(0, /픽업/)) day(0).unshift({ id: uid(), time: '', title: '공항 픽업 (TW125) → 헤난', placeId: klo, cat: 'move', note: '픽업 예약 완료 · TW125 도착 후 칼리보 공항에서 헤난 크리스탈 샌즈까지', done: false });
  const ss = day(1).find((x) => x.title === '선셋 세일링' && !x.time);
  if (ss) Object.assign(ss, { time: '15:00', title: '선셋 레드웨이브 미팅', placeId: muni, where: '', sunset: true, note: '예약 완료 · 화이트비치 무니무니 앞에서 15:00 미팅' });
  else if (!has(1, /레드웨이브/)) day(1).push({ id: uid(), time: '15:00', title: '선셋 레드웨이브 미팅', placeId: muni, cat: 'sight', sunset: true, note: '예약 완료 · 화이트비치 무니무니 앞에서 15:00 미팅', done: false });
  const hp = day(2).find((x) => x.title === '호핑투어 미팅 장소 도착');
  if (hp) Object.assign(hp, { time: '08:00', title: '레드웨일 호핑투어 미팅', placeId: astoria, where: '', note: '예약 완료 · 화이트비치 스테이션1 아스토리아 리조트 앞 해변에서 08:00 미팅 · 12시까지' });
  else if (!has(2, /레드웨일/)) day(2).push({ id: uid(), time: '08:00', title: '레드웨일 호핑투어 미팅', placeId: astoria, cat: 'move', note: '예약 완료 · 화이트비치 스테이션1 아스토리아 리조트 앞 해변에서 08:00 미팅 · 12시까지', done: false });
  if (!has(4, /샌딩/)) day(4).push({ id: uid(), time: '09:10', title: '크림슨 출발 · 공항 샌딩 (TW126)', placeId: 'crimson', cat: 'move', note: '샌딩 예약 완료 · 09:10 크림슨 리조트 출발 → 칼리보 공항 · 체크아웃은 그 전에', done: false });
  const tk = (title) => t.tickets.find((x) => x.title === title);
  const upd = (old, data) => { const x = tk(old); if (x) Object.assign(x, data); else if (!tk(data.title)) t.tickets.push({ id: uid(), code: '', url: '', imgs: [], files: [], ...data }); };
  upd('선셋 세일링', { cat: 'tour', title: '선셋 레드웨이브', date: D(1), time: '15:00', place: '화이트비치 무니무니(MUNIMUNI) 앞', memo: '예약 완료 · 15:00 미팅' });
  upd('호핑투어', { cat: 'tour', title: '레드웨일 호핑투어', date: D(2), time: '08:00', place: '화이트비치 스테이션1 아스토리아 리조트 앞 해변', memo: '예약 완료 · 08:00 미팅 · 12:00 종료' });
  const add = (data) => { if (!tk(data.title)) t.tickets.push({ id: uid(), code: '', url: '', imgs: [], files: [], ...data }); };
  add({ cat: 'shuttle', title: '공항 픽업 (TW125)', date: D(0), time: '', place: '칼리보 공항 → 헤난 크리스탈 샌즈', memo: '예약 완료 · TW125 도착 후 픽업' });
  add({ cat: 'shuttle', title: '공항 샌딩 (TW126)', date: D(4), time: '09:10', place: '크림슨 리조트 → 칼리보 공항', memo: '예약 완료 · 09:10 크림슨 리조트 출발' });
  add({ cat: 'flight', title: 'TW125 인천 → 칼리보', date: D(0), time: '', place: '인천국제공항', memo: '출발·도착 시간과 예약번호를 넣어 주세요' });
  add({ cat: 'flight', title: 'TW126 칼리보 → 인천', date: D(4), time: '', place: '칼리보 국제공항', memo: '출발 시간과 예약번호를 넣어 주세요' });
  t.planV = 2;
}
// 티웨이 동계 스케줄 (2026.10.25~): TW125 인천 09:20 → 칼리보 12:55, TW126 칼리보 13:55 → 인천 19:05 (모두 현지 시간)
function applyFlightTimes(t) {
  const D = (i) => addDays(t.trip.start, i);
  const tk = (re) => t.tickets.find((x) => re.test(x.title));
  const f1 = tk(/TW125 인천/), f2 = tk(/TW126 칼리보/), pu = tk(/픽업 \(TW125\)/);
  if (f1 && !f1.time) Object.assign(f1, { time: '09:20', memo: '인천 09:20 출발(한국 시간) → 칼리보 12:55 도착(현지 시간) · 약 4시간 35분\n예약번호를 넣어 주세요' });
  if (f2 && !f2.time) Object.assign(f2, { time: '13:55', memo: '칼리보 13:55 출발(현지 시간) → 인천 19:05 도착(한국 시간)\n예약번호를 넣어 주세요' });
  if (pu && !pu.time) Object.assign(pu, { time: '12:55', memo: '예약 완료 · TW125 12:55 칼리보 도착 후 픽업 → 헤난까지 차+배로 약 2시간' });
  const d0 = (t.todos[D(0)] = t.todos[D(0)] || []), d4 = (t.todos[D(4)] = t.todos[D(4)] || []);
  const p = d0.find((x) => /픽업/.test(x.title));
  if (p && !p.time) Object.assign(p, { time: '12:55', note: 'TW125 12:55 칼리보 도착(현지 시간) → 픽업 차량으로 헤난까지 약 2시간 · 15:00 체크인' });
  const klo = (t.places.find((x) => x.id === 'klo') || {}).id;
  if (!d4.some((x) => /TW126/.test(x.title) && /출발/.test(x.title) && !/크림슨/.test(x.title))) d4.push({ id: uid(), time: '13:55', title: 'TW126 칼리보 출발', placeId: klo || '', cat: 'move', note: '칼리보 13:55 출발 → 인천 19:05 도착(한국 시간)', done: false });
  t.planV = 3;
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
    ui: { tab:'map', day:start, placeFilter:'all', ticketFilter:'all' }
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
const TABS = [['map','지도','map'], ['todo','일정','list'], ['money','경비','coin'], ['more','더보기','grid']];
function renderTabs() {
  $('#tabs').innerHTML = TABS.map(([id, label, ic]) =>
    `<button data-act="tab" data-tab="${id}" ${S.ui.tab === id || (id === 'more' && SUBTABS.includes(S.ui.tab)) ? 'aria-current="page"' : ''}>${svg(ic, 24)}${label}</button>`).join('');
}
function render() {
  renderTabs();
  const isMap = S.ui.tab === 'map';
  $('#mapView').style.display = isMap ? 'block' : 'none';
  document.body.classList.toggle('onmap', isMap);
  $('#view').style.display = isMap ? 'none' : 'block';
  if (isMap) { renderMap(); return; }
  if (render._last !== S.ui.tab) { render._last = S.ui.tab; requestAnimationFrame(() => { $('#view').scrollTop = 0; }); }
  if (S.ui.tab === 'sunset') maybeWeather();
  $('#view').innerHTML = ({ todo: viewTodo, sunset: viewSunset, tickets: viewTickets, money: viewMoney, more: viewMore, places: viewPlaces, check: viewCheck, journal: viewJournal }[S.ui.tab] || viewTodo)();
  if (S.ui.tab === 'money') updateFx();
  hydrateImages();
}

/* ========= 홈 ========= */
const walkInfo = (p) => {
  if (!userPos || !insideBoracay(userPos) || !p || !p.lat) return null;
  const m = Math.hypot((p.lng - userPos.lng) * 108900, (p.lat - userPos.lat) * 110600) * 1.3; // 직선거리 × 1.3 (길 굴곡 보정)
  return { min: Math.max(1, Math.round(m / 75)), dist: m >= 1000 ? (m / 1000).toFixed(1) + 'km' : Math.round(m / 10) * 10 + 'm' };
};
// 여행 진행도: O - O - O - O - O. 첫날 해가 떠서 점점 붉게 지고 마지막 날은 달이 됨
const JOUR_COL = ['#F7C948', '#F5A83B', '#EE8636', '#D9614A', '#46598C'];
function jourIcon(i, n, on, past) {
  const t = n > 1 ? i / (n - 1) : 0, c = JOUR_COL[Math.round(t * (JOUR_COL.length - 1))];
  const r = on ? 11 : 8, op = on || past ? 1 : 0.38;
  if (i === n - 1) // 마지막 날: 달
    return `<svg width="${r * 2 + 6}" height="${r * 2 + 6}" viewBox="-14 -14 28 28" aria-hidden="true" style="opacity:${op}">${on ? `<circle r="13" fill="${c}" opacity=".18"/>` : ''}<circle r="${r}" fill="${c}"/><circle cx="${r * 0.45}" cy="${-r * 0.35}" r="${r * 0.85}" fill="#fff"/></svg>`;
  return `<svg width="${r * 2 + 6}" height="${r * 2 + 6}" viewBox="-14 -14 28 28" aria-hidden="true" style="opacity:${op}">${on ? `<circle r="13" fill="${c}" opacity=".22"/>` : ''}<circle r="${r}" fill="${c}"/>${i === 0 ? `<rect x="-14" y="${r * 0.35}" width="28" height="14" fill="#fff" opacity=".55"/>` : ''}</svg>`;
}
function tripJourney(days, before, dleft) {
  const n = days.length || 1, today = todayStr();
  const cur = before ? -1 : days.indexOf(today) >= 0 ? days.indexOf(today) : (today > days[n - 1] ? n : -1);
  const parts = days.map((d, i) => {
    const on = i === cur, past = cur > i;
    const seg = i < n - 1 ? `<span class="jline" style="background:${past || on ? `linear-gradient(90deg, ${JOUR_COL[Math.round(i / (n - 1) * 4)]}, ${JOUR_COL[Math.round((i + 1) / (n - 1) * 4)]})` : '#E3E8E5'}"></span>` : '';
    return `<button class="jnode${on ? ' on' : ''}" data-act="homeDay" data-day="${d}" aria-label="D${i + 1} ${fmtDate(d)}${on ? ' 오늘' : ''}">${jourIcon(i, n, on, past)}<span>D${i + 1}</span></button>${seg}`;
  }).join('');
  const cap = before ? `D-${dleft}` : cur >= n ? '끝' : `D${cur + 1}`;
  return `<button class="jcap" data-act="diagTap" style="border:0">${cap}</button><div class="jrow">${parts}</div>`;
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
const G = '#17806D', GL = '#2DAA8A';
const PALM = '<path d="M0 0 Q2.5 -9 0.5 -19" stroke="#A47447" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M0.5 -19 q-8 -5 -14 1 q7 -2 14 -1z M0.5 -19 q8 -5 14 1 q-7 -2 -14 -1z M0.5 -19 q-3 -8 -10 -10 q5 3 10 10z M0.5 -19 q3 -8 10 -10 q-5 3 -10 10z M0.5 -19 q0 -7 -2 -11 q3 4 2 11z" fill="#3DAE68"/>';
const UMB = '<path d="M0 0 V-11" stroke="#8A6A48" stroke-width="1.5"/><path d="M-9 -10 Q0 -20 9 -10 Z" fill="#2BB0C6"/><path d="M-3 -10 Q0 -19 3 -10 Z" fill="#F7D774"/>';
let userPos = null, geoWatch = null, mapHeaderBuilt = false;
function headerH() { const t = $('#mapTop'); return t ? t.offsetTop + t.offsetHeight : 110; }
function bottomH() { return (sheetVis || 200) + 16; }
const routeStops = () => sortTodos(todosOf(S.ui.day).slice()).map((t) => placeById(t.placeId)).filter((p) => p && p.lat);
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
/* ===== 첫 화면(지도): 위 여정 헤더 + 아래 끌어올리는 시트(검색·카드·목록) ===== */
let sheetUp = false, sheetVis = 0;
function renderMapTop() {
  const days = tripDays(), before = todayStr() < S.trip.start, dleft = Math.round((dateObj(S.trip.start) - dateObj(todayStr())) / 864e5);
  $('#mapTop').innerHTML = `<div class="hhead hjour">${tripJourney(days, before, dleft)}<button class="icon" data-act="tab" data-tab="sunset" aria-label="선셋 알람" style="width:36px;height:36px;flex-shrink:0">${svg('bell', 20, '#1C2B2E')}</button></div>`;
}
function buildMapHeader() {
  $('#msheet').innerHTML = `
    <div class="mfloat"><button class="mfab2" id="favFab" data-act="favFab" aria-label="즐겨찾기 모아보기"></button><button class="mfab2" data-act="locate" aria-label="내 위치로">${svg('crosshair', 21, '#1C2B2E')}</button></div>
    <div class="msh-head"><div class="msh-grab" aria-hidden="true"></div>
      <label class="msearch2">${svg('search', 18, '#5B6B6E')}<input id="placeSearch" type="search" placeholder="장소·가게 검색" aria-label="장소 검색" autocomplete="off" enterkeyhint="search">
      <button type="button" class="msclear" data-act="searchClear" aria-label="검색 지우기">${svg('close', 14, '#5B6B6E')}</button></label></div>
    <div id="mapCard"></div>
    <div class="msh-body" id="mshBody"><div class="mchips" id="mapCats"></div><div id="mshList"></div></div>`;
  const inp = $('#placeSearch');
  inp.addEventListener('input', () => { S.ui.sheetQ = inp.value; $('#msheet').classList.toggle('hasq', !!inp.value); renderSheetList(); if (inp.value && !sheetUp) setSheet(true); });
  inp.addEventListener('focus', () => { if (!sheetUp) setSheet(true); });
  mapHeaderBuilt = true;
}
const STABS = [['today', '오늘 일정', 'list'], ['fav', '즐겨찾기', 'heart'], ['food', '맛집', 'food'], ['cafe', '카페', 'cafe'], ['beach', '해변', 'wave']];
function renderMapCats() {
  const t = S.ui.sheetTab || 'today';
  $('#mapCats').innerHTML = STABS.map(([k, label, ic]) => `<button class="mchip ${t === k ? 'on' : ''}${k === 'fav' ? ' fav' : ''}" data-act="stab" data-t="${k}" aria-pressed="${t === k}">${svg(ic, 15, t === k ? '#fff' : (k === 'fav' ? '#E5484D' : G), 2.3)}${label}${k === 'fav' ? ` <span class="cnt">${favCount()}</span>` : ''}</button>`).join('');
  renderSheetList();
}
function renderMapLegend() {
  const fb = $('#favFab'); if (!fb) return;
  const on = S.ui.placeFilter === 'fav';
  fb.classList.toggle('on', on); fb.setAttribute('aria-pressed', on);
  fb.innerHTML = svg('heart', 20, on ? '#fff' : '#E5484D', 2.3);
}
function listRow(act, id, icon, title, sub, right, extra) {
  return `<button class="mrow${extra || ''}" data-act="${act}" data-id="${id}">${icon}<span class="mrow-t"><b>${title}</b>${sub ? `<span>${sub}</span>` : ''}</span>${right ? `<span class="mrow-r">${right}</span>` : ''}</button>`;
}
const distTo = (p) => (userPos && insideBoracay(userPos) && p.lat) ? fmtDist(Math.hypot((p.lng - userPos.lng) * 108900, (p.lat - userPos.lat) * 110600)) : '';
function placeIcon(p) { return `<span class="mrow-ic${p.fav ? ' fav' : ''}">${svg(p.fav ? 'heart' : (CAT_ICON[p.cat] || 'pin'), 16, '#fff', 2.2)}</span>`; }
function renderSheetList() {
  const box = $('#mshList'); if (!box) return;
  const q = (S.ui.sheetQ || '').trim().toLowerCase(), t = S.ui.sheetTab || 'today';
  if (q) {
    const hits = S.places.filter((p) => [p.name, p.area, CATS[p.cat], ...(p.menu || []).map((m) => m.name)].join(' ').toLowerCase().includes(q));
    box.innerHTML = hits.length ? hits.map((p) => listRow('selFromList', p.id, placeIcon(p), esc(p.name), esc(CATS[p.cat] || p.area || ''), distTo(p))).join('')
      : `<div class="empty" style="padding:22px 0">"${esc(q)}" 장소가 없어요<br><span class="small">지도에서 가게를 누르거나 길게 눌러 추가해 보세요</span></div>`;
    return;
  }
  if (t === 'today') {
    const day = currentDay(), tt = sunTimes(day), list = sortTodos(todosOf(day).slice()), before = todayStr() < S.trip.start;
    const spent = S.expenses.filter((x) => x.date === todayStr()).reduce((a, x) => a + (+x.amount || 0), 0);
    box.innerHTML = `<div class="minfo">
        <button data-act="tab" data-tab="sunset">${svg('sun', 16, '#C2502C')}<span>${before ? '첫날' : '오늘'} 일몰 <b class="num">${fmtTime(tt.set)}</b>${S.alarm.off[day] ? '' : ` · 알람 ${fmtTime(new Date(tt.set - S.alarm.offset * 60000))}`}</span></button>
        <button data-act="tab" data-tab="money">${svg('wallet', 16, G)}<span>${before ? '경비' : '오늘'} <b class="num">${won(before ? settlement().total : spent)}</b></span></button></div>
      <div class="between" style="padding:6px 2px 2px"><b style="font-size:15px">D${dayIndex(day)} · ${fmtDate(day)}</b><button class="poilink" data-act="tab" data-tab="todo">전체 일정 ›</button></div>
      ${list.length ? list.map((it) => { const p = placeById(it.placeId);
        return listRow(p && p.lat ? 'selFromList' : 'todoInfo', p && p.lat ? p.id : it.id, `<span class="mrow-time num">${esc(it.time || '--:--')}</span>`, esc(it.title), esc(p ? p.name : (it.where || it.note || '')), p && p.lat ? distTo(p) : '', it.done ? ' done' : ''); }).join('')
        : '<div class="empty" style="padding:22px 0">이날 일정이 아직 없어요</div>'}`;
    return;
  }
  const list = S.places.filter((p) => t === 'fav' ? p.fav : p.cat === t);
  if (userPos && insideBoracay(userPos)) list.sort((a, b) => (a.lat ? Math.hypot(a.lng - userPos.lng, a.lat - userPos.lat) : 9) - (b.lat ? Math.hypot(b.lng - userPos.lng, b.lat - userPos.lat) : 9));
  box.innerHTML = list.length ? list.map((p) => listRow('selFromList', p.id, placeIcon(p), esc(p.name), esc(CATS[p.cat] || ''), p.lat ? distTo(p) : '위치 확인 중')).join('')
    : `<div class="empty" style="padding:22px 0">${t === 'fav' ? '즐겨찾기가 없어요. 장소 카드의 ♥를 눌러 보세요' : '저장된 장소가 없어요'}</div>`;
}
function nextCardHtml() {
  const day = currentDay(), list = sortTodos(todosOf(day).slice()), before = todayStr() < S.trip.start, nowHM = fmtTime(new Date());
  const next = list.find((x) => !x.done && (before || todayStr() !== day || !x.time || x.time >= nowHM)) || list.find((x) => !x.done);
  if (!next) return `<div class="mnext"><span class="mrow-ic" style="background:#E6F3EF">${svg('list', 18, G)}</span><span class="mrow-t"><b>남은 일정이 없어요</b><span>위로 올려 즐겨찾기·맛집을 둘러보세요</span></span></div>`;
  const np = placeById(next.placeId), wi = walkInfo(np), done = list.filter((x) => x.done).length;
  return `<div class="mnext"><button class="mnext-main" data-act="${np ? 'openPlace' : 'todoInfo'}" data-id="${np ? np.id : next.id}">
      <span class="mrow-ic" style="background:${G}">${svg(np ? (CAT_ICON[np.cat] || 'pin') : 'list', 18, '#fff')}</span>
      <span class="mrow-t"><span class="mnext-k">다음 일정${next.time ? ' · ' + esc(next.time) : ''} · D${dayIndex(day)} ${done}/${list.length}</span><b>${esc(next.title)}</b><span>${np ? esc(np.name) : esc(next.where || '장소 미정')}${wi ? ` · 도보 ${wi.min}분` : ''}</span></span></button>
    ${np && np.lat ? `<button class="hnav2" data-act="navTo" data-id="${np.id}" aria-label="길안내">${svg('nav', 20, '#1A73E8')}</button>` : ''}</div>`;
}
// 시트 위치: 접힘 = 검색 + 카드만 보임, 펼침 = 목록까지
function layoutSheet() {
  const sh = $('#msheet'); if (!sh || !sh.offsetHeight || sh.style.transition === 'none') return; // 끄는 중엔 건드리지 않음
  const head = sh.querySelector('.msh-head'), card = $('#mapCard');
  const peek = head.offsetHeight + (card ? card.offsetHeight : 0) + 10;
  const off = Math.max(0, sh.offsetHeight - peek);
  sh.dataset.off = off;
  sh.style.transform = sheetUp && !NAV ? 'translateY(0)' : `translateY(${off}px)`;
  sheetVis = sheetUp && !NAV ? sh.offsetHeight : peek;
  $('#mapView').style.setProperty('--mfloat', (sheetVis + 6) + 'px');
}
addEventListener('resize', () => { if (S.ui.tab === 'map') requestAnimationFrame(layoutSheet); });
function setSheet(up) {
  sheetUp = !!up && !NAV;
  const sh = $('#msheet'); if (!sh) return;
  sh.classList.toggle('up', sheetUp);
  if (!sheetUp) { const inp = $('#placeSearch'); if (inp && document.activeElement === inp) inp.blur(); const bd = $('#mshBody'); if (bd) bd.scrollTop = 0; }
  layoutSheet();
}
(function bindSheetDrag() {
  let st = null;
  document.addEventListener('touchstart', (e) => {
    const sh = e.target.closest && e.target.closest('#msheet');
    if (!sh || S.ui.tab !== 'map' || e.touches.length !== 1 || e.target.closest('.mfloat')) { st = null; return; }
    const body = $('#mshBody');
    st = { sh, body, y0: e.touches[0].clientY, t0: Date.now(), dy: 0, drag: false, inBody: !!e.target.closest('#mshBody'), off: +sh.dataset.off || 0, raf: 0 };
  }, { passive: true });
  document.addEventListener('touchmove', (e) => {
    if (!st) return;
    const dy = e.touches[0].clientY - st.y0; st.dy = dy;
    if (!st.drag) {
      if (Math.abs(dy) < 7) return;
      if (sheetUp && st.inBody && (dy < 0 || st.body.scrollTop > 0)) { st = null; return; } // 목록 스크롤
      if (!sheetUp && dy > 0) { st = null; return; }
      st.drag = true; st.sh.style.transition = 'none';
      const inp = $('#placeSearch'); if (inp && document.activeElement === inp) inp.blur();
    }
    e.preventDefault();
    const base = sheetUp ? 0 : st.off, y = Math.max(0, Math.min(st.off, base + dy));
    if (!st.raf) st.raf = requestAnimationFrame(() => { if (st) { st.sh.style.transform = `translateY(${y}px)`; st.raf = 0; } });
  }, { passive: false });
  const end = () => {
    if (!st) return; const s0 = st; st = null;
    if (!s0.drag) return;
    if (s0.raf) cancelAnimationFrame(s0.raf);
    s0.sh.style.transition = '';
    const v = s0.dy / Math.max(1, Date.now() - s0.t0);
    setSheet(sheetUp ? !(s0.dy > 70 || v > 0.45) : (s0.dy < -50 || v < -0.4));
  };
  document.addEventListener('touchend', end); document.addEventListener('touchcancel', end);
})();
function selFromList(id) {
  const p = placeById(id); if (!p) return;
  if (!p.lat) { placeSheet(p); return; }
  if (POI) closePoi(true);
  S.ui.selPlace = p.id; save(); setSheet(false); refreshMap();
  whenMapReady(() => map.flyTo({ center: [p.lng, p.lat], zoom: Math.max(map.getZoom(), 16), padding: { top: headerH(), bottom: bottomH(), left: 0, right: 0 } }));
}
function renderMapCard() { if (!$('#mapCard')) return; renderMapCardInner(); requestAnimationFrame(layoutSheet); }
function renderMapCardInner() {
  const card = $('#mapCard');
  const pinT = S.ui.pinTodo && findTodo(S.ui.pinTodo);
  if (NAV) { card.innerHTML = navCard(); return; }
  if (pinT) { card.innerHTML = `<div class="mcard" style="flex-direction:column;align-items:stretch;gap:8px">
      <span style="font-size:15px"><b>'${esc(pinT.title)}'</b> 위치를 지도에서 <b>길게 눌러</b> 정해 주세요</span>
      <button class="btn ghost" data-act="cancelPin" style="height:38px">취소</button></div>`; return; }
  if (POI) { card.innerHTML = poiCard(); const slot = $('#poiGSlot'); if (slot && POI.gel) slot.appendChild(POI.gel); return; }
  const p = placeById(S.ui.selPlace);
  if (!p) { card.innerHTML = nextCardHtml(); return; }
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
        <span class="row" style="gap:12px"><button data-act="openPlace" data-id="${p.id}" class="poilink">${isEatery(p) ? '메뉴·가격 ›' : '자세히 ›'}</button>${g.state === 'ok' ? `<button data-act="gFull" data-id="${p.id}" class="poilink">리뷰·사진 ›</button>` : ''}</span>
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
  renderMapTop(); renderMapCats(); renderMapLegend(); renderMapCard();
  $('#mapbox').style.display = 'block';
  if (NAV && sheetUp) setSheet(false);
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
    map = new mapboxgl.Map({ container: 'mapbox', style: MAPBOX_STYLE, center: [121.9235, 11.9650], zoom: 14.6, minZoom: 12.5, maxZoom: 19, maxBounds: BORACAY.bounds, attributionControl: false, dragRotate: false, pitchWithRotate: false, touchPitch: false });
    map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-left'); try { map.touchZoomRotate.disableRotation(); } catch (e) {}
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
    setupFavLayer();
    setupPoiTap();
    hideFerries(map);
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
  // 인증·스타일 오류(401/403/404)만 실패로 보고, 느린 인터넷은 기다림. 늦게라도 뜨면 자동으로 실패 화면을 닫음
  map.on('error', (e) => { const st = e.error && e.error.status; console.warn('Mapbox:', e.error && e.error.message); if (!loaded && (st === 401 || st === 403 || st === 404)) { try { map.remove(); } catch (er) {} map = null; mapboxFailed(); } });
  setTimeout(() => { if (!loaded && map && mapState === 'loading') { mapState = 'slow'; if (S.ui.tab === 'map') toast('지도를 불러오는 중이에요. 인터넷이 느린 것 같아요'); } }, 8000);
  setTimeout(() => { if (!loaded && map) { try { map.remove(); } catch (er) {} map = null; mapboxFailed(); } }, 25000);
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
  const el = document.createElement('button'); el.dataset.mb = '1'; el.setAttribute('aria-label', (n ? n + '번 ' : '') + p.name);
  el.style.cssText = 'border:0;background:none;padding:0;cursor:pointer;display:flex;flex-direction:column;align-items:center';
  const label = `<span style="font:500 11px 'Noto Sans KR',sans-serif;color:#1C2B2E;text-shadow:0 0 3px #fff,0 0 3px #fff;white-space:nowrap;margin-top:2px">${esc(p.name)}</span>`;
  el.innerHTML = n
    ? `<svg width="32" height="40" viewBox="-16 -38 32 40" aria-hidden="true"><path d="M0 0 C-5 -7 -14 -12 -14 -22 A14 14 0 1 1 14 -22 C14 -12 5 -7 0 0 Z" fill="${on ? G : GL}" stroke="#fff" stroke-width="2.5"/><text y="-17" text-anchor="middle" style="font:700 14px 'Space Grotesk',sans-serif;fill:#fff">${n}</text></svg>${label}`
    : `<span style="width:28px;height:28px;border-radius:50%;background:#fff;border:2px solid ${on ? G : '#9CC9BF'};display:flex;align-items:center;justify-content:center;box-shadow:${on ? '0 0 0 6px rgba(45,170,138,.25)' : 'none'}">${svg(CAT_ICON[p.cat] || 'pin', 14, G, 2.2)}</span>${label}`;
  el.addEventListener('click', (ev) => { ev.stopPropagation(); if (POI) closePoi(true); S.ui.selPlace = p.id; save(); if (sheetUp) setSheet(false); refreshMap(); });
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
  const f = S.ui.placeFilter, stops = [], ids = stops.map((p) => p.id);
  // 지도에는 그날 일정(번호 핀)만 크게 표시. 다른 저장 장소는 맛집·카페 버튼을 눌렀을 때나 고른 장소만 보여 줌
  const shown = S.places.filter((p) => p.lat && !ids.includes(p.id) && ((f === 'fav' ? p.fav : f !== 'all' ? p.cat === f : false) || p.id === S.ui.selPlace));
  shown.filter((p) => !p.fav).forEach((p) => markers.push(mbPin(p, 0, p.id === S.ui.selPlace)));
  setFavLayer(shown.filter((p) => p.fav));
  stops.forEach((p, i) => numMarkers.push(mbPin(p, i + 1, p.id === S.ui.selPlace)));
  const track = (S.track && S.track[S.ui.day]) || [];
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
// 바다 위 뱃길(페리 노선)을 바다 색으로 덮어서 안 보이게
function hideFerries(m) {
  try {
    let water = '#BFE6EA'; try { water = m.getConfigProperty('basemap', 'colorWater') || water; } catch (e) {}
    m.setConfigProperty('basemap', 'showTransitLabels', false);
    if (!m.getSource('streets8')) m.addSource('streets8', { type: 'vector', url: 'mapbox://mapbox.mapbox-streets-v8' });
    if (!m.getLayer('ferry-mask')) m.addLayer({ id: 'ferry-mask', type: 'line', source: 'streets8', 'source-layer': 'road', filter: ['match', ['get', 'class'], ['ferry', 'ferry_auto'], true, false], layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': typeof water === 'string' ? water : '#BFE6EA', 'line-width': ['interpolate', ['linear'], ['zoom'], 10, 3, 14, 5, 18, 9] }, slot: 'middle' });
  } catch (e) { console.warn('ferry', e); }
}
// 즐겨찾기: 지도 위에 직접 그리는 하트 핀(겹쳐도 깔끔) + 확대(15.5 이상)하면 가게 이름
function heartPinImage(big) {
  const r = 2, w = (big ? 34 : 26) * r, h = (big ? 42 : 32) * r, c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'), cx = w / 2, R = w / 2 - 2 * r;
  g.shadowColor = 'rgba(0,0,0,.28)'; g.shadowBlur = 3 * r; g.shadowOffsetY = 1 * r;
  g.beginPath(); g.moveTo(cx, h - 2 * r); g.bezierCurveTo(cx - R * 0.35, h - R * 0.9, cx - R, R * 1.45, cx - R, R + 2 * r);
  g.arc(cx, R + 2 * r, R, Math.PI, 0); g.bezierCurveTo(cx + R, R * 1.45, cx + R * 0.35, h - R * 0.9, cx, h - 2 * r); g.closePath();
  g.fillStyle = '#E5484D'; g.fill(); g.shadowColor = 'transparent'; g.lineWidth = 2 * r; g.strokeStyle = '#fff'; g.stroke();
  const hs = R * 0.55, hy = R + 2 * r; g.beginPath(); g.moveTo(cx, hy + hs * 0.9);
  g.bezierCurveTo(cx - hs * 1.6, hy - hs * 0.1, cx - hs * 0.7, hy - hs * 1.3, cx, hy - hs * 0.45);
  g.bezierCurveTo(cx + hs * 0.7, hy - hs * 1.3, cx + hs * 1.6, hy - hs * 0.1, cx, hy + hs * 0.9); g.fillStyle = '#fff'; g.fill();
  return { width: w, height: h, data: g.getImageData(0, 0, w, h).data };
}
function setupFavLayer() {
  try {
    if (!map.hasImage('fav-pin')) map.addImage('fav-pin', heartPinImage(false), { pixelRatio: 2 });
    if (!map.hasImage('fav-pin-on')) map.addImage('fav-pin-on', heartPinImage(true), { pixelRatio: 2 });
    map.addSource('favs', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
    map.addLayer({ id: 'fav-sym', type: 'symbol', source: 'favs', slot: 'top',
      layout: { 'icon-image': ['case', ['get', 'on'], 'fav-pin-on', 'fav-pin'], 'icon-anchor': 'bottom', 'icon-allow-overlap': true, 'icon-ignore-placement': true,
        'symbol-sort-key': ['case', ['get', 'on'], 0, 1],
        'text-field': ['step', ['zoom'], ['case', ['get', 'on'], ['get', 'name'], ''], 15.5, ['get', 'name']],
        'text-size': 11.5, 'text-anchor': 'top', 'text-offset': [0, 0.25], 'text-optional': true, 'text-max-width': 9 },
      paint: { 'text-color': '#B4232A', 'text-halo-color': '#ffffff', 'text-halo-width': 1.6 } });
    map.addInteraction('fav-tap', { type: 'click', target: { layerId: 'fav-sym' }, handler: (e) => { poiTapAt = Date.now(); selectFav(e.feature.properties.id); return true; } });
  } catch (e) { console.warn('fav layer', e); }
}
function selectFav(id) { if (POI) closePoi(true); S.ui.selPlace = id; save(); if (sheetUp) setSheet(false); refreshMap(); }
function setFavLayer(list) {
  const src = map && map.getSource && map.getSource('favs'); if (!src) return;
  src.setData({ type: 'FeatureCollection', features: list.map((p) => ({ type: 'Feature', geometry: { type: 'Point', coordinates: [p.lng, p.lat] }, properties: { id: p.id, name: p.name, on: p.id === S.ui.selPlace } })) });
}
function setupPoiTap() {
  if (!map.addInteraction) return;
  try { map.setConfigProperty('basemap', 'showPointOfInterestLabels', true); map.setConfigProperty('basemap', 'densityPointOfInterestLabels', 4); } catch (e) {}
  const target = { featuresetId: 'poi', importId: 'basemap' };
  try {
    map.addInteraction('poi-tap', { type: 'click', target, handler: (e) => {
      poiTapAt = Date.now();
      try { const hit = e.point && map.getLayer('fav-sym') && map.queryRenderedFeatures(e.point, { layers: ['fav-sym'] }); if (hit && hit.length) { selectFav(hit[0].properties.id); return true; } } catch (er) {}
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
  if (sheetUp) setSheet(false);
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
      <span class="row" style="gap:12px">${p.gstate === 'ok' ? `<button data-act="poiFull" class="poilink">리뷰·사진 ›</button>` : ''}</span>
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
  const need = S.places.filter((p) => p.gid && (p.fav || p.gres) && (!p.lat || !p.gAt || Date.now() - p.gAt > 25 * 864e5));
  if (!need.length) return;
  favResolving = true;
  try {
    const { Place } = await loadGoogle();
    for (let i = 0; i < need.length; i += 8) { // 8곳씩 동시에 받아서 빨리 채움
      await Promise.all(need.slice(i, i + 8).map(async (p) => {
        try { const pl = new Place({ id: p.gid }); await pl.fetchFields({ fields: ['location'] }); if (pl.location) { p.lat = +pl.location.lat().toFixed(6); p.lng = +pl.location.lng().toFixed(6); p.gAt = Date.now(); } } catch (e) {}
      }));
    }
    save();
    if (S.ui.tab === 'map') refreshMap();
  } catch (e) {} finally { favResolving = false; }
}
setTimeout(resolveFavs, 1500);
function fitFiltered() {
  const f = S.ui.placeFilter, pts = S.places.filter((p) => p.lat && insideBoracay(p) && (f === 'fav' ? p.fav : p.cat === f)).map((p) => [p.lng, p.lat]);
  if (pts.length < 2) return;
  whenMapReady(() => { const xs = pts.map((c) => c[0]), ys = pts.map((c) => c[1]); map.fitBounds([[Math.min(...xs), Math.min(...ys)], [Math.max(...xs), Math.max(...ys)]], { padding: { top: headerH() + 30, bottom: bottomH() + 40, left: 40, right: 40 }, maxZoom: 16 }); });
}
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
  t.ui = Object.assign({ tab:'map', day:t.trip.start, placeFilter:'all', ticketFilter:'all', checkFilter:'all', placeList:'all' }, t.ui || {});
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
  t.planV = t.planV || 1;
  if (t.planV < 2 && t.trip.start === '2026-12-16') applyBookings(t);
  if (t.planV < 3 && t.trip.start === '2026-12-16') applyFlightTimes(t);
  t.ui.mapMode = 'mapbox'; // 기본(그림) 지도는 없애고 Mapbox만 씀
  if (t.ui.tab === 'home') t.ui.tab = 'map'; // 홈은 지도로 합쳐짐
  if (!t.favV) {
    FAV_SEED.forEach(([gid, name, cat, mine]) => {
      const ex = t.places.find((p) => p.gid === gid || (mine && p.id === mine));
      if (ex) { ex.fav = true; if (ex.gid !== gid) { ex.gid = gid; delete ex.gAt; } }
      else t.places.push({ id: 'g' + gid.slice(-10).replace(/[^A-Za-z0-9]/g, ''), name, cat, area: '', gid, fav: true, menu: [], memo: '', coordV: 2 });
    });
    t.favV = 1;
  }
  if (t.favV < 2) {
    const seed = {}; FAV_SEED.forEach(([gid, , , mine]) => { seed[gid] = 1; if (mine) seed['@' + mine] = gid; });
    t.places.forEach((p) => {
      const sg = seed['@' + p.id] || (p.id.startsWith('g') && FAV_SEED.find((x) => 'g' + x[0].slice(-10).replace(/[^A-Za-z0-9]/g, '') === p.id) || [])[0];
      if (sg) { if (p.gid !== sg) { p.gid = sg; delete p.gAt; } }
      else if (p.gid && !p.gres) delete p.gid; // '다른 곳'으로 바꿨을 수 있는 연결은 지우고 이름으로 다시 찾음 (예약 장소는 제외)
    });
    t.favV = 2;
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
// 홈 화면 앱(standalone)에서는 iOS가 알려 주는 높이가 상태바만큼 짧을 수 있어서 실제 화면 높이로 맞춤
const isStandalone = () => window.navigator.standalone === true || (window.matchMedia && matchMedia('(display-mode: standalone)').matches);
function fitAppHeight() {
  const sa = isStandalone(), root = document.documentElement;
  root.classList.toggle('standalone', sa);
  if (!sa) { root.style.removeProperty('--appH'); return; }
  const portrait = innerHeight >= innerWidth;
  const full = portrait ? Math.max(screen.height, screen.width) : Math.min(screen.height, screen.width);
  root.style.setProperty('--appH', Math.max(innerHeight, full) + 'px');
  if (scrollY) scrollTo(0, 0);
}
fitAppHeight(); addEventListener('resize', fitAppHeight); addEventListener('orientationchange', () => setTimeout(fitAppHeight, 300));
addEventListener('scroll', () => { if (isStandalone() && scrollY) scrollTo(0, 0); });
// 화면 정보 확인용 (D-day 칩을 5번 연속 누르면 표시)
let diagTaps = 0, diagT = 0;
function showDiag() {
  const p = document.createElement('div'); p.style.cssText = 'position:absolute;visibility:hidden;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)'; document.body.appendChild(p);
  const cs = getComputedStyle(p), info = `화면 ${screen.width}×${screen.height} · 창 ${innerWidth}×${innerHeight} · 문서 ${document.documentElement.clientHeight} · 보이는 ${visualViewport ? Math.round(visualViewport.height) : '-'} · 앱 ${document.getElementById('app').offsetHeight} · 위 ${cs.paddingTop} 아래 ${cs.paddingBottom} · ${isStandalone() ? '홈화면앱' : '브라우저'}`;
  p.remove(); openSheet(`<h2 style="margin-bottom:10px">화면 정보</h2><p style="font-size:14px;line-height:1.7;word-break:keep-all">${info}</p><p class="small muted" style="margin-top:8px">이 화면을 캡처해서 보내 주세요</p>`);
}
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
      <span class="row" style="gap:14px;margin-top:2px"><button data-act="showOnMap" data-id="${it.id}" class="row small" style="gap:4px;border:0;background:none;padding:0;color:#17806D;font-weight:700;min-height:32px;text-align:left">${svg('map', 13, '#17806D')}${p && p.lat ? '지도에서 보기' : '지도에 위치 정하기'}</button>${p && p.lat ? `<button data-act="navTo" data-id="${p.id}" class="row small" style="gap:4px;border:0;background:none;padding:0;color:#1A73E8;font-weight:700;min-height:32px">${svg('nav', 13, '#1A73E8')}길안내</button>` : ''}</span>
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
// 장소 창: Google 장소 정보(사진·평점·리뷰·영업시간)가 중심. 메뉴는 식당·카페만
const isEatery = (p) => p.cat === 'food' || p.cat === 'cafe';
function placeSheet(p) {
  if (!p) return;
  const days = tripDays(), rate = krwPer('PHP'), useG = GOOGLE_KEY && !gAuthFail && p.lat;
  const link = p.url || gSearch(p.lat ? p : { q: p.name + ' ' + (p.area || S.trip.city || '') });
  const menuBlock = isEatery(p) ? `<div class="stack" style="gap:8px;margin-top:16px">
      <h2 style="font-size:15px">내 메뉴 메모</h2>
      ${p.menu.length ? `<div class="card" style="padding:0 14px">${p.menu.map((m) => `<div class="list-row">
          <span style="flex:1;font-size:15px">${esc(m.name)}</span>
          <b class="num">${m.price ? '₱ ' + esc(m.price) : '<span class="small muted" style="font-weight:400">가격 미입력</span>'}</b>
          ${m.price ? `<span class="small muted">≈₩${Math.round(Number(m.price) * rate).toLocaleString()}</span>` : ''}
          <button class="icon" style="width:36px;height:36px" data-act="delMenu" data-pid="${p.id}" data-id="${m.id}" aria-label="메뉴 삭제">${svg('close', 14, '#5B6B6E')}</button>
        </div>`).join('')}</div>` : ''}
      <form class="row" data-form="menu" data-pid="${p.id}" style="gap:6px">
        <input name="name" placeholder="먹어 본 메뉴" aria-label="메뉴 이름" required style="flex:1;min-width:0;height:44px;border:1px solid var(--line);border-radius:12px;padding:0 10px">
        <input name="price" placeholder="₱ 가격" aria-label="가격(페소)" inputmode="decimal" style="width:84px;height:44px;border:1px solid var(--line);border-radius:12px;padding:0 10px">
        <button class="btn ghost" type="submit" style="height:44px">추가</button>
      </form>
      ${p.menu.length ? `<span class="small muted">1페소 ≈ ${rate.toFixed(1)}원으로 계산해요.</span>` : ''}
    </div>` : '';
  openSheet(`
    <div class="between" style="margin-bottom:6px"><span class="small" style="color:var(--coralink);font-weight:700">${CATS[p.cat] || '장소'}${p.priority === 'must' ? ' · 꼭 가기' : ''}</span>
      <span class="row" style="gap:0"><button class="icon" data-act="favToggle" data-id="${p.id}" data-sheet="1" aria-label="즐겨찾기">${svg('heart', 20, p.fav ? '#E5484D' : '#9AA5A7', 2.2)}</button><button class="icon" data-act="editPlace" data-id="${p.id}" aria-label="장소 수정">${svg('edit', 18, '#5B6B6E')}</button>
      <button class="icon" data-act="delPlace" data-id="${p.id}" aria-label="장소 삭제">${svg('trash', 18, '#B3412A')}</button></span></div>
    ${useG ? `<div id="gPlaceSlot" class="gfull gplace"><div class="poig-msg">Google 장소 정보 불러오는 중…</div></div>`
      : `<h2 style="font-size:22px">${esc(p.name)}</h2><p class="muted small" style="margin:4px 0 12px">${esc(p.area || '')}${p.hours ? ' · 영업 ' + esc(p.hours) : ''}</p>`}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px">
      ${p.lat ? `<button class="btn ghost" data-act="placeOnMap" data-id="${p.id}" style="height:44px">${svg('map', 16, '#17806D')} 지도에서 보기</button>` : `<a class="btn ghost" href="${link}" target="_blank" rel="noopener" style="text-decoration:none;height:44px">${svg('map', 16, '#17806D')} 구글에서 찾기 ↗</a>`}
      ${p.lat ? `<button class="btn" data-act="navTo" data-id="${p.id}" style="height:44px;background:#1A73E8">${svg('nav', 16, '#fff')} 길안내</button>`
        : `<button class="btn ghost" data-act="visitPlace" data-id="${p.id}" style="height:44px">${p.visited ? '방문 취소' : '방문 완료'}</button>`}
    </div>
    ${p.memo || p.signature ? `<div class="card stack" style="gap:4px;margin-top:12px">${p.signature ? `<span><b>메모</b> · ${esc(p.signature)}</span>` : ''}${p.memo ? `<span class="small muted" style="white-space:pre-wrap">${esc(p.memo)}</span>` : ''}</div>` : ''}
    ${menuBlock}
    <div class="stack" style="gap:8px;margin-top:16px">
      <h2 style="font-size:15px">일정에 추가</h2>
      <div class="chips">${days.map((d) => `<button class="chip" data-act="placeToDay" data-id="${p.id}" data-day="${d}">D${dayIndex(d)} ${fmtDate(d)}</button>`).join('')}</div>
      <button class="btn ghost" data-act="placeToTodo" data-id="${p.id}">${svg('plus', 18, '#17806D', 2.5)} 시간 정해서 추가</button>
    </div>`);
  if (!useG) return;
  const fail = (msg) => { const slot = $('#gPlaceSlot'); if (slot) slot.outerHTML = `<h2 style="font-size:22px">${esc(p.name)}</h2><p class="muted small" style="margin:4px 0 0">${esc(p.area || '')}</p><div class="poig-msg" style="margin-top:8px">${msg}</div>`; };
  ensureGid(p).then((id) => {
    const slot = $('#gPlaceSlot'); if (!slot) return;
    if (!id) { fail('Google에서 이 장소를 찾지 못했어요'); return; }
    const el = document.createElement('gmp-place-details');
    el.innerHTML = `<gmp-place-details-place-request place="${esc(id)}"></gmp-place-details-place-request><gmp-place-all-content></gmp-place-all-content>`;
    el.addEventListener('gmp-error', () => fail('Google 정보를 불러오지 못했어요'));
    slot.replaceChildren(el);
  }).catch(() => fail('Google 정보를 불러오지 못했어요'));
}
// 장소가 정해지지 않은 일정: 일정 정보만
function todoInfoSheet(it) {
  if (!it) return;
  const day = Object.keys(S.todos).find((d) => (S.todos[d] || []).some((x) => x.id === it.id));
  openSheet(`
    <div class="between"><span class="small" style="color:var(--coralink);font-weight:700">${TODO_CATS[it.cat] || '일정'}${day ? ` · D${dayIndex(day)} ${fmtDate(day)}` : ''}</span>
      <button class="icon" data-act="editTodo" data-id="${it.id}" aria-label="일정 수정">${svg('edit', 18, '#5B6B6E')}</button></div>
    <h2 style="font-size:22px;margin-top:4px">${esc(it.title)}</h2>
    <div class="stack" style="gap:10px;margin-top:12px">
      <div class="card row" style="gap:10px">${svg('clock', 18, G)}<span>${esc(it.time || '시간 미정')}</span></div>
      ${it.where ? `<div class="card row" style="gap:10px">${svg('pin', 18, G)}<span>${esc(it.where)}</span></div>` : ''}
      ${it.note ? `<div class="card" style="white-space:pre-wrap;font-size:14px;line-height:1.6">${esc(it.note)}</div>` : ''}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px">
      <button class="btn ghost" data-act="toggleInfo" data-id="${it.id}" style="height:44px">${it.done ? '완료 취소' : '완료 표시'}</button>
      <button class="btn ghost" data-act="showOnMap" data-id="${it.id}" style="height:44px">${svg('map', 16, '#17806D')} 위치 정하기</button>
    </div>`);
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
      <span class="small muted">페소로 적으면 그날 환율로 원화로 바꿔 합쳐요. 동행자 전원이 똑같이 나눠 부담해요.</span>
      ${list.length ? `<div class="card" style="padding:0 6px 0 14px">${list.map((e) => `<div class="list-row" style="gap:10px">
        <span class="micon" style="width:36px;height:36px;border-radius:10px">${svg(EXP_ICON[e.cat] || 'coin', 18, '#17806D')}</span>
        <span class="stack" style="flex:1;min-width:0;gap:1px"><span style="font-size:15px;font-weight:500">${esc(e.title)}</span><span class="small muted">${e.date ? fmtDate(e.date) : ''} · ${esc(e.payer)} 결제 · ${EXP_CATS[e.cat] || ''}${e.orig ? ' · ' + esc(e.orig) : ''}</span></span>
        <span class="stack" style="align-items:flex-end;gap:0"><b class="num" style="white-space:nowrap">${e.cur === 'PHP' ? '₱ ' + (+e.php).toLocaleString('ko-KR') : won(e.amount)}</b>${e.cur === 'PHP' ? `<span class="small muted num" style="white-space:nowrap">${won(e.amount)}</span>` : ''}</span>
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
function expConvText(cur, v, rate) {
  const n = +v || 0;
  return cur === 'PHP' ? `≈ ${won(n * rate)} · 1페소 ≈ ${rate.toFixed(1)}원${DB.fx.at ? '' : ' (기본 환율)'}` : (n ? `≈ ₱ ${(n / rate).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}` : '원화로 바로 기록돼요');
}
document.addEventListener('input', (ev) => {
  const f = ev.target.closest && ev.target.closest('form[data-form="expense"]'); if (!f) return;
  const o = $('#expConv'); if (!o) return;
  const cur = (f.querySelector('[name=cur]:checked') || {}).value || 'KRW';
  o.textContent = expConvText(cur, f.querySelector('[name=amount]').value, +o.dataset.rate);
});
function expenseForm(existing, preset) {
  const e = existing || Object.assign({ title:'', amount:'', date: tripDays().includes(todayStr()) ? todayStr() : S.trip.start, payer: members()[0], cat:'food' }, preset || {});
  const cur = existing ? (e.cur === 'PHP' ? 'PHP' : 'KRW') : 'PHP', rate = krwPer('PHP');
  const val = cur === 'PHP' ? (e.php ?? '') : e.amount;
  openSheet(`<h2 style="margin-bottom:14px">${existing ? '지출 수정' : '지출 기록'}</h2>
    <form class="stack" style="gap:12px" data-form="expense" data-id="${existing ? existing.id : ''}" data-orig="${esc(e.orig || '')}">
      <label class="field">사용 내역<input name="title" required value="${esc(e.title)}" placeholder="예: 망고 셰이크 2잔"></label>
      <div class="field"><span>금액</span>
        <div class="row" style="gap:8px">
          <div class="seg" role="radiogroup" aria-label="통화">
            <label><input type="radio" name="cur" value="PHP" ${cur === 'PHP' ? 'checked' : ''}><span>₱ 페소</span></label>
            <label><input type="radio" name="cur" value="KRW" ${cur === 'KRW' ? 'checked' : ''}><span>₩ 원</span></label>
          </div>
          <input type="number" name="amount" inputmode="decimal" step="any" required value="${esc(val)}" placeholder="0" style="flex:1;min-width:0" aria-label="금액">
        </div>
        <span class="small muted" id="expConv" data-rate="${rate}">${expConvText(cur, val, rate)}</span>
      </div>
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
    if (S.id === id && S.ui.tab === 'sunset') render();
    if (S.id === id && S.ui.tab === 'map') renderMapCard();
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
    const cur = str('cur') === 'PHP' ? 'PHP' : 'KRW', raw = +str('amount') || 0, rate = krwPer('PHP');
    const data = { title: str('title'), amount: Math.round(cur === 'PHP' ? raw * rate : raw), cur, php: cur === 'PHP' ? raw : null, rate: cur === 'PHP' ? +rate.toFixed(3) : null, date: str('date'), payer: str('payer'), cat: str('cat') };
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
      t = ensureTrip({ trip: data, ui: { tab: 'map', day: s } }); DB.trips[t.id] = t;
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
function fitNav() {
  if (!NAV) return;
  if (map && mapState === 'ready') {
    const xs = NAV.geo.map((c) => c[0]), ys = NAV.geo.map((c) => c[1]);
    map.fitBounds([[Math.min(...xs), Math.min(...ys)], [Math.max(...xs), Math.max(...ys)]], { padding: { top: headerH() + 20, bottom: bottomH() + 20, left: 40, right: 40 } });
    refreshMap(); return;
  }
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
    case 'diagTap': { const now = Date.now(); diagTaps = now - diagT < 600 ? diagTaps + 1 : 1; diagT = now; if (diagTaps >= 5) { diagTaps = 0; showDiag(); } break; }
    case 'favSheet': favSheet(); break;
    case 'favGo': { const p = placeById(id); closeSheet(); if (!p) break; if (!p.lat) { toast('위치를 확인하는 중이에요. 잠시 후 다시 눌러 주세요'); resolveFavs(); break; } if (POI) closePoi(true); S.ui.selPlace = p.id; save(); refreshMap(); whenMapReady(() => map.flyTo({ center: [p.lng, p.lat], zoom: Math.max(map.getZoom(), 16.5), padding: { top: headerH(), bottom: bottomH() + 120, left: 0, right: 0 } })); break; }
    case 'favToggle': { const p = placeById(id); if (!p) break; toggleFav(p); if (b.dataset.sheet) placeSheet(p); if (S.ui.tab === 'map') { refreshMap(); renderMapCats(); } else rerender(); break; }
    case 'poiFav': { const p = POI; if (!p) break; const place = { id: uid(), name: p.gname || p.name || CATS[p.cat] || '새 장소', cat: CATS[p.cat] ? p.cat : 'etc', area: '', lat: +p.lat.toFixed(6), lng: +p.lng.toFixed(6), menu: [], memo: '', coordV: 2, fav: true }; if (p.gid) place.gid = p.gid; S.places.unshift(place); closePoi(true); S.ui.selPlace = place.id; save(); refreshMap(); renderMapCats(); toast('즐겨찾기에 넣었어요'); break; }
    case 'poiFull': poiFullSheet(); break;
    case 'poiNav': if (POI) navTo({ id: 'poi', name: POI.name || CATS[POI.cat], lat: POI.lat, lng: POI.lng }); break;
    case 'poiAdd': poiAdd(); break;
    case 'gFull': { const p = placeById(id); if (p) ensureGid(p).then((gid) => gid ? gFullSheet(gid, p.name) : toast('Google에서 이 장소를 찾지 못했어요')); break; }
    case 'homeDay': S.ui.day = b.dataset.day; S.ui.tab = 'todo'; rerender(); break;
    case 'pickDay': S.ui.day = b.dataset.day; rerender(); break;
    case 'mapDay': S.ui.day = b.dataset.day; save(); renderMap(); refreshMap(); break;
    case 'toggle': { const t = findTodo(id); t.done = !t.done; rerender(); break; }
    case 'delTodo': { const d = findTodoDay(id); S.todos[d] = S.todos[d].filter((x) => x.id !== id); rerender(); toast('삭제했어요'); break; }
    case 'editTodo': todoForm(findTodo(id)); break;
    case 'addTodo': todoForm(null); break;
    case 'openPlace': placeSheet(placeById(id)); break;
    case 'todoInfo': todoInfoSheet(findTodo(id)); break;
    case 'toggleInfo': { const t = findTodo(id); if (t) { t.done = !t.done; save(); todoInfoSheet(t); if (S.ui.tab !== 'map') rerender(); } break; }
    case 'addPlace': addPlaceForm(null); break;
    case 'delPlace': S.places = S.places.filter((p) => p.id !== id); closeSheet(); save(); render(); refreshMap(); toast('장소를 지웠어요'); break;
    case 'delMenu': { const p = placeById(b.dataset.pid); p.menu = p.menu.filter((m) => m.id !== id); save(); placeSheet(p); break; }
    case 'placeToDay': { const p = placeById(id); todosOf(b.dataset.day).push({ id: uid(), time: '', title: p.name, placeId: p.id, done: false }); save(); closeSheet(); render(); refreshMap(); toast(`D${dayIndex(b.dataset.day)} 일정에 담았어요`); break; }
    case 'placeToTodo': todoForm(null, placeById(id)); break;
    case 'pfilter': S.ui.placeFilter = b.dataset.f; S.ui.selPlace = null; if (POI) closePoi(true); save(); renderMapCats(); refreshMap(); if (b.dataset.f !== 'all') fitFiltered(); break;
    case 'stab': { const t = b.dataset.t; S.ui.sheetTab = t; S.ui.placeFilter = t === 'today' ? 'all' : t; S.ui.selPlace = null; if (POI) closePoi(true); save(); renderMapCats(); refreshMap(); if (t !== 'today') fitFiltered(); break; }
    case 'favFab': { const on = S.ui.placeFilter !== 'fav'; S.ui.placeFilter = on ? 'fav' : 'all'; S.ui.sheetTab = on ? 'fav' : 'today'; S.ui.selPlace = null; if (POI) closePoi(true); save(); renderMapCats(); refreshMap(); if (on) fitFiltered(); toast(on ? '즐겨찾기만 모아서 보여 줘요' : '즐겨찾기 표시를 껐어요'); break; }
    case 'selFromList': selFromList(id); break;
    case 'searchClear': { const inp = $('#placeSearch'); if (inp) { inp.value = ''; S.ui.sheetQ = ''; $('#msheet').classList.remove('hasq'); renderSheetList(); inp.focus(); } break; }
    case 'selPlace': S.ui.selPlace = id; save(); refreshMap(); break;
    case 'searchPick': selFromList(id); break;
    case 'selClear': S.ui.selPlace = null; save(); refreshMap(); break;
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
setInterval(() => { checkAlarms(); if (S.ui.tab === 'map') { renderMapTop(); if (!S.ui.selPlace && !POI && !NAV) renderMapCard(); } }, 30000);
checkAlarms();

/* ========= PWA: 오프라인 캐시 ========= */
if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('./sw.js').catch(() => {}); });
}
