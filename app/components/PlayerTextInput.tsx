'use client'
import { useState } from 'react'

interface State {
  userInputText: string
}

const PlayerTextInput: React.FC = () => {
  const initialState: State = {
    userInputText: '',
  }
  const [state, setState] = useState<State>(initialState)

  const handleSubmitText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState(initialState)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState((prevState: State) => ({
      ...prevState,
      userInputText: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmitText}>
      <textarea
        className="text-black"
        placeholder="Message your DM"
        onChange={handleInputChange}
        value={state.userInputText}
      />
      {/* to do: change to icon */}
      <button type="submit">Submit</button>
    </form>
  )
}

export default PlayerTextInput
