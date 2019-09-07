let snake = ['2525']

const coords = (position: string) => {
    const xcood = position.slice(0,2)
    const ycood = position.slice(2,4)
    return {xcood, ycood}
}

const direction = (input: string) => {
    const {xcood, ycood} = coords(snake[snake.length - 1])
    let x = parseInt(xcood); let y = parseInt(ycood)
    if (input === 'w') x = x - 1; 
    if (input === 's') x = x + 1;
    if (input === 'a') y = y - 1;
    if (input === 'd') y = y + 1;
    const xStr = x.toString().padStart(2, '0')
    const yStr = y.toString().padStart(2, '0')
    snake.push(xStr + yStr)
}

const Logic = (input: string) => {
    direction(input)
    const square: HTMLElement | null = document.getElementById(snake[snake.length - 1])
    square.style.background = 'gray'
}

export default Logic 