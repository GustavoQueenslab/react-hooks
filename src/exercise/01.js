// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function RenderMe() {

  return <p>hey :)</p>
}

function Greeting() {
const [text,setText] = React.useState('')
const getText = React.useRef(null)
function waitText() {
  setTimeout(()=>{
    setText(getText.current.value)
  },5000)
}
  React.useEffect(() => {
    console.log("text was updated: " + text)
  }, [text])
  return (
    <>
    <input ref={getText} onKeyUp={waitText}/>
      <RenderMe />
    </>
  )
}

function App() {
  return <Greeting />
}

export default App

//State: Means data that changes over the time
//When this state changes, the entire component will re-render
// const [name, setName] = React.useState('gustavo')
// function handleChange(event) {
//   setName(event.target.value)
// }
// return (
//   <div>
//     <form>
//       <label htmlFor="name">Name: </label>
//       <input onChange={handleChange} id="name" />
//     </form>
//     {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//   </div>
// )
