// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


function Counter({initialCount = 0, step = 1}) {
  // Exercise
  /*
  const countReducer = (state, newState) => newState
  const [count, setCount] = React.useReducer(countReducer, initialCount)
  const increment = () => setCount(count + step)
  */

  // Extra 1
  /*
  const countReducer = (count, step) => count + step
  const [count, changeCount] = React.useReducer(countReducer, initialCount)
  const increment = () => changeCount(step)
  */

  // Extra 2
  /*
  const countReducer = (state, action) => ({...state, ...action})
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const { count } = state
  const increment = () => setState({count: count + step})
  */

  // Extra 3
  /*
  const countReducer = (state, action) => ({
    ...state,
    ...(typeof action === 'function' ? action(state) : action)
  })
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const { count } = state
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))
  */

  // Extra 4
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + action.step }
      default : {
        throw new Error('Error in action')
      }
    }
  }
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const { count } = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
