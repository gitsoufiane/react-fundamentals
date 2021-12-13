// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({color, size, children, ...rest}) {
  return (
    <div
      className={`box box--${size}`}
      style={{backgroundColor: color, fontStyle: 'italic'}}
      {...rest}
    >
      {children}
    </div>
  )
}
const smallBox = (
  <Box size="small" color="lightblue">
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" color="pink">
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" color="orange">
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
