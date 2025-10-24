// src/services/api.js
import axios from "axios";

// Replace this with your actual backend Render URL
const API = axios.create({
  baseURL: "https://multivendor-backend-6ozb.onrender.com",
});

export default API;
