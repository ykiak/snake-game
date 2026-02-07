import { ctx, size, canvas } from "./script.js"
import { drawFood, food } from "./food.js"
import { randomColor, randomPosition } from "./utils.js"

let snake = [
    { x: 30, y: 30 },
    { x: 60, y: 30 },
]
let isSnakeDeath = false
let direction

export const drawSnake = () => {
    snake.forEach((e, index) => {
        ctx.fillStyle = "#ddd"
        if (index === snake.length - 1) {
            ctx.fillStyle = "white"
        }
        ctx.fillRect(e.x, e.y, size, size)
    })
}

export const moveSnake = () => {
    if (!direction) return
    drawFood()
    const head = snake[snake.length - 1]
    snake.shift()

    if (direction === "right") snake.push({ x: head.x + size, y: head.y })
    else if (direction === "left") snake.push({ x: head.x - size, y: head.y })
    else if (direction === "up") snake.push({ x: head.x, y: head.y - size })
    else if (direction === "down") snake.push({ x: head.x, y: head.y + size })
}

export const growSnake = () => {
    const { red, green, blue } = randomColor()
    let x = randomPosition()
    let y = randomPosition()

    while (snake.some(e => e.x === x && e.y === y)) {
        x = randomPosition()
        y = randomPosition()
    }

    const head = snake[snake.length - 1]
    if (head.x === food.x && head.y === food.y) {
        document.dispatchEvent(new Event("eat"))
        snake.push(head)

        food.x = x
        food.y = y
        food.color = `rgb(${red}, ${green}, ${blue})`

        drawFood()
    }
}

export const killSnake = () => {
    const verticalLimit = canvas.width - size
    const horizontalLimit = canvas.height - size

    const head = snake[snake.length - 1]

    const wallCollision =
        head.x < 0 || head.x > horizontalLimit || head.y < 0 || head.y > verticalLimit
    const selfCollision =
        snake.some((e, index) => e.x === head.x && e.y === head.y && index !== snake.length - 1)

    if (wallCollision || selfCollision) {
        document.dispatchEvent(new Event("death"))
        direction = undefined
        isSnakeDeath = true
    }
}

export const drawSnakeAfterDeath = () => {
    snake = [
        { x: 30, y: 30 },
        { x: 60, y: 30 },
    ]
    isSnakeDeath = false
    drawSnake()
}

document.addEventListener("keydown", ({ key }) => {
    if(isSnakeDeath) return
    else if (key === "ArrowRight" && direction !== "left") direction = "right"
    else if (key === "ArrowLeft" && direction !== "right") direction = "left"
    else if (key === "ArrowUp" && direction !== "down") direction = "up"
    else if (key === "ArrowDown" && direction !== "up") direction = "down"
})