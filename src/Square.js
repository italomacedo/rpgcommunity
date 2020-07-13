import React from 'react'

export const Square = ({ type, children }) => {
  const squareStyle = {
    width: '100%',
    height: '100%',
    border: '1px solid gray',
    backgroundImage: `url(${"./resources/"+type+".png"})`
  }

  return (
    <div
      style={{
        ...squareStyle
      }}
    >
      {children}
    </div>
  )
}
