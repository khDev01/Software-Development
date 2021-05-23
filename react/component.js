import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// stateless functional component
// return jsx or null only
function Component1(){
  return <h1>My component</h1>
}

// use <React.Fragment> or simplified <> to enclose many elements without div
function Component2(){
  return (
    <>
      <h1>component2</h1>
    </>
  )
}

ReactDom.render(<component1 />, document.getElementById('root'))




