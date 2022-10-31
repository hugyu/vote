import { Button, Input, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { loginReq, registerReq } from "../../common/api";
import {
  hideLoading,
  setStorageSyncWithTime,
  showLoading,
  showToast
} from "../../common/tool";
import { debounce } from "../../common/util";
import { useStore } from "../../store";
import "./login.scss";

function Login() {
  const { userStore } = useStore();

  // 设置用户信息
  const [userInfo, setUserInfo] = useState({
    nickName: "",
    userPhone: "",
    password: ""
  });
  // 是否有账号
  const [isId, setIsId] = useState(true);
  // 输入时 防抖 并获取值
  const handleInput = debounce(
    (e: { detail: { value: string } }, type: string) => {
      setUserInfo(pre => ({ ...pre, [type]: e.detail.value }));
    },
    300
  );
  // 发起登录或者注册的请求
  const launchRequest = () => {
    const { userPhone, password, nickName } = userInfo;
    // 如果缺少数据
    if (!userPhone || !password || !nickName) {
      return showToast({ title: "请输入完整信息" });
    }
    const reg = /^1[3-9]\d{9}$/;
    // 正则测试
    if (!reg.test(userPhone)) {
      showToast({ title: "请输入正确的手机号" });
    }
    showLoading();
    isId
      ? loginReq({ ...userInfo })
          .then((res: any) => {
            console.log(res);
            const { userPhone, nickName } = res.result;
            //设置同步缓存
            setStorageSyncWithTime("userInfo", { userPhone, nickName }, 7200);
            // 初始化user
            userStore.initUser();
            Taro.navigateBack();
          })
          .catch(err => {
            console.log(err);
            showToast({ title: err.message });
          })
          .finally(() => {
            hideLoading();
          })
      : registerReq({ ...userInfo })
          .then((res: any) => {
            console.log(res);
            const { userPhone, nickName } = res.result;
            // 带时间的同步缓存
            setStorageSyncWithTime("userInfo", { userPhone, nickName }, 10);
            // 初始化用户
            userStore.initUser();
            showToast({ title: "注册成功" });
            Taro.navigateBack();
          })
          .catch(err => {
            showToast({ title: err.message });
          })
          .finally(() => {
            hideLoading();
          });
  };
  // 设置点击状态
  const handleClick = () => {
    setIsId(!isId);
  };
  return (
    <View className="login-container">
      <View className="login-top">
        <View>你好，</View>
        <View>欢迎{isId ? "登录" : "注册"}</View>
      </View>
      <View className="login-box">
        <Input
          type="text"
          className="nick-name input"
          placeholder="请输入昵称"
          placeholderClass="placeholer-class"
          onInput={e => handleInput(e, "nickName")}
        ></Input>
        <Input
          type="text"
          className="phone input"
          placeholder="请输入手机号"
          placeholderClass="placeholer-class"
          onInput={e => handleInput(e, "userPhone")}
          
        ></Input>

        <Input
          type="safe-password"
          className="password input"
          placeholder="请输入密码"
          placeholderClass="placeholer-class"
          onInput={e => handleInput(e, "password")}
        ></Input>
      </View>
      <Button className="login-btn" onClick={launchRequest}>
        {isId ? "登录" : "注册"}
      </Button>
      <View onClick={() => handleClick()} className="isId">
        {isId ? "没有账号?点击注册" : "有账号了?直接登录"}
      </View>
    </View>
  );
}
export default observer(Login);
