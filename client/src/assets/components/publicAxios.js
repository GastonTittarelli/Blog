import axios from "axios"

const publicAxios = axios.create({
  //local
  // baseURL: 'http://localhost:5000',

  // Production
  baseURL: 'http://blushing-shimmer-latency.glitch.me/',
});
export default publicAxios;