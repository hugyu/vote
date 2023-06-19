import { request } from "./tool"

const API_PRE = "http://localhost:3006"
// 请求类别
export const queryChoices=(data?:any) => request({
    url: `${API_PRE}/choice`,
    data:data
})
// 请求类别下的数据
export const queryChoicesData=(data?:any) => request({
    url: `${API_PRE}/query`,
    data:data
})
export const voteReq=(data?:any) => request({
    url: `${API_PRE}/vote`,
    data:data
})
// 登录
export const loginReq = (data) => request({
    url: `${API_PRE}/login`,
    data: data,
    method: "POST",
    header:{"Content-Type": "application/x-www-form-urlencoded"}
})
// 注册
export const registerReq = (data) => request({
    url: `${API_PRE}/register`,
    data: data,
    method: "POST",
    header:{"Content-Type": "application/x-www-form-urlencoded"}
    
})