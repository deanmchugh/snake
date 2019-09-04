let snake = [2525]

const coords = (position: number) => {
    const pos = position.toString()
    const xcood = parseInt(pos.slice(0,2))
    const ycood = parseInt(pos.slice(2,4))
    return {xcood, ycood}
}

const direction = (input: string) => {
    let {xcood, ycood} = coords(snake[snake.length - 1])
    if (input === 'w') xcood = xcood - 1; 
    if (input === 's') xcood = xcood + 1;
    if (input === 'a') ycood = ycood - 1;
    if (input === 'd') ycood = ycood + 1;
    snake.push(parseInt(xcood + '' + ycood))
}

const Logic = (input: string) => {
    direction(input)
    console.log(snake)
    const square = document.getElementById(snake[snake.length - 1].toString())
    square.style.background = 'gray'
}

export default Logic 