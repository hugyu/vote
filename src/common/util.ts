/**
 * 防抖函数
 * @param fn  要执行的函数
 * @param delay 延迟的时间
 * @returns 
 */
 export const debounce = (fn: { apply: (arg0: undefined, arg1: any[]) => void }, delay: number | undefined) => {
    let timer: null|NodeJS.Timeout = null
    return (...args) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args) //通过apply改变定时器要执行的函数fun的指向。
        },delay)
    }
}