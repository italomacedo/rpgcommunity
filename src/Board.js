import React from 'react'
import { BoardSquare } from './BoardSquare'
import Hero from './Hero'
/** Styling properties applied to the board element */
const boardStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
}

/**
 * The chessboard component
 * @param props The react props
 */
export const Board = ({ boardSize, knightPosition: [knightX, knightY], map }) => {
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
        const isKnightHere = x === knightX && y === knightY

        if(isKnightHere) {
            return <Hero/>;
        } else {
            return null;
        }
    }

    const squares = []

    for (let i = 0; i < Math.pow(boardSize, 2); i += 1) {
        squares.push(renderSquare(i))
    }

    return <div style={boardStyle}>{squares}</div>
}
