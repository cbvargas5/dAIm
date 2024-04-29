import { ChatOpenAI } from '@langchain/openai'
import {
  AIMessage,
  HumanMessage,
  SystemMessage,
} from '@langchain/core/messages'
// import { PromptTemplate } from 'langchain/prompts'
import { SYSTEM_TEMPLATE } from '@/utils/constants/prompt-templates'
import { ChatPromptTemplate, MessagesPlaceholder } from 'langchain/prompts'

const modelVersions = {
  strongButPricy: 'gpt-4-turbo',
  ballerOnBudget: 'gpt-3.5-turbo',
}

export const OPENAI_MODEL = modelVersions.strongButPricy

export const isDevEnvironment =
  process && process.env.NODE_ENV === 'development'

export const getDevOpenAiKey = (userOpenAiKey = '') => {
  return isDevEnvironment ? process.env.DEV_OPENAI_API_KEY : userOpenAiKey
}

const model = new ChatOpenAI({
  apiKey: getDevOpenAiKey(),
  model: OPENAI_MODEL,
})

export const sendMessageToAi = async (
  storyThread: (HumanMessage | AIMessage)[]
) => {
  const fullStoryThread = [new SystemMessage(SYSTEM_TEMPLATE), ...storyThread]
  const message = await model.invoke(fullStoryThread)

  return message
}
