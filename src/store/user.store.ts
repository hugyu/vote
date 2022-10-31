import Taro from "@tarojs/taro";
import { makeAutoObservable } from "mobx";
import { getStorageSyncWithTime, showToast } from "../common/tool";

class userStore {
    isLogin = false;
    userPhone = ''
    nickName=''
    constructor() {
    makeAutoObservable(this);
    }
    initUser() {
        const userInfo = getStorageSyncWithTime('userInfo')
        if (userInfo) {
            if (userInfo.userPhone) {
                this.userPhone = userInfo.userPhone
                this.isLogin = true
            }
            if (userInfo.nickName) {
                this.nickName = userInfo.nickName
            }
        } else {
            this.isLogin = false
            this.nickName = ''
            this.userPhone = ''
        }
        
    }
    logout() {
        Taro.removeStorageSync('userInfo')
        this.initUser()
        showToast({title:"操作成功"})
    }
}
export default userStore;
