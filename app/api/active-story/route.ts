import { NextRequest, NextResponse } from 'next/server'
// import {
//   StreamingTextResponse,
//   LangChainStream,
//   Message as VercelChatMessage,
//   StreamData,
// } from 'ai'

// import { ChatOpenAI } from '@langchain/openai'
// import { AIMessage, HumanMessage } from 'langchain/schema'
// import { SAMPLE_TEMPLATE } from '@/utils/constants/prompt-templates'

// import { ChatOpenAI } from '@langchain/openai'
import { sendMessageToAi } from '@/utils/ai'
// import { BytesOutputParser } from 'langchain/schema/output_parser'
// import { PromptTemplate } from 'langchain/prompts'

// export const dynamic = 'force-dynamic'

// const formatMessage = (message: VercelChatMessage) => {
//   return `${message.role}: ${message.content}`
// }

export const POST = async (req: NextRequest) => {
  const { newPlayerMessage, storyThread } = await req.json()
  // const model = new ChatOpenAI({
  //   apiKey: getDevOpenAiKey(),
  //   model: OPENAI_MODEL,
  // })

  // const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage)
  // const currentMessageContent = messages[messages.length - 1].content
  // const outputParser = new BytesOutputParser()
  // const prompt = PromptTemplate.fromTemplate(SAMPLE_TEMPLATE)
  // const chain = prompt.pipe(model).pipe(outputParser)
  // const stream = await chain.stream({
  //   chat_history: formattedPreviousMessages.join('\n'),
  //   input: currentMessageContent,
  // })

  // return new StreamingTextResponse(stream)
  const aiResponse = await sendMessageToAi(newPlayerMessage)
  return NextResponse.json({ data: aiResponse })
}
