import axios from "axios";

const API = axios.create({ baseURL: "https://shiny-pancake-rjrx4vpxxg635vr4-5500.app.github.dev/api/v1/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
