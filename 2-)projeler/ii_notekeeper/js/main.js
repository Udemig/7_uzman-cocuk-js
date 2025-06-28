import months from "./constants.js";

// ! Html'deki elemanlara javascript kısmında eriş
const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector("#close-btn");
const form = document.querySelector("form");

// * addBox'a tıklanınca popup'ı görünür kıl
addBox.addEventListener("click", () => {
  // popup'ı görünür kılmak için popupBox ve popup elemanlarına show classı ekle
  popupBox.classList.add("show");
  popup.classList.add("show");

  // Arkaplan'ın kaydırılmasını engelle
  document.querySelector("body").style.overflow = "hidden";
});

// * closeBtn'e tıklanınca popup'ı gizle
closeBtn.addEventListener("click", () => {
  // popup'ı eski haline çevirmek için popupBox ve popup elemanlarından show classı çıkar
  popupBox.classList.remove("show");
  popup.classList.remove("show");

  // Arkaplan'ın kaydırılmasını eski haline getir
  document.querySelector("body").style.overflow = "auto";
});

// * form'un gönderilmesi izle

form.addEventListener("submit", (e) => {
  // Sayfa yenilemesini engelle
  e.preventDefault();

  // Title ve description alanlarına eriş
  const titleInput = e.target[0];
  const descriptionInput = e.target[1];

  // Title ve description'a eriş
  const title = titleInput.value;
  const description = descriptionInput.value;

  // Title ve description değerlerinin olup olmadığını kontrol et
  // ! Bu kısımda && (ve) operatörü kullanmak yerine || (veya) operatörü kullanmamızın sebebi ve kullandığımızda title ve description alanlarının her ikisinin aynı anda boş olma durumunu kontrol etmek istememizdir.
  if (!title || !description) {
    alert("Lütfen formdaki gerekli kısımları doldurunuz !");

    // Fonksiyonu durdur
    return;
  }

  // Bir note elemanı için gerekli olan title,description,date ve id değerlerini oluştur

  // Tarih objesinden bir örnek al
  const date = new Date();

  // Tarih objesi içerisinden yıl,ay ve gün değerlerine eriş
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Id değerine eriş
  const id = date.getTime();

  // Bir note objesi oluştur
  const noteItem = {
    title,
    description,
    id,
    date: `${month} ${day},${year}`,
  };

  console.log(noteItem);
});
