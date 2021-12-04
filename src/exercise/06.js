// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [name, setName] = React.useState('')
  const inputRef = React.useRef()
  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(name.toLowerCase())
    //onSubmitUsername(e.target.elements.username.value)
    // e.target.elements[0].value
    // e.target.elements.inputIdOrName.value
    // inputRef.current.value
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={inputRef}
          type="text"
          name="username"
          id="username"
          value={name}
          onChange={e => setName(e.target.value)}
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
