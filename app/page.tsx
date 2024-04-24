import React from 'react'
import WelcomeMsgBox from './components/WelcomeMsgBox'
import StoryThreadArea from './components/StoryThreadArea'
import PlayerTextInput from './components/PlayerTextInput'

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-stone-800 flex flex-col justify-center items-center text-white">
      <WelcomeMsgBox />
      <StoryThreadArea />
      <PlayerTextInput />
    </div>
  )
}

export default Home
