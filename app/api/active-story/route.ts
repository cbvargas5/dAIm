import { NextRequest, NextResponse } from 'next/server'
import { AIMessage, HumanMessage } from '@langchain/core/messages'
import { sendMessageToAi } from '@/utils/ai'

interface StoryThreadMessage {
  role: 'Human' | 'AI'
  content: string
}

const formatMessageForLangChain = (message: StoryThreadMessage) => {
  return message.role === 'Human'
    ? new HumanMessage(message.content)
    : new AIMessage(message.content)
}

export const POST = async (req: NextRequest) => {
  const { newPlayerMessage, storyThread } = await req.json()
  const formattedPlayerMessage = new HumanMessage(newPlayerMessage)
  const formattedThread = storyThread.map(formatMessageForLangChain)

  const aiResponse = await sendMessageToAi([
    ...formattedThread,
    formattedPlayerMessage,
  ])

  const dataToSend = {
    aiResponseText: aiResponse.content,
    fullResponseObject: aiResponse,
  }
  return NextResponse.json({ data: dataToSend })
}
