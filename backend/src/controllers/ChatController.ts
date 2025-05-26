import { Request, Response } from 'express';
import { ChatService } from '../services/ChatService';

export class ChatController {
  private chatService: ChatService;

  constructor(chatService: ChatService) {
    this.chatService = chatService;
  }

  async chat(req: Request, res: Response): Promise<void> {
    try {
      const { message } = req.body;
      const response = await this.chatService.handleMessage(message);
      res.status(200).json({ response });
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Erro ao processar mensagem' });
    }
  }
}
