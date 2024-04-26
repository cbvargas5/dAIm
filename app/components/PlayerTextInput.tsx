'use client'
import { ACTIVE_STORY_ENDPOINT } from '@/utils/constants/api-routes'
import { useState } from 'react'

// interface State {
//   userInputText: string
// }

interface Props {
  textInputValue: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const PlayerTextInput: React.FC<Props> = ({
  textInputValue,
  handleInputChange,
  handleSubmit,
}) => {
  // const initialState: State = {
  //   userInputText: '',
  // }
  // const [state, setState] = useState<State>(initialState)

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center border border-gray-300 rounded-lg">
        <textarea
          className="flex-grow p-2 bg-transparent resize-none focus:outline-none"
          placeholder="Message your DM"
          onChange={handleInputChange}
          value={textInputValue}
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default PlayerTextInput
