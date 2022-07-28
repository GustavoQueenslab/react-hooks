// http://localhost:3000/isolated/exercise/05.js

//Ref is a a way to access DOM nodes. Ref always returns an object called current.
//We can check every property of dom node using ref. useRef is used every time you want to maintain 
//a reference to something and you want to be able to make changes without re-render. If we want to 
//trigger a re-render it's better use useState

import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {

  // Kent c dods exercise

  const tiltRef = React.useRef()
  React.useEffect(()=>{
      const tiltNode = tiltRef.current
  VanillaTilt.init(tiltNode, {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5,
  })
  })
  return (
    <div ref={tiltRef} className="tilt-root" >
      <div className="tilt-child" >{children}</div>
    </div>
  )




// 1 case: Count re-renders

// const [countRender, setCountRender] = React.useState(0);
// const count = React.useRef(0);
// React.useEffect(() => {
//   //if we update the state here it's going to enter in an infinite loop because
//   // usse effect is called every time that the component update. So to count how many time
//   // a component will re-render we should use useRef because it persist between re-renders
//   count.current = count.current + 1;

//   // NEVER DO THIS !!
//   // setCountRender(countRender+1)
// });

// return (
//   <>
//     <button onClick={()=>setCountRender(countRender +1)}>Re-render me</button>
//     <h1>Render Count: {count.current}</h1>
//   </>
// );



// 2 case: Access element and change properties

// const myInput = React.useRef(null);
// return (
//   <>
//     <button onClick={()=>myInput.current.focus()}>Focus me</button>
//     <input ref={myInput} type="text"/>
//   </>
// );



// 3 case: Store old value   <-- Didn't understand very well

// const [name, setName] = React.useState('Gustavo')
// const previousName = React.useRef(name)

// React.useEffect(() => {
//   previousName.current = name
// }, [name])

// return (
//   <>
//     <input onChange={e => setName(e.target.value)} />
//     <div>My name is  {name}  and it used to be {previousName.current} </div>
//   </>
// )

}

function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}

export default App
