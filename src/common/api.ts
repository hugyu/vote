import { request } from "./tool"

const API_PRE = "http://localhost:3001"
// 矿泉水
export const mineralReq=(data?:any) => request({
    url: `${API_PRE}/mineral`,
    data:data
})
// 饮料
export const drinksReq=(data?:any) => request({
    url: `${API_PRE}/drinks`,
    data:data
})
// 纯牛奶
export const pureReq=(data?:any) => request({
    url: `${API_PRE}/pure_milk`,
    data:data
})
// 酸奶
export const yoghurtReq=(data?:any) => request({
    url: `${API_PRE}/yoghurt`,
    data:data
})