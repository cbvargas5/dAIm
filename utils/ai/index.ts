import { ChatOpenAI } from '@langchain/openai'
import { AIMessage, HumanMessage } from '@langchain/core/messages'
import { PromptTemplate } from 'langchain/prompts'
import { SAMPLE_TEMPLATE } from '@/utils/constants/prompt-templates'

const modelVersions = {
  strongButPricy: 'gpt-4-turbo',
  ballerOnBudget: 'gpt-3.5-turbo',
}

export const OPENAI_MODEL = modelVersions.ballerOnBudget

export const isDevEnvironment =
  process && process.env.NODE_ENV === 'development'

export const getDevOpenAiKey = (userOpenAiKey = '') => {
  return isDevEnvironment ? process.env.DEV_OPENAI_API_KEY : userOpenAiKey
}

const model = new ChatOpenAI({
  apiKey: getDevOpenAiKey(),
  model: OPENAI_MODEL,
})

export const sendMessageToAi = async (inputMessage: string) => {
  const message = await model.invoke(inputMessage)

  return message
}
