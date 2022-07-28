// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({animal,onAnimalChange}) {
  // 💣 delete this, it's now managed by the App

  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// 🐨 uncomment this
function Display({name, animal}) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}


function App() {
  // 🐨 add a useState for the animal
  const [name, setName] = React.useState('')
  const [animal,setAnimal]=React.useState('')
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal name={animal} onAnimalChange={event=>setAnimal(event.target.value)}/>
      {/* 🐨 pass the animal prop here */}
      <Display name={name} animal={animal} />
    </form>
  )
}

export default App

















//Lift up state checkbox

//  import * as React from 'react'

// function Checkbox({checkbox, onCheckboxChange}) {
//   return (
//     <div>
//       <label htmlFor="name">Product: </label>
//       <input type="checkbox"  onChange={onCheckboxChange} />
//     </div>
//   )
// }
// function handleCheckbox(value,setCheckboxValidation, evt, checkboxId) {
//   //if there is more than one product the message must appear
//   //if there isn't any selected product the message should be hidden
//   //The message just appear if checkboxValidation = true
//   const isChecked = evt.target.checked

//     setCheckboxValidation(prev => isChecked ? [...prev, checkboxId] : prev.filter(c=>c !== checkboxId))
// }

// function App() {
// const [checkboxValidation,setCheckboxValidation] = React.useState([])
// React.useEffect(() => {
//   console.log(checkboxValidation)
// }, [checkboxValidation]);
//   return(
//     <>
//       <Checkbox onCheckboxChange={(e)=>handleCheckbox(checkboxValidation,setCheckboxValidation,e,1)}/>
//       <Checkbox onCheckboxChange={(e)=>handleCheckbox(checkboxValidation,setCheckboxValidation,e,2)}/>
//       <Checkbox onCheckboxChange={(e)=>handleCheckbox(checkboxValidation,setCheckboxValidation,e,3)}/>
//       <Checkbox onCheckboxChange={(e)=>handleCheckbox(checkboxValidation,setCheckboxValidation,e,4)}/>
//       {Boolean(checkboxValidation.length) && (
//           <p>
//             is clicked
//           </p>
//         )
//       }
//     </>
//   )
// }
// export default App