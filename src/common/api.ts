import { request } from "./tool"

const API_PRE = "http://localhost:3001"
// 矿泉水
export const mineralReq=(data?:any) => request({
    url: `${API_PRE}/mineral`,
    data:data
})
export const mineralVote=(data?:any)=>request({
    url: `${API_PRE}/mineral/vote`,
    data:data
})
// 饮料
export const drinksReq=(data?:any) => request({
    url: `${API_PRE}/drinks`,
    data:data
})
export const drinksVote=(data?:any)=>request({
    url: `${API_PRE}/drinks/vote`,
    data:data
})
// 纯牛奶
export const pureReq=(data?:any) => request({
    url: `${API_PRE}/pure_milk`,
    data:data
})
export const pureVote=(data?:any)=>request({
    url: `${API_PRE}/pure_milk/vote`,
    data:data
})
// 酸奶
export const yoghurtReq=(data?:any) => request({
    url: `${API_PRE}/yoghurt`,
    data:data
})
export const yoghurtVote=(data?:any)=>request({
    url: `${API_PRE}/yoghurt/vote`,
    data:data
})