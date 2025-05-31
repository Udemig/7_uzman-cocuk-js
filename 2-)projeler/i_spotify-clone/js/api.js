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
      `${this.baseURL}/search?term=kiss%20the%20rain`,
      this.options
    );

    // Api'dan gelen json veri tipindeki datayı js nesnesine çevir
    const data = await response.json();

    // Gelen veriyi projede kullanmak istediğimiz şekilde dönder
    return data.tracks.hits.map((item) => item.track);
  }
}

export default API;
