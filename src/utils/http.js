// 封装axios
// 实例化 请求拦截器 响应
import axios from "axios";
const http = axios.create({
  baseURL: "http://geek.iteheima.net/v1.0",
  timeout: 12000,
});
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  (response) => {
    // console.log("response", response);
    return response;
  },
  (error) => {
    // console.log("error", error);
    return Promise.reject(error);
  }
);

export { http };
