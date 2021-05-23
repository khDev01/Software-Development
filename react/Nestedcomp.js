import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// Nested components
function Nesting(){
  return (
    <div>
      <Childel />
      <Message />
      <Message />
    </div>
  )
}

const Childel = () => <h2>Nested component</h2>
const Message = () => {
  const text = 'my text'
  return (
    <>
      <p>Nesting</p>
      {/* include js */}
      <p>{text.toUpperCase()}</p>
    </>
  )
}

ReactDom.render(<Nesting />, document.getElementById('root'))





