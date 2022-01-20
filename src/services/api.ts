import axios from "axios";

const api = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/fruityvice.com/api",
  });
  
  export default api;