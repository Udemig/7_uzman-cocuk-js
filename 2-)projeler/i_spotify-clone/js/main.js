import API from "./api.js";
import { renderCard, renderLoader, uiElements } from "./ui.js";

// Api classından bir örnek al
const api = new API();

// Sayfanın yüklenme anını izle
document.addEventListener("DOMContentLoaded", async () => {
  // Loader'ı renderla
  renderLoader(uiElements.list);

  // Popüler şarkıları api'dan almak için api isteği at
  const songs = await api.getPopular();

  // Popüler şarkıları renderla
  renderCard(songs);
});

// Formun gönderilmesini izle
uiElements.form.addEventListener("submit", async (e) => {
  // Sayfa yenilenmesini engelle
  e.preventDefault();

  // Input içerisindeki değere eriş
  const query = e.target[0].value;

  // Eğer query değeri yoksa fonksiyonu durdur
  if (!query) {
    alert(`Lütfen şarkı veya şarkıcı adı aratınız`);

    return;
  }

  // Loader'ı renderla
  renderLoader(uiElements.list);

  // Input'dan erişilen query değeri ile api isteği at
  const searchedMusics = await api.searchMusic(query);

  // Title'ın içeriğini aranan kelimeye göre renderla
  uiElements.title.textContent = `${query} için sonuçlar`;

  // Aranan şarkıları renderla
  renderCard(searchedMusics);
});

// Music List kısmına bir olay izleyicisi ekle
uiElements.list.addEventListener("click", (e) => {
  // Eğer play-icon'a tıklandıysa
  if (e.target.className == "play-icon") {
    // Tıklanılan elemanın kapsayıcısına eriş
    const card = e.target.parentElement.parentElement;

    // Card'a atanan data özelliklerine eriş
    const songData = card.dataset;

    // Şarkı oynat
  }
});
