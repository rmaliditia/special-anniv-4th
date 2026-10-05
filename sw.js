// Ubah versi cache agar browser memuat ulang HTML dan aset baru
const CACHE_NAME = "anniv-v3";

const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",

  // Gambar Thumbnail Menu Baru
  "/thumb-wod.jpg",
  "/thumb-bc.jpg",
  "/thumb-snap.jpg",

  // Daftar 9 foto untuk Brain Check
  "/foto-1.jpg",
  "/foto-2.jpg",
  "/foto-3.jpg",
  "/foto-4.jpg",
  "/foto-5.jpg",
  "/foto-6.jpg",
  "/foto-7.jpg",
  "/foto-8.jpg",
  "/foto-9.jpg",

  // File aset lainnya
  "/frame-01.png",
  "/frame-02.png",
  "/frame-03.png",
  "/frame-04.png",
  "/card-back.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
