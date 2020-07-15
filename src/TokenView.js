import React, {useState} from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import RPGCommunitySideToRotation from './utils/RPGCommunitySideRotationUtils';

function TokenView(props) {
  const [tokenImage, setTokenImage] = useState(props.tokenImage)
  const [type, setType] = useState(props.type);
  const [side,setSide] = useState(props.side);

  var knightStyle = {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
    transform: `rotate(${RPGCommunitySideToRotation.sideToRotation(side)})`
  }

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: "token" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <>
      <DragPreviewImage connect={preview} src={tokenImage} width="100%" height="100%" />
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <img src={tokenImage} width="100%" height="100%" alt="Hero"/>
      </div>
    </>
  )
} export default TokenView;
