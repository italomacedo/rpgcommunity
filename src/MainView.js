import React, { useState, useEffect } from 'react'
import { Board } from './Board'
import { currentState, observe, map, boardSize } from './Game'

const containerStyle = {
  width: 62 * boardSize + 'px',
  height: 62 * boardSize + 'px',
  border: '1px solid gray',
}


/**
 * The Chessboard Tutorial Application
 */
function MainView() {
  const [state, setState] = useState(currentState)

  useEffect(() => {
    observe((newState) => {
      setState(newState)
    });
  });

return (
  <div>
    <div style={containerStyle}>
      <Board state={state} boardSize={boardSize} map={map} />
    </div>
  </div>
)
}
export default MainView

