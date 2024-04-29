import StoryThreadWindow from './components/StoryThreadWindow'
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
      <header className="bg-stone-900 text-white py-4">
        <nav>
          <ul className="flex items-center justify-between px-4">
            {links.map(({ href, label }, idx) => (
              <li key={idx}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className=" flex flex-col justify-between h-full overflow-hidden items-center text-white py-4">
        <StoryThreadWindow />
      </main>
    </>
  )
}

export default HomePage
