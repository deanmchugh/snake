import ReactDOM from 'react-dom'
import React from 'react'

const Main = () => {
    return (
        <div className='MainPage'>
            <h1>Hello!</h1>
        </div>
    )
}

const container = document.getElementById('root')
ReactDOM.render(<Main />, container)