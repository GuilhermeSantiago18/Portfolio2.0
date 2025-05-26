import { OpenAIChatRepository } from '../repositories/OpenAiChatRepository';

export class ChatService {
  private chatRepository: OpenAIChatRepository;

  constructor(chatRepository: OpenAIChatRepository) {
    this.chatRepository = chatRepository;
  }

  async handleMessage(message: string): Promise<string> {
    if (!message || !message.trim()) {
      throw new Error('Invalid Message');
    }

    const response = await this.chatRepository.sendMessage(message);
    return response;
  }
}
