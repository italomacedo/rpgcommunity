import React, { useState, useEffect } from 'react'
import { Board } from './Board'
import { observe } from './Game'
import MapTypes from './MapTypes'
import { knightPosition } from './Game';

const boardSizeConf = 8;

const containerStyle = {
  width: 62*boardSizeConf+'px',
  height: 62*boardSizeConf+'px',
  border: '1px solid gray',
}

const scenarioMap =
  [
    MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,
    MapTypes.FLOOR_GRASS,MapTypes.FLOOR_GRASS,MapTypes.FLOOR_GRASS,MapTypes.FLOOR_GRASS,MapTypes.FLOOR_GRASS,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,
    MapTypes.FLOOR_SAND,MapTypes.FLOOR_SAND,MapTypes.FLOOR_SAND,MapTypes.FLOOR_SAND,MapTypes.FLOOR_SAND,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,
    MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,
    MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,
    MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.FLOOR_STONE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,
    MapTypes.FLOOR_SAND,MapTypes.FLOOR_SAND,MapTypes.FLOOR_SAND,MapTypes.FLOOR_SAND,MapTypes.FLOOR_SAND,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,
    MapTypes.FLOOR_GRASS,MapTypes.FLOOR_GRASS,MapTypes.FLOOR_GRASS,MapTypes.FLOOR_GRASS,MapTypes.FLOOR_GRASS,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,
    MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,MapTypes.WALL_TREE,
  ]
/**
 * The Chessboard Tutorial Application
 */
function MainView() {
  const [knightPos, setKnightPos] = useState(knightPosition)
  // the observe function will return an unsubscribe callback
  useEffect(() => observe((newPos) => setKnightPos(newPos)))
  return (
    <div>
      <div style={containerStyle}>
        <Board boardSize={boardSizeConf} knightPosition={knightPos} map={scenarioMap}/>
      </div>
    </div>
  )
}
export default MainView

