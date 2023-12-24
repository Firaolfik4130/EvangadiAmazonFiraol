import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazone-backend-server.cyclic.app/",
});

export default instance;
