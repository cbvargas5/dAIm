import WelcomeMsgBox from './components/WelcomeMsgBox'
import StoryThreadArea from './components/StoryThreadArea'
import PlayerTextInput from './components/PlayerTextInput'

const HomePage: React.FC = () => {
  return (
    <main className="w-screen h-screen bg-stone-800 flex flex-col justify-center items-center text-white">
      <WelcomeMsgBox />
      <StoryThreadArea />
      <PlayerTextInput />
    </main>
  )
}

export default HomePage
