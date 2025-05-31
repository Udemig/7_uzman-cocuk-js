import API from "./api.js";

const api = new API();

const songs = await api.getPopular();

console.log(songs);
