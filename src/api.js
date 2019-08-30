import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "9e3f0e344dbc125327bdda46043742e7",
    language: "en-US"
  }
});

api.get("tv/popular");

export default api;
