import { ctx, size } from "./script.js"
import { getRandomNumber, multiples, colorIndex} from "./utils.js"

export const food = {
    x: getRandomNumber(multiples),
    y: getRandomNumber(multiples),
    color: `rgb(
    ${getRandomNumber(colorIndex)},
    ${getRandomNumber(colorIndex)},
    ${getRandomNumber(colorIndex)}
    )`
}

export const drawFood = (food) => {
    ctx.fillStyle = food.color
    ctx.shadowColor = food.color
    ctx.shadowBlur = 6
    ctx.fillRect(food.x, food.y, size, size)
    ctx.shadowBlur = 0
}