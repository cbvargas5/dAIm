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
      <textarea
        className="text-black"
        placeholder="Message your DM"
        onChange={handleInputChange}
        value={textInputValue}
      />
      {/* to do: change to icon */}
      <button type="submit">Submit</button>
    </form>
    // <form onSubmit={handleSubmitText}>
    //   <textarea
    //     className="text-black"
    //     placeholder="Message your DM"
    //     onChange={handleInputChange}
    //     value={state.userInputText}
    //   />
    //   {/* to do: change to icon */}
    //   <button type="submit">Submit</button>
    // </form>
  )
}

export default PlayerTextInput
