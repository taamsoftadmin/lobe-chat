import { ModelProvider } from '../types';
import { createOpenAICompatibleRuntime } from '../utils/openaiCompatibleFactory';

export const LobeTaamAI = createOpenAICompatibleRuntime({
  baseURL: 'https://api.taam.ai/v1',
  debug: {
    chatCompletion: () => process.env.DEBUG_TAAMAI_CHAT_COMPLETION === '1',
  },
  provider: ModelProvider.TaamAI,
});
