// create axios instance and export
import axios from "axios";
export const Instance = axios.create({
  baseURL: "https://car-booking-system.onrender.com/",
});
