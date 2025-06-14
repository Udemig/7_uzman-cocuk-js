class API {
  // Kurucu metot
  constructor() {
    this.baseURL = "https://shazam.p.rapidapi.com";
    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a18611c9c9msh5bfa08f1405b7ebp1189dfjsn1a97338b2630",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };
  }

  // Get Popular
  async getPopular() {
    // Api isteği at
    const response = await fetch(
      `${this.baseURL}/search?term=cemkaraca`,
      this.options
    );

    // Api'dan gelen json veri tipindeki datayı js nesnesine çevir
    const data = await response.json();

    // Gelen veriyi projede kullanmak istediğimiz şekilde dönder
    return data.tracks.hits.map((item) => item.track);
  }

  // Search Music
  async searchMusic(query) {
    // Dışarıdan verilen arama parametresine göre api isteği at
    const response = await fetch(
      `${this.baseURL}/search?term=${query}`,
      this.options
    );

    // Api'dan gelen veriyi js nesnesine çevir
    const data = await response.json();

    // Api'dan gelen veriyi projede kullanılacak  formata getir

    const formattedData = data.tracks.hits.map((i) => i.track);

    // formattedData'yı return et

    return formattedData;
  }
}

export default API;
