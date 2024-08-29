import axios from "axios";

const instance = axios.create({
  baseURL: "http://157.230.58.153/",
});

export default instance;
