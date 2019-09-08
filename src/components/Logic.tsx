import { BOARD, SNAKE } from '../data'
const MIN = 0
const WIDTHMAX = BOARD.WIDTH - 1
const HEIGHTMAX = BOARD.HEIGHT - 1

const coords = (position: string) => {
    const xcood = position.slice(0,2)
    const ycood = position.slice(2,4)
    return {xcood, ycood}
}

const direction = (input: string) => {
    const {xcood, ycood} = coords(SNAKE[SNAKE.length - 1])
    let x = parseInt(xcood); let y = parseInt(ycood)
    if (input === 'w') x = x - 1; 
    if (input === 's') x = x + 1;
    if (input === 'a') y = y - 1;
    if (input === 'd') y = y + 1;
    if (x >= MIN && x <= WIDTHMAX && y >= MIN && y <= HEIGHTMAX){
        const xStr = x.toString().padStart(2, '0')
        const yStr = y.toString().padStart(2, '0')
        SNAKE.push(xStr + yStr)
    }
}

const Logic = (input: string) => {
    direction(input)
    const square: HTMLElement | null = document.getElementById(SNAKE[SNAKE.length - 1])
    square.style.background = 'gray'
}

export default Logic 