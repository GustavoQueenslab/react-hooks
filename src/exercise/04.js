// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
function Board({onClick,squares}) {


  function renderSquare(i) {
    return (
      <button className="square" onClick={() => onClick(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>

      <div className="status">STATUS</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

    </div>
  )
}

function Game() {
  //Every time that you click in a button, this state will update and will save the actual array 
  //with the values of squares
  const [history, setHistory] = React.useState([Array(9).fill(null)])

  //Show the actual step of the game
  const [currentStep, setCurrentStep] = React.useState(0)
  //Show the actual value of the squares
  const currentSquares = history[currentStep]
  //Everytime that update it will calculate if there is a winner
  const winner = calculateWinner(currentSquares)
  //This is the triger that changes 'X' to 'O'
  const nextValue = calculateNextValue(currentSquares)
  //This calculate the status of the message that appear after the game end
  const status = calculateStatus(winner, currentSquares, nextValue)

  // Check all values
  // console.log({currentsquares:currentSquares})
  // console.log({currentStep:currentStep})
  // console.log({history:history})
  // console.log({winner:winner})
  // console.log({nextValue:nextValue})
  // console.log({status:status})

  function selectSquare(square) {
    //The prop square is the index of the square that was clicked
    // This function is called everytime after a click in a square
    if (winner || currentSquares[square]) {
      //This conditional checks if there is a winner or if the current square is already clicked
      // to disable the click in the square
      return
    }
    //Gets the copy of history from index 0 to the last clicked item
    const newHistory = history.slice(0, currentStep + 1)

    const squares = [...currentSquares]

    squares[square] = nextValue
    //Copy the new history array and add the current stares at end
    setHistory([...newHistory, squares])
    console.log(history)
    //Update the value of the current step according to the history length
    setCurrentStep(newHistory.length)
  }

  function restart() {
    //Clean the squares
    setHistory([Array(9).fill(null)])
    setCurrentStep(0)
  }

  const moves = history.map((stepSquares, step) => {

    const desc = step ? `Go to move #${step}` : 'Go to game start'
    const isCurrentStep = step === currentStep
    return (
      <li key={step}>
        <button disabled={isCurrentStep} onClick={() => setCurrentStep(step)}>
          {desc} {isCurrentStep ? 'current' : null}
        </button>
      </li>
    )
  })

  return (
    <div className="game">
    
      <div className="game-board">
        <Board onClick={selectSquare} squares={currentSquares} />
        <button className="restart" onClick={restart}>
          restart
        </button>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}







//These functions calculates the logic to the winner and the game


// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`
}
// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function App() {
  return <Game />
}

export default App