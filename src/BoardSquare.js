import React from 'react'
import { useDrop } from 'react-dnd'
import { Square } from './Square'
import { canMove, move } from './Game'
import { ItemTypes } from './ItemTypes'
import { Overlay } from './Overlay'
export const BoardSquare = ({ x, y, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    canDrop: () => canMove(x, y),
    drop: () => move(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })
  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  )
}
