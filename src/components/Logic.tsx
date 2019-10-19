import { BOARD, SNAKE } from '../data'
let direction = ''
let length = 5
let FOOD = 0

const getDirection = (input: string) => {
    if (input === 'w') direction = 'up'; 
    if (input === 's') direction = 'down';
    if (input === 'a') direction = 'left';
    if (input === 'd') direction = 'right';
}

const setSquare = (square: number, color: string) => {
    const stSquare = square.toString()
    const selectSquare: HTMLElement | null = document.getElementById(stSquare)
    selectSquare.style.background = color
}

const setFood = () => {
    if (!FOOD || SNAKE.includes(FOOD)) {
        const newLocation = Math.floor(Math.random() * (BOARD.WIDTH * BOARD.HEIGHT))
        FOOD = newLocation
        setSquare(FOOD, 'red')
        length = length + 5
    }
}

const drawSnake = () => {
    setSquare(SNAKE[0], 'blue')
    setSquare(SNAKE[SNAKE.length - 1], 'gray')
}

const engine = () => {
    let snakeHead = SNAKE[SNAKE.length - 1]
    if (direction === 'up') snakeHead = snakeHead - 50; 
    else if (direction === 'down') snakeHead = snakeHead + 50;
    else if (direction === 'left') snakeHead = snakeHead - 1;
    else if (direction === 'right') snakeHead = snakeHead + 1;
    if (snakeHead < (BOARD.WIDTH * BOARD.HEIGHT)){
        SNAKE.push(snakeHead)
    }
    if (SNAKE.length === length) SNAKE.shift()
    drawSnake()
    setFood()
    setTimeout(engine, 1000)
}

const Logic = (input: string) => {
    engine()
    getDirection(input)
}

export default Logic 