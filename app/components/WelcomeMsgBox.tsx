import React from 'react'

const WelcomeMsgBox: React.FC = () => {
  return (
    <div className="w-full max-w-[600px] mx-auto">
      <h1 className="text-xl mb-4">Welcome to DAIM: Your Adventure Awaits!</h1>
      <p className="text-lg text-white/60 mb-4">
        Welcome aboard DAIM—the ultimate playground for narrative enthusiasts!
        Dive into realms shaped by your choices, guided by an AI Dungeon Master.
        Each decision crafts your unique adventure in a world where no two
        stories are the same. Ready to steer your saga? Explore the endless
        possibilities with DAIM, where legends come alive. Join us and forge
        your path to glory!
      </p>
    </div>
  )
}

export default WelcomeMsgBox
