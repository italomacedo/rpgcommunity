import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

import { knightSide } from './Game';

import RPGCommunitySideToRotation from './utils/RPGCommunitySideRotationUtils';

function Hero(props) {
  var knightStyle = {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
    transform: `rotate(${RPGCommunitySideToRotation.sideToRotation(knightSide)})`
  }

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <>
      <DragPreviewImage connect={preview} src="./resources/hero.png" width="100%" height="100%" />
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <img src="./resources/hero.png" width="100%" height="100%" alt="Hero"/>
      </div>
    </>
  )
} export default Hero;
