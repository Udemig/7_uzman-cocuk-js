// UI Elemanlarını bir arada tutan obje
const uiElements = {
  list: document.querySelector("#music-list"),
  form: document.querySelector("form"),
  title: document.querySelector("#title"),
};
// Şarkı card'ı render edecek fonksiyon
const renderCard = (songs) => {
  // Şarkı listesini temizle
  uiElements.list.innerHTML = "";

  // Her songs için bir html oluştur
  songs.forEach((song) => {
    // Bir html oluştur
    const card = document.createElement("div");

    // Oluşturulan html elemanına class ekle
    card.classList.add("card");

    // Oluşturulan,class eklenen elemana data attribute'leri ekle
    card.dataset.title = song.title;
    card.dataset.subtitle = song.subtitle;
    card.dataset.subtitle = song.subtitle;
    card.dataset.image = song.images.coverarthq;
    card.dataset.mp3 = song.hub.actions[1].uri;

    // Oluşturulan,class atanan elemanın html'ini belirle
    card.innerHTML = ` 
              <figure>
                <img
                  src="${song.images.coverarthq}"
                  alt="card-image"
                />
                <div class="play-icon">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>

              <div class="card-info">
                <h4>${song.title}</h4>
                <h4>${song.subtitle}</h4>
              </div>`;

    // Oluşturulan html elemanını arayüze ekle
    uiElements.list.appendChild(card);
  });
};

// Loader render edecek fonksiyon
const renderLoader = (outlet) => {
  // Outlet'in html içeriğini belirle
  outlet.innerHTML = `
  
<div class="banter-loader">
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
</div>`;
};

export { uiElements, renderCard, renderLoader };
