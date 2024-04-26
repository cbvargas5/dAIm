'use client'
import { useState } from 'react'
import PlayerTextInput from './PlayerTextInput'
import { useChat } from 'ai/react'
import { ACTIVE_STORY_ENDPOINT } from '@/utils/constants/api-routes'

const StoryThreadArea: React.FC = () => {
  // const { messages, input, handleInputChange, handleSubmit } = useChat({
  //   api: ACTIVE_STORY_ENDPOINT,
  //   onError: (err) => {
  //     console.log('error: ', err)
  //   },
  // })
  const initialState = {
    storyThread: [],
    newPlayerMessage: '',
  }

  const [state, setState] = useState(initialState)

  const sendInputToAi = async (userInput: string) => {
    const formData = {
      newPlayerMessage: userInput,
    }
    fetch(ACTIVE_STORY_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data): void => {
        console.log(data)
      })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendInputToAi(state.newPlayerMessage)
    setState(initialState)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState((prevState) => ({
      ...prevState,
      newPlayerMessage: e.target.value,
    }))
  }

  return (
    <div>
      {/* {messages.map((m) => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))} */}
      <PlayerTextInput
        textInputValue={state.newPlayerMessage}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default StoryThreadArea
