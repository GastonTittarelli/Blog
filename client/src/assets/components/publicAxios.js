import axios from "axios"

const publicAxios = axios.create({
  //local
  // baseURL: 'http://localhost:5000',

  // Production
  baseURL: 'https://blushing-shimmer-latency.glitch.me/',
});
export default publicAxios;