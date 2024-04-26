'use client'
import { useState } from 'react'
import PlayerTextInput from './PlayerTextInput'
import { useChat } from 'ai/react'
import { ACTIVE_STORY_ENDPOINT } from '@/utils/constants/api-routes'
import { HumanMessage } from '@langchain/core/messages'

interface StoryThreadMessage {
  role: 'Human' | 'AI'
  content: string
}

const StoryThreadArea: React.FC = () => {
  // const { messages, input, handleInputChange, handleSubmit } = useChat({
  //   api: ACTIVE_STORY_ENDPOINT,
  //   onError: (err) => {
  //     console.log('error: ', err)
  //   },
  // })
  const initialState = {
    storyThread: [] as StoryThreadMessage[],
    newPlayerMessage: '',
  }

  const [state, setState] = useState(initialState)

  const sendInputToAi = async (userInput: string) => {
    const formData = {
      newPlayerMessage: userInput,
      storyThread: state.storyThread,
    }
    setState((prevState) => ({
      ...prevState,
      storyThread: [
        ...prevState.storyThread,
        { role: 'Human', content: userInput },
      ],
      newPlayerMessage: '',
    }))

    fetch(ACTIVE_STORY_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(({ data }): void => {
        setState((prevState) => ({
          ...prevState,
          storyThread: [...prevState.storyThread, data.aiResponseMessage],
          // aiResponseMessage
        }))
      })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendInputToAi(state.newPlayerMessage)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState((prevState) => ({
      ...prevState,
      newPlayerMessage: e.target.value,
    }))
  }
  return (
    <div className="w-full max-w-[600px] mx-auto h-screen flex flex-col justify-between">
      <div className="overflow-y-auto">
        {state.storyThread.map((threadMessage, idx) => (
          <div key={idx} className="border-b-2 border-gray-300 mb-3 py-3">
            <span className="font-bold opacity-60">{threadMessage?.role}:</span>{' '}
            {threadMessage?.content}
          </div>
        ))}
      </div>
      <PlayerTextInput
        textInputValue={state.newPlayerMessage}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default StoryThreadArea
