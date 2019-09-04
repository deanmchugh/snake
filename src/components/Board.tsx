import React from 'react'

const CELLS_X = 50
const CELLS_Y = 50

const getCells = () => {
    const rows = []
    for (let y = 0; y < CELLS_Y; y++){
        const cells = []
        for (let x = 0; x < CELLS_X; x++){
            cells.push(<div className='Cell' key={`${y}${x}`} id={`${y.toString().padStart(2, '0')}${x.toString().padStart(2, '0')}`}></div>)
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