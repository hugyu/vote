import Taro from "@tarojs/taro";

/**
 * 网络请求
 * @param options 
 * @returns 
 */
 export const request = (options?:any) => {
    return new Promise((resolve, reject) => {
        Taro.request({
            url: "",
            data: {},
            method: "GET",
            ...options
        }).then(res => {
            const { data } = res
            if (data?.code === 1) {
                // 成功
                resolve(data)
            } else {
                //不是预期的结果
                reject(res)
            }
        }).catch(err => { 
            reject(err)
        });
    }) 
}
/**设置带有时间的同步设置缓存方法
 * key 缓存标签 value 缓存值 time 缓存时间 单位秒
 */
 export const setStorageSyncWithTime = (key, value, time) => {
    try {
      const curTime = Date.now();
      //过期时间
      const expiredTime = curTime + time * 1000;
      Taro.setStorageSync(key, { [key]: value, expiredTime });
    } catch (e) {
      console.log(e);
    }
  };
  /**
   * 同步获取缓存的方法
   * @param key 缓存标签名称
   * @returns 
   */
  export const getStorageSyncWithTime = key => {
    try {
      const curTime = Date.now();
      const  res  = Taro.getStorageSync(key);
      if (curTime > res.expiredTime) {
        //缓存过期
          Taro.removeStorageSync(key);
          return 
      } else {
        return res[key];
      }
    } catch (e) {
      console.log(e);
    }
  };
  /**
 * 提示框
 * @param options
 * @returns
 */
export const showToast = (options?: any) => {
    return Taro.showToast({
      title: "温馨提示",
      icon: "none",
      mask: true, //防止触摸穿透
      duration: 2000,
      ...options
    });
};
  /**
 * showLoading
 * @param options
 * @returns
 */
export const showLoading = (options?: any) => {
    return Taro.showLoading({
      title: "加载中",
      mask: true, //不能触摸其他位置
      ...options
    });
};
  /**
 * 关掉loading效果
 * @returns
 */
export const hideLoading = () => {
    return Taro.hideLoading();
  };