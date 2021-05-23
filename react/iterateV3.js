import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// create array
const data = [
  {
    food: 'Pizza',
    drink: 'Orange juice',
  },
  {
    food: 'Kebab',
    drink: 'Water',
  },
];

const words = ["Hello", "Hi"]
const newwords = words.map((word) => {
  return <h1>{word}</h1>
})
console.log(newwords)
function Iterate() {
  return (
    <div className='mylist'>
      {data.map((anitem) => {
        const {food, drink} = anitem
        console.log(anitem)
        return (
          <div>
            <h2>{food}</h2>
            <h2>{drink}</h2>
            <Item {...anitem}></Item>
          </div>

        )
      })}

    </div>
  )
}

const Item = (props) => {
  const {food, drink} = props
  return <p>{food} and {drink}</p>
}

ReactDom.render(<Iterate />, document.getElementById('root'))
