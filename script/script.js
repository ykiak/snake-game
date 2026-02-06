import { drawSnake, moveSnake } from "./snake.js"
import { drawFood } from "./food.js"

const canvas = document.querySelector("canvas")
export const ctx = canvas.getContext("2d")
export const size = 30

let loop

const gameLoop = () => {
    clearTimeout(loop)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    moveSnake()
    drawFood()
    drawSnake()
    
    loop = setTimeout(() => {
        gameLoop()
    }, 300)
}

gameLoop()