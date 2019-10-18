import { BOARD, SNAKE } from '../data'
const MIN = 0
const WIDTHMAX = BOARD.WIDTH - 1
const HEIGHTMAX = BOARD.HEIGHT - 1
let direction = ''

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

const engine = () => {
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
    const square: HTMLElement | null = document.getElementById(SNAKE[SNAKE.length - 1])
    square.style.background = 'gray'
    setTimeout(engine, 300)
}

const Logic = (input: string) => {
    engine()
    getDirection(input)
}

export default Logic 