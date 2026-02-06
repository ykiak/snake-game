import { ctx, size } from "./script.js"

let multiples = []
for(let i = 0; i < 600; i += 30){
    multiples.push(i)
}

let colorIndex = []
for(let j = 0; j <= 255; j++){
    colorIndex.push(j)
}

const getRandomNumber = (arr) => {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

const food = {
    x: getRandomNumber(multiples),
    y: getRandomNumber(multiples),
    color: `rgb(
    ${getRandomNumber(colorIndex)},
    ${getRandomNumber(colorIndex)},
    ${getRandomNumber(colorIndex)}
    )`
}

export const drawFood = () => {
    ctx.fillStyle = food.color
    ctx.shadowColor = food.color
    ctx.shadowBlur = 6
    ctx.fillRect(food.x, food.y, size, size)
    ctx.shadowBlur = 0
}