import axios from "axios";
import { API_KEY, BASE_URL } from "../config/get-env";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});
