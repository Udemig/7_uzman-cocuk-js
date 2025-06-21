// UI Elemanlarını bir arada tutan obje
const uiElements = {
  list: document.querySelector("#music-list"),
  form: document.querySelector("form"),
  title: document.querySelector("#title"),
  player: document.querySelector(".player"),
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

// Player kısmını dinamik şekilde render eden fonksiyon
const renderPlayer = (song) => {
  // Player kısmının html içeriğini belirle
  uiElements.player.innerHTML = `
  
  
      <div class="info">
     
        <img
          src="${song.image}"
          alt="song-image"
        />

        
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>
    
      <audio
        src="${song.mp3}"
        controls autoplay
      ></audio>

      
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox-fill"></i>
        <i class="bi bi-pc-display"></i>
      </div>`;

  // Player içerisinde yer alan audio etiketine eriş
  const audio = uiElements.player.querySelector("audio");

  // Player içerisinde yer alan resime eriş
  const image = uiElements.player.querySelector(".info img");

  // Audio etiketinin oynatılma ve durdurulma anını izle

  audio.addEventListener("play", () => {
    // Audio etiketinin oynatılma anında resime animate classı ekle
    image.classList.add("animate");
  });

  audio.addEventListener("pause", () => {
    // Audio etiketinin durdurulma anında resime animate classını kaldır
    image.classList.remove("animate");
  });
};

export { uiElements, renderCard, renderLoader, renderPlayer };
