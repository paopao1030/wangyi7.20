import axios from "axios";
const ajax = axios.create({
  baseURL: "/wang", // 前缀路径
  timeout: 20000, // 连接请求超时时间
});
export default ajax;
