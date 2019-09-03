import React from 'react'
import ReactDOM from 'react-dom'

import Board from './components/Board'
import Header from './components/Header'

const Main = () => {
    return (
        <div className='MainPage'>
            <Header />
            <Board />
        </div>
    )
}

const container = document.getElementById("root")
ReactDOM.render(<Main />, container)