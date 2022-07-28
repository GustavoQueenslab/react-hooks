// // useEffect: persistent state
// // http://localhost:3000/isolated/exercise/02.js

// import * as React from 'react'

// function Greeting({initialName = ''}) {
//   const [name, setName] = React.useState(
//     window.localStorage.getItem('name') ?? initialName,
//   )
//   React.useEffect(() => {
//     //Every time that this component update, this use effect will be re-rendered. This isn't a good thing
//     //because can have huge problems like if there is a fetch inside here.
//     window.localStorage.setItem('name', name)
//   })

//   function handleChange(event) {
//     setName(event.target.value)
//   }

//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// function App() {
//   return <Greeting />
// }

// export default App


// Exercise 2

// import * as React from 'react'

// function Greeting({initialName = ''}) {
//   const [name, setName] = React.useState(
//     window.localStorage.getItem('name') ?? initialName,
//   )
//   React.useEffect(() => {
//     window.localStorage.setItem('name', name)
//     //Here this effect will happen just when the name changes.
//   },[name])

//   function handleChange(event) {
//     setName(event.target.value)
//   }

//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// function App() {
//   return <Greeting />
// }

// export default App




//Exercise 3

// import * as React from 'react'

// function useLocalStorageState(item, defaultValue = '') {
//   const [state, setState] = React.useState(
//     //Here it's using the nullish operator. This operator checks if the first
//     //value is null and if it's true return the second condition.
//     () => window.localStorage.getItem(item) ?? defaultValue,
//   )
//   React.useEffect(() => {
//     window.localStorage.setItem(item, state)
//   }, [item, state])

//   return [state, setState]
// }

// function Greeting() {
//   const [name, setName] = useLocalStorageState('name', '')

//   function handleChange(evt) {
//     setName(evt.target.value)
//   }

//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={(e)=>handleChange(e)} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// function App() {
//   return <Greeting />
// }

// export default App


//Exercise 4: study refs first


//Lazy initialization test



import * as React from 'react'

function Greeting({initialName = ''}) {
    console.log("updated")
    const getInitialValue=()=> {
        console.log("initializated")
        return window.localStorage.getItem('name') || initialName
    }
  const [name, setName] = React.useState(getInitialValue)
  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  })

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App

