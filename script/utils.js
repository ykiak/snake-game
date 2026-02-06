let utilMultiples = []
for(let i = 0; i < 600; i += 30){
    utilMultiples.push(i)
}

let utilColorIndex = []
for(let j = 0; j <= 255; j++){
    utilColorIndex.push(j)
}

export const multiples = utilMultiples
export const colorIndex = utilColorIndex 

export const getRandomNumber = (arr) => {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}