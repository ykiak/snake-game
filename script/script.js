import { drawSnake, moveSnake, growSnake, killSnake, drawSnakeAfterDeath } from "./snake.js"

export const canvas = document.querySelector("canvas")
export const ctx = canvas.getContext("2d")
export const size = 30

const storagedMaxScore = localStorage.getItem("score") || 0

const score = document.querySelector(".score")
const maxScore = document.querySelector(".max-score")
const gameOver = document.querySelector(".game-over")
const restartButton = document.querySelector("#restart")
maxScore.innerHTML = storagedMaxScore

document.addEventListener("death", () => {
    score.innerHTML = "00"
    gameOver.style.display = "flex"
    canvas.style.filter = "blur(2px)"
})

document.addEventListener("eat", () => {
    score.innerHTML = parseInt(score.innerHTML) + 10
    isMaxScore()
    maxScore.innerHTML = localStorage.getItem("score")
})

restartButton.addEventListener("click", () => {
    gameOver.style.display = "none"
    canvas.style.filter = "none"
    drawSnakeAfterDeath()
})

let loop

const isMaxScore = () => {
    if(storagedMaxScore < parseInt(score.innerHTML)){
        localStorage.setItem("score", parseInt(score.innerHTML))
    }
}

const gameLoop = () => {
    clearTimeout(loop)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    moveSnake()
    drawSnake()
    killSnake()
    growSnake()

    loop = setTimeout(() => {
        gameLoop()
    }, 100)
}

gameLoop()