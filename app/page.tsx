import WelcomeMsgBox from './components/WelcomeMsgBox'
import StoryThreadArea from './components/StoryThreadArea'
import PlayerTextInput from './components/PlayerTextInput'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'

const links = [
  { href: '/', label: 'New Story' },
  { href: '/', label: 'DAIM RPG' },
  { href: '/sign-in', label: 'Login' },
  { href: '/sign-up', label: 'Sign Up' },
]

const HomePage: React.FC = async () => {
  //will use userId to render either text input or apikey
  const { userId } = await auth()
  return (
    <>
      <header className="w-screen bg-stone-900 text-white">
        <nav>
          <ul className="flex items-center justify-between">
            {links.map(({ href, label }, idx) => (
              <li key={idx}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="w-screen h-screen bg-stone-800 flex flex-col justify-center items-center text-white">
        <WelcomeMsgBox />
        <StoryThreadArea />
        <PlayerTextInput />
      </main>
    </>
  )
}

export default HomePage
