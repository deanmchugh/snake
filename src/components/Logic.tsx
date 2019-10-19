import { BOARD, SNAKE } from '../data'
const MIN = 0
const WIDTHMAX = BOARD.WIDTH - 1
const HEIGHTMAX = BOARD.HEIGHT - 1
let direction = ''
let length = 5
let FOOD = ''

const coords = (position: string) => {
    const xcood = position.slice(0,2)
    const ycood = position.slice(2,4)
    return {xcood, ycood}
}

const getDirection = (input: string) => {
    if (input === 'w') direction = 'up'; 
    if (input === 's') direction = 'down';
    if (input === 'a') direction = 'left';
    if (input === 'd') direction = 'right';
}

const setSquare = (square: string, color: string) => {
    const selectSquare: HTMLElement | null = document.getElementById(square)
    selectSquare.style.background = color
}

const setFood = () => {
    if (!FOOD || SNAKE.includes(FOOD)) {
        const x = Math.floor(Math.random() * WIDTHMAX).toString().padStart(2, '0')
        const y = Math.floor(Math.random() * HEIGHTMAX).toString().padStart(2, '0')
        FOOD = `${x}${y}`
        setSquare(FOOD, 'red')
        length = length + 5
    }
    setTimeout(drawSnake, 900)
}

const drawSnake = () => {
    setSquare(SNAKE[0], 'blue')
    setSquare(SNAKE[SNAKE.length - 1], 'gray')
    setTimeout(drawSnake, 1000)
}

const createSnake = () => {
    const {xcood, ycood} = coords(SNAKE[SNAKE.length - 1])
    let x = parseInt(xcood); let y = parseInt(ycood)
    if (direction === 'up') x = x - 1; 
    if (direction === 'down') x = x + 1;
    if (direction === 'left') y = y - 1;
    if (direction === 'right') y = y + 1;
    if (x >= MIN && x <= WIDTHMAX && y >= MIN && y <= HEIGHTMAX){
        const xStr = x.toString().padStart(2, '0')
        const yStr = y.toString().padStart(2, '0')
        SNAKE.push(xStr + yStr)
    }
    if (SNAKE.length === length) SNAKE.shift()
    setTimeout(createSnake, 1000)
}

const Logic = (input: string) => {
    createSnake()
    drawSnake()
    setFood()
    getDirection(input)
}

export default Logic 