// * Javascript Functions

function çiktiVer(mesaj) {
  document.write(mesaj, "<br/>");
}

çiktiVer("Merhaba,nasılsın?");
çiktiVer("Javascript projeleri hazırla");
çiktiVer("Ödevlerini yap");

function çarpma(x, y) {
  let çarpım = x * y;

  document.write(çarpım, "<br/>");
}

çarpma(34, 2);

function stokHesapla(a, b, c) {
  let toplam = a + b + c;

  return toplam;
}

document.write("Stok:", stokHesapla(12, 13, 14), "<br/>");

// * Arrow Functions

let ortalamaHesapla = (a, b, c) => {
  let ortalama = (a + b + c) / 3;

  document.write(ortalama, "<br/>");
};

ortalamaHesapla(20, 30, 40);

const sayılar = [13, 345432, 1234, 6433, 1764, 987893];

document.write("Sayılar:", sayılar, "<br/>");

document.write(
  "Sıralı Sayılar:",
  sayılar.sort(function (a, b) {
    return a - b;
  }),
  "<br/>"
);

document.write(
  "Sıralı Sayılar:",
  sayılar.sort((a, b) => a - b),
  "<br/>"
);

// * Javascript Arrays

let kişiler = ["Ali", "Mehmet", "Gamze", "Buse"];

document.write(`Kişiler: ${kişiler} <br/>`);

document.write(`Kişilerin 1. elemanı: ${kişiler[0]} <br/>`);

kişiler.push("Deniz"); // Dizinin sonuna  eleman eklemek için kullanılır

document.write(`Kişiler-1: ${kişiler} <br/>`);

kişiler.pop(); // Dizinin sonundaki elemanı kaldırmak için kullanılır

document.write(`Kişiler-2: ${kişiler} <br/>`);

kişiler.unshift("Doğukhan"); // Dizinin başına eleman eklemek için kullanılır

document.write(`Kişiler-3: ${kişiler} <br/>`);

kişiler.shift(); // Dizinin başından eleman kaldırmak için kullanılır

document.write(`Kişiler-4: ${kişiler} <br/>`);

document.write(`Kişiler-5: ${kişiler.slice(1, 3)} <br/>`); // Dizinin belirli bir aralığını almak için kullanılır

document.write(`Kişiler-6: ${kişiler.indexOf("Buse")} <br/>`); // Bir elemanın dizideki index'ini bulmak için kullanılır

document.write(`Kişiler-6: ${kişiler.reverse()} <br/>`); // Bir diziyi ters çevirmek için kullanılır

document.write(`Kişiler-6: ${kişiler.join(" ")} <br/>`); // Bir dizinin elemanlarını hangi ayıraca göre ayrılacağını belirlemek için kullanılır

const öğrenciler = [
  { id: 1, isim: "Enes", soyisim: "Özkan", not: 100, yaş: 16 },
  { id: 2, isim: "Ertuğrul", soyisim: "Kaya", not: 10, yaş: 16 },
  { id: 3, isim: "Ali", soyisim: "Kara", not: 40, yaş: 16 },
  { id: 4, isim: "Abdullah", soyisim: "Pazarcı", not: 90, yaş: 16 },
];

console.table(öğrenciler);

// find: Bir dizi içerisindeki bir elemanı bulmak için kullanılır.

const ikiIdliKullanıcı = öğrenciler.find((öğrenci) => öğrenci.id === 2);

console.log(ikiIdliKullanıcı);

const puanıKırkOlanKullanıcı = öğrenciler.find((öğrenci) => öğrenci.not === 40);

console.log(puanıKırkOlanKullanıcı);

// filter: Bir dizi içerisindeki elemanları filtrelemek için kullanılır.

const derstenKalanÖğrenciler = öğrenciler.filter((öğrenci) => öğrenci.not < 50);

console.log(derstenKalanÖğrenciler);

// ! find ve filter bir dizinin elemanlarını dönerek dizi elemanına erişmek için kullanılır.find belirtilen koşula uygun tek elemanı alırken filter belirtilen koşula uygun birden fazla elemanı almak için kullanılır.

// Dizilerde Döngüler

// forEach: Bir dizinin elemanlarını dönerek o dizinin her elemanı için bir işlem yapmak için kullanılır.

kişiler.forEach((kişi) => {
  document.write(`Hoşgeldin,${kişi} <br/> `);
});

document.write(`Sayılar: ${sayılar} <br/>`);

// map: Bir dizinin elemanlarını dönerek o dizinin her elemanı için bir işlem yapmak için kullanılır.forEach'den farkı ise map döndüğü dizinin elemanlarını yeni bir diziye aktarabilir.

const yeniSayılar = sayılar.map((sayı) => sayı * 10);

document.write(`Yeni Sayılar: ${yeniSayılar} <br/>`);

// * Spread Operatör: Spread operatör bir dizi veya objeyi genişletmek için kullanılır.

const kullanıcılar = ["Yusuf", "Enes", "Ali", "Mehmet", "Harun"];

document.write(`Kullanıcılar: ${kullanıcılar} <br/>`);

const yeniDizi = [...kullanıcılar, "Merhaba", true, "Selam", "Aykut"]; // kullanıcılar dizisindeki tüm değerleri tutup üzerine yeni değerler ekleyerek yeniDiziyi  oluştur.

document.write(`Yeni Dizi: ${yeniDizi} <br/>`);

const kullanıcı = {
  id: 123454323453,
  isim: "Ali",
  soyisim: "Kara",
  yaş: 40,
};

console.log("Kullanıcı", kullanıcı);

const yeniKullanıcı = {
  ...kullanıcı,
  email: "alikara@gmail.com",
  diller: ["Türkçe", "İngilizce", "Fransızca"],
};

console.log("Kullanıcı-1", yeniKullanıcı);

const yeniKişiler = [
  { id: 1, isim: "Elif", soyisim: "Yılmaz", puan: 30 },
  { id: 2, isim: "Aybuke", soyisim: "Tarlacı", puan: 60 },
  { id: 3, isim: "Kübra", soyisim: "Kara", puan: 80 },
  { id: 4, isim: "Yasin", soyisim: "Kaynarca", puan: 20 },
];

const güncelKişiler = yeniKişiler.map((kişi) => ({
  ...kişi,
  puan: kişi.puan * 10,
}));

console.table(yeniKişiler);

console.table(güncelKişiler);

yeniKişiler.find((kişi) => {
  if (kişi.isim == "Elif") {
    kişi.isim = "Fatma";
  }
});

console.table(yeniKişiler);

// * Scope Kavramı

// Bir değişkenin erişilebilir olduğu alanı ifade eder.

// Global Scope: Global scope program içerisinde heryerden erişilebilir olan scope'dur.

// Function Scope: Bir function içerisinde tanımlanan değişkenlerin scope'u function scope'dur.

// Block Scope: if-else,for,... bir block içerisinde tanımlanan değişkenlerin scope'u block scope'dur.

const kullanıcıAdı = "yamanyusuf";

document.write(`Kullanıcı Adı: ${kullanıcıAdı} <br/>`);

function tanıtım() {
  const kullanıcıPuan = 30;
}

// document.write(`Kullanıcı Adı: ${kullanıcıPuan} <br/>`);

let mesaj;

let ortalama = 50;
if (ortalama === 50) {
  mesaj = "Ortalama 50'dir";
}

document.write(`Kullanıcı Puan: ${mesaj} <br/>`);

// * Javascript Class Yapısı

// Class'lar birden fazla metodu ve özelliği bir arada tutarak daha düzenli kod yazma imkanı sağlar.

// ! Class Tanımlama

// Bir class "class" keyword'ü ile tanımlanır.Class yapısı içerisinde gerekli metot ve yapılar kodlanır.

class Kişi {
  // Kurucu Metot
  constructor(isim, soyisim, yaş) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.yaş = yaş;
  }

  kişiTanıtım() {
    document.write(
      `Kişi İsim: ${this.isim} Kişi Soyisim:${this.soyisim} Kişi Yaş: ${this.yaş} <br/> `
    );
  }
}

// ! Class yapısı içerisindeki değerlere erişmek için class yapısının bir örneğini almamız gerekir.Bu örnek alma işlemini "new" keyword'ü ile yaparız.

const kişi = new Kişi("Yusuf", "YAMAN", 23);

kişi.kişiTanıtım();
