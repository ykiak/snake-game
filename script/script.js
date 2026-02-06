const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const size = 30

const snake = [
    {x: 30, y: 30},
    {x: 60, y: 30},
    {x: 90, y: 30},
]

let direction, loop

const drawSnake = () => {
    snake.forEach((e, index) => {
        ctx.fillStyle = "#ddd"
        if(index === snake.length - 1){
            ctx.fillStyle = "white"
        }
        ctx.fillRect(e.x, e.y, size, size)
    })
}

const moveSnake = () => {
    if(!direction) return
    const head = snake[snake.length - 1]
    snake.shift()
    
    if(direction === "right") snake.push({x: head.x + size, y: head.y})
    else if(direction === "left") snake.push({x: head.x - size, y: head.y})
    else if(direction === "up") snake.push({x: head.x, y: head.y - size})
    else if(direction === "down") snake.push({x: head.x, y: head.y + size})
}

const gameLoop = () => {
    clearTimeout(loop)
    ctx.clearRect(0, 0, 600, 600)
    
    moveSnake()
    drawSnake()
    
    loop = setTimeout(() => {
        gameLoop()
    }, 300)
}

gameLoop()

document.addEventListener("keydown", ({key}) => {
    if(key === "ArrowRight" && direction !== "left") direction = "right"
    else if(key === "ArrowLeft" && direction !== "right") direction = "left"
    else if(key === "ArrowUp" && direction !== "down") direction = "up"
    else if(key === "ArrowDown" && direction !== "up") direction = "down"
})