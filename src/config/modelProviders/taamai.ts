import { ModelProviderCard } from '@/types/llm';

const TaamAI: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 1_047_576,
      description:
        'GPT-4.1 mini provides a balance of intelligence, speed, and cost, making it an attractive model for many use cases.',
      displayName: 'GPT-4.1 mini',
      enabled: true,
      functionCall: true,
      id: 'gpt-4.1-mini',
      maxOutput: 32_768,
      pricing: {
        cachedInput: 0.1,
        input: 0.4,
        output: 1.6,
      },
      releasedAt: '2025-04-14',
      vision: true,
    },
    {
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
    },
    {
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
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        "GPT-4o mini is OpenAI's most cost-efficient small model that's smarter and cheaper than GPT-3.5 Turbo.",
      displayName: 'GPT-4o mini',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-mini',
      maxOutput: 16_384,
      pricing: {
        cachedInput: 0.075,
        input: 0.15,
        output: 0.6,
      },
      releasedAt: '2024-07-18',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        "GPT-4o is OpenAI's high-intelligence flagship model for complex, multi-step tasks.",
      displayName: 'GPT-4o',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o',
      maxOutput: 16_384,
      pricing: {
        cachedInput: 1.25,
        input: 2.5,
        output: 10,
      },
      releasedAt: '2024-05-13',
      vision: true,
    },
    {
      contextWindowTokens: 16_384,
      description:
        'GPT-3.5 Turbo is a legacy model optimized for chat at 1/10th the cost of text-davinci-003.',
      displayName: 'GPT-3.5 Turbo',
      enabled: true,
      functionCall: true,
      id: 'gpt-3.5-turbo',
      maxOutput: 16_384,
      pricing: {
        input: 0.5,
        output: 1.5,
      },
    },
  ],
  checkModel: 'gpt-4o-mini',
  description:
    'Taam AI is a powerful AI models gateway that provides access to various state-of-the-art language models. Compatible with OpenAI API format, Taam AI offers flexible and cost-effective solutions for developers and businesses looking to integrate advanced AI capabilities into their applications.',
  enabled: true,
  id: 'taamai',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://docs.taam.ai/models',
  name: 'Taam AI',
  settings: {
    responseAnimation: 'smooth',
    showModelFetcher: true,
    supportResponsesApi: true,
  },
  url: 'https://taamai.com',
};

export default TaamAI;
