import React from 'react'
import { BOARD } from '../data'

const CELLS_X = BOARD.WIDTH
const CELLS_Y = BOARD.HEIGHT

const getCells = () => {
    let int = 1
    const rows = []
    for (let y = 0; y < CELLS_Y; y++){
        const cells = []
        for (let x = 0; x < CELLS_X; x++){
            cells.push(<div className='Cell' key={`${y}${x}`} id={int++}></div>)
        }
        rows.push(<div className='Row' key={y}>{cells}</div>)
    }
    return rows
}

const Board = () => (
    <div className='Board'>
        {getCells()}
    </div>
)

export default Board