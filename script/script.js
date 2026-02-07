import { drawSnake, moveSnake, growSnake } from "./snake.js"

const canvas = document.querySelector("canvas")
export const ctx = canvas.getContext("2d")
export const size = 30

let loop

const gameLoop = () => {
    clearTimeout(loop)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    moveSnake()
    drawSnake()
    growSnake()
    
    loop = setTimeout(() => {
        gameLoop()
    }, 100)
}

gameLoop()