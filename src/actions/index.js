// 省略前
// export const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }
// export const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})
