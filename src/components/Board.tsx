import React from 'react'

const CELLS_X = 100
const CELLS_Y = 100

const getCells = () => {
    const rows = []
    for (let y = 0; y < CELLS_Y; y++){
        const cells = []
        for (let x = 0; x < CELLS_X; x++){
            cells.push(<div className='Cell' key={`${y}${x}`}></div>)
        }
        rows.push(<div>{cells}</div>)
    }
    return rows
}

const Board = () => (
    <div className='Board'>
        {getCells()}
    </div>
)

export default Board