// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()

  const [inputValue, setInputValue] = React.useState('')
  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(e.target.elements[0].value)
  }

  const changeInputHandler = e => {
    setInputValue(e.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={inputValue}
          onChange={changeInputHandler}
          id="username"
          ref={inputRef}
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
