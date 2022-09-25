import { makeAutoObservable } from "mobx";
import { http } from "@/utils/index";
import { message } from "antd";
// login module
class LoginStore {
  token = "";
  constructor() {
    makeAutoObservable(this);
  }
  setToken = async ({ mobile, code }) => {
    // 调用登录组件
    // 存入token
    const res = await http
      .post("http://geek.itheima.net/v1_0/authorizations", {
        mobile,
        code,
      })
      .catch((err) => {
        console.log("err", err);
        message.warn("密码错误呢 亲");
      });
    // console.log("res", res);
    this.token = res.data.data.token;


    console.log("this.token", this.token);
  };
}

export default LoginStore;
