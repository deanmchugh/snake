import { BOARD, SNAKE } from '../data'
let direction = ''
let length = 5
let FOOD = 0
let started = new Boolean(false)

function getDirection(input: string) {
    if (input === 'w') direction = 'up'
    if (input === 's') direction = 'down'
    if (input === 'a') direction = 'left'
    if (input === 'd') direction = 'right'
    if (input === ' ') direction = 'pause'
}

function setSquare(square: number, color: string) {
    return new Promise((res, rej) => {
        const stSquare = square.toString()
        const selectSquare: HTMLElement | null = document.getElementById(stSquare)
        if (selectSquare) {
            selectSquare.style.background = color
            res()
        }
    })
}

function setFood() {
    if (!FOOD || SNAKE.includes(FOOD)) {
        const newLocation = Math.floor(Math.random() * (BOARD.WIDTH * BOARD.HEIGHT))
        FOOD = newLocation
        setSquare(FOOD, 'red')
        length = length + 5
    }
}

function drawSnake() {
    setSquare(SNAKE[0], 'blue')
    setSquare(SNAKE[SNAKE.length - 1], 'gray')
}

function engine() {
    started = true
    if (direction !== 'pause') {
        let snakeHead = SNAKE[SNAKE.length - 1]
        if (direction === 'up') 1 <= snakeHead && snakeHead <= BOARD.WIDTH ? 
            snakeHead = snakeHead + 2450 : snakeHead = snakeHead - 50
        else if (direction === 'down') 2451 <= snakeHead && snakeHead <= 2500 ? 
            snakeHead = snakeHead - 2450 : snakeHead = snakeHead + 50
        else if (direction === 'left') snakeHead % 50 === 0 + 1 ? 
            snakeHead = snakeHead + 49 : snakeHead = snakeHead - 1
        else if (direction === 'right') snakeHead % 50 === 0 ? 
            snakeHead = snakeHead - 49 : snakeHead = snakeHead + 1
        if (snakeHead < (BOARD.WIDTH * BOARD.HEIGHT)){
            SNAKE.push(snakeHead)
        }
        if (SNAKE.length === length) SNAKE.shift()
        drawSnake()
        setFood()
        setTimeout(engine, 1000)
    }
    
}

function history() {

}

const Logic = (input: string) => {
    if (started) engine()
    getDirection(input)
}

export default Logic 