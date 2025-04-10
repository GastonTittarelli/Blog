import axios from "axios"

const publicAxios = axios.create({
  //local
  // baseURL: 'http://localhost:5000',

  // Production
  // baseURL: 'https://blushing-shimmer-latency.glitch.me/',

  // Vercel
  baseURL: "https://blog-server-five-ochre.vercel.app/",
});
export default publicAxios;