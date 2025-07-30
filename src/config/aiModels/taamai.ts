import { AIChatModelCard } from '@/types/aiModel';

export const taamaiChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_047_576,
    description:
      'GPT-4.1 mini provides a balance of intelligence, speed, and cost, making it an attractive model for many use cases.',
    displayName: 'GPT-4.1 mini',
    enabled: true,
    id: 'gpt-4.1-mini',
    maxOutput: 32_768,
    pricing: {
      cachedInput: 0.1,
      input: 0.4,
      output: 1.6,
    },
    releasedAt: '2025-04-14',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 128_000,
    description:
      'o1-mini is a fast, cost-effective reasoning model tailored for coding, math, and science applications.',
    displayName: 'OpenAI o1-mini',
    enabled: true,
    id: 'o1-mini',
    maxOutput: 65_536,
    pricing: {
      input: 3,
      output: 12,
    },
    releasedAt: '2024-09-12',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      "o1 is OpenAI's new reasoning model for complex tasks that require broad general knowledge.",
    displayName: 'OpenAI o1',
    enabled: true,
    id: 'o1-2024-12-17',
    maxOutput: 100_000,
    pricing: {
      input: 15,
      output: 60,
    },
    releasedAt: '2024-12-17',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      "GPT-4o mini is OpenAI's most cost-efficient small model that's smarter and cheaper than GPT-3.5 Turbo.",
    displayName: 'GPT-4o mini',
    enabled: true,
    id: 'gpt-4o-mini',
    maxOutput: 16_384,
    pricing: {
      cachedInput: 0.075,
      input: 0.15,
      output: 0.6,
    },
    releasedAt: '2024-07-18',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      "GPT-4o is OpenAI's high-intelligence flagship model for complex, multi-step tasks.",
    displayName: 'GPT-4o',
    enabled: true,
    id: 'gpt-4o',
    maxOutput: 16_384,
    pricing: {
      cachedInput: 1.25,
      input: 2.5,
      output: 10,
    },
    releasedAt: '2024-05-13',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 16_384,
    description:
      'GPT-3.5 Turbo is a legacy model optimized for chat at 1/10th the cost of text-davinci-003.',
    displayName: 'GPT-3.5 Turbo',
    enabled: true,
    id: 'gpt-3.5-turbo',
    maxOutput: 4096,
    pricing: {
      input: 0.5,
      output: 1.5,
    },
    type: 'chat',
  },
];

export const allModels = [...taamaiChatModels];

export default allModels;
