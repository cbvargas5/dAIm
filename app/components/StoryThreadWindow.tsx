'use client'
import { useState } from 'react'
import PlayerTextInput from './PlayerTextInput'
import { useChat } from 'ai/react'
import { ACTIVE_STORY_ENDPOINT } from '@/utils/constants/api-routes'
import { HumanMessage } from '@langchain/core/messages'
import WelcomeMsgBox from './WelcomeMsgBox'

interface StoryThreadMessage {
  role: 'Human' | 'AI'
  content: string
}

const StoryThreadArea: React.FC = () => {
  const initialState = {
    storyThread: [] as StoryThreadMessage[],
    newPlayerMessage: '',
    isLoading: false,
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
      isLoading: true,
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
          isLoading: false,
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
    <div className="max-w-[600px] mx-auto flex flex-col h-full justify-between px-4 py-2">
      <div className="overflow-auto px-4 py-2 mb-4">
        {state.storyThread.length ? (
          state.storyThread.map((threadMessage, idx) => (
            <div key={idx} className="py-3">
              <span className="font-bold opacity-60">
                {threadMessage?.role}:
              </span>{' '}
              {threadMessage?.content}
            </div>
          ))
        ) : (
          <WelcomeMsgBox />
        )}

        {state.isLoading && (
          <div className="my-5 p-4">
            <svg
              className="animate-spin h-5 w-5 text-gray-500 mx-auto mt-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6H6c0 3.309 2.691 6 6 6z"
              ></path>
            </svg>
          </div>
        )}
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
