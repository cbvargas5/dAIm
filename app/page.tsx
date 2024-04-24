import React from 'react'
import WelcomeMsgBox from './components/WelcomeMsgBox'
import StoryThreadArea from './components/StoryThreadArea'
import PlayerTextInput from './components/PlayerTextInput'

const Home: React.FC = () => {
  return (
    <div>
      <WelcomeMsgBox />
      <StoryThreadArea />
      <PlayerTextInput />
    </div>
  )
}

export default Home
