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