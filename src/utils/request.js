import axios from "axios";
import { useMessage, useDialog } from "naive-ui";
import store from "@/store";

// 创建 axios 实例
const service = axios.create({
  // 在请求地址前面加上baseURL
  baseURL: import.meta.env.VITE_BASE_API,
  // 当发送跨域请求时携带cookie
  // withCredentials: true,
  timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 模拟指定请求令牌
    config.headers["X-Token"] = "my token";
    return config;
  },
  (error) => {
    // 请求错误的统一处理
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * 通过判断状态码统一处理响应，根据情况修改
   * 同时也可以通过HTTP状态码判断请求结果
   */
  (response) => {
    const res = response.data;
    //const message = useMessage();
    //const dialog = useDialog();

    // 如果状态码不是20000则认为有错误
    if (res.code !== 0) {
      //message.error(res.message, { duration: 5000 });

      // 50008: 非法令牌; 50012: 其他客户端已登入; 50014: 令牌过期;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 重新登录
        // dialog.warning({
        //   title: "您已登出, 请重新登录",
        //   positiveText: "确认",
        //   negativeText: "取消",
        //   onPositiveClick: () => {
        //     return (
        //       new Promise((resolve) => {}),
        //       then(() => {
        //         store.dispatch("user/resetToken").then(() => {
        //           location.reload();
        //         });
        //       })
        //     );
        //   },
        // });

        // Msgbox.confirm("您已登出, 请重新登录", "确认", {
        //   confirmButtonText: "重新登录",
        //   cancelButtonText: "取消",
        //   type: "warning",
        // }).then(() => {
        //   store.dispatch("user/resetToken").then(() => {
        //     location.reload();
        //   });
        // });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    message.error(error.message, { duration: 5000 });
    return Promise.reject(error);
  }
);

export default service;
