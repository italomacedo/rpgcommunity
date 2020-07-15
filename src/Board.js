import React from 'react'
import { BoardSquare } from './BoardSquare'
import { createToken } from './TokenFactory';

const boardStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
}

export const Board = ({ state, boardSize, map }) => {
    const squareStyle = { width: (100 / boardSize) + '%', height: (100 / boardSize) + '%' }

    function renderSquare(i) {
        const x = i % boardSize
        const y = Math.floor(i / boardSize)

        return (
            <div key={i} style={squareStyle}>
                <BoardSquare x={x} y={y} type={map[i]}>
                    {renderPiece(x, y)}
                </BoardSquare>
            </div>
        )
    }

    function renderPiece(x, y) {
        for(var i = 0; i < state.length; i++) {
            if(state[i].position[0] === x && state[i].position[1] === y) {
                return createToken([x,y], state[i].side, state[i].tokenType);
            }
        }
    }

    const squares = []

    for (let i = 0; i < Math.pow(boardSize, 2); i += 1) {
        squares.push(renderSquare(i))
    }

    return <div style={boardStyle}>{squares}</div>
}
