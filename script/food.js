import { ctx, size } from "./script.js"
import { randomColor, randomPosition } from "./utils.js"

const {red, green, blue} = randomColor()
export const food = {
    x: randomPosition(),
    y: randomPosition(),
    color: `rgb(${red}, ${green}, ${blue})`
}

export const drawFood = () => {

    ctx.fillStyle = food.color
    ctx.shadowColor = food.color
    ctx.shadowBlur = 6
    ctx.fillRect(food.x, food.y, size, size)
    ctx.shadowBlur = 0
}