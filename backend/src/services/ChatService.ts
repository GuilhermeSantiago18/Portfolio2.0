import { OpenAiChatRepository } from '../repositories/OpenAiChatRepository';

export class ChatService {
  private chatRepository: OpenAiChatRepository;

  constructor(chatRepository: OpenAiChatRepository) {
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
