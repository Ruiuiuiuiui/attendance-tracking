import axios from "axios";
import router from "@/router";
const service = axios.create({
  baseURL: "https://adqwdxacxqfqe.beefar4.com", // api的base_url
});

// 請求攔截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("transAdmin");
    router.currentRoute.value.path === "/signinRegister"
      ? localStorage.removeItem("transAdmin")
      : null;
    token === null
      ? delete config.headers.Authorization
      : (config.headers.Authorization = token);
    // console.log(config)
    // 設置公共參數
    //console.log(qs.stringify(config.data));

    return config;
  },
  (error) => {
    // 處理請求錯誤
    console.log(error); // 用於調試
    return Promise.reject(error);
  }
);

// 響應攔截器
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // alert("請先登入");
    // router.push("/signinRegister");
    console.log("error：" + error); // 用於調試
    return Promise.reject(error);
  }
);

export default service;
