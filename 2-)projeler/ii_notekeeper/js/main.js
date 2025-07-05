import months from "./constants.js";

// ! Html'deki elemanlara javascript kısmında eriş
const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector("#close-btn");
const form = document.querySelector("form");
const wrapper = document.querySelector(".wrapper");

// ! Global Değişkenler
let notes = [];

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

  // notes dizisine note elemanını ekle
  notes.push(noteItem);

  // Formu resetle
  form.reset();

  // popup'ı eski haline çevirmek için popupBox ve popup elemanlarından show classı çıkar
  popupBox.classList.remove("show");
  popup.classList.remove("show");

  // Arkaplan'ın kaydırılmasını eski haline getir
  document.querySelector("body").style.overflow = "auto";

  renderNotes();
});

// * Eklenen her note elemanı için bir note cardı render eden fonksiyon
function renderNotes() {
  // Mevcut notların hepsini arayüzden kaldır
  document.querySelectorAll(".note").forEach((item) => item.remove());

  console.log(notes);
  console.log("====================================");
  // notes dizisindeki her bir eleman için bir note kartı oluştur
  notes.forEach((note) => {
    // Note kartları için html
    let notesHtml = `  <div class="note" data-id="${note.id}">
        <div class="details">
          <h3>${note.title}</h3>
          <p>${note.description}</p>
        </div>

        <div class="bottom-content">
          <span>${note.date}</span>

          <div class="settings">
            <i class="bxr bx-dots-horizontal-rounded"></i>

            <ul class="menu">
              <li class="editIcon"><i class="bxr bx-edit"></i> Edit</li>
              <li class="deleteIcon"><i class="bxr bx-trash"></i> Delete</li>
            </ul>
          </div>
        </div>
      </div>`;

    // insertAdjacentHTML --> Arayüze eklenecek elemanları bir elemana göre konumlamak için kullanılır.Ör. Butonun sonrasına ,p 'ın sonuna,... Bunu yaparken ilk olarak hangi elemana göre konumlama yapılacaksa bunun adını sonrasında .insertAdjacentHTML() metodu yazılıp () içerisinde ise konum ve eklenecek eleman yazılır.

    addBox.insertAdjacentHTML("afterend", notesHtml);
  });
}

// ! Menu'yü aktif edecek fonksiyon
function showMenu(eleman) {
  // Menuyu aktif etmek için eleman'ın kapsayıcısına eriş
  const parentElement = eleman.parentElement;

  // Erişilen parentElement'e class ekle
  parentElement.classList.add("show");

  // Menu'yu pasife çek
  document.addEventListener("click", (e) => {
    // Eğer parentEleman haricinde bir yere veya bir menu ikonuna tıklandıysa
    if (e.target.tagName != "I" || e.target != eleman) {
      // Erişilen parentElement'den show classını kaldır
      parentElement.classList.remove("show");
    }
  });
}

// ! Note'ları silecek fonksiyon
function deleteNote(item) {
  // Kullanıcıdan silme işlemi için onay al
  const response = confirm("Bu notu silmek istediğinize eminmisiniz ?");

  if (response) {
    // Silinecek note elemanına eriş
    const note = item.closest(".note");

    // Note elemanın içerisinde yer alan id değerine eriş
    const noteId = parseInt(note.dataset.id);

    // Id'si bilinen note'u notes dizisinde kaldır
    notes = notes.filter((note) => note.id != noteId);

    // Notları renderla

    renderNotes();
  }
}

// * Wrapper kısmındaki tıklanmaları izle
wrapper.addEventListener("click", (e) => {
  // Eğer ...'ya tıklandıysa
  if (e.target.classList.contains("bx-dots-horizontal-rounded")) {
    showMenu(e.target);
  }
  // Eğer sil butonuna tıklandıysa
  else if (e.target.classList.contains("deleteIcon")) {
    deleteNote(e.target);
  }
  // Eğer düzenleme butonuna tıklandıysa
});
