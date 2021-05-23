import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

//props
const text = {
  moretext: "var text",
  evenmore:"var text2"
} 
function UsingProps() {
  return (
    <>
      <Header header="myHeader" />
      <SomeText text1="c1 some Text"/>
      <SomeText text1="c2 some Text" text3="c2 more Text"/>
      <SomeText2><p>child element</p></SomeText2>
      <SomeText txt={text.moretext} />
      
    </>
  ) 
}
const Header = (props) => <h2>{props.header}</h2>
const SomeText = (props) => {
  // destructure way1 props so can access without typing 'props.' every time
  const {txt, text1} = props
  return (
    <>
      <p className="box">{text1}</p>
      <p className="box">{props.text3}</p>
      <p className="box">{props.text15}</p>
      <p className="box">{txt}</p>
    </>
  )
}
  // destructure way2 props so can access without typing 'props.' every time
const SomeText2 = ({ text1, txt, text3, children }) => {
  return (
    <>
      <p className="box">{text1}</p>
      <p className="box">{text3}</p>
      <p className="box">{txt}</p>
      {children}
    </>
  )
}

ReactDom.render(<UsingProps />, document.getElementById('root'))
