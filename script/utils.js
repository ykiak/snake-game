const canvas = document.querySelector("canvas")
const size = 30

let multiples = []
for(let i = 0; i < canvas.width; i += size){
    multiples.push(i)
}

let colorIndex = []
for(let j = 0; j <= 255; j++){
    colorIndex.push(j)
}

const randomNumber = (arr) => {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

export const randomPosition = () => {
    const position = randomNumber(multiples)
    
    return position
}

export const randomColor = () => {
    const red = randomNumber(colorIndex)
    const green = randomNumber(colorIndex)
    const blue = randomNumber(colorIndex)

    return {red, green, blue}
}