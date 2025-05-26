// src/routes/chat.ts
import { Router } from 'express';
import { ChatService } from '../services/ChatService';
import { ChatController } from '../controllers/ChatController';
import { OpenAIChatRepository } from '../repositories/OpenAiChatRepository';

const router = Router();

const chatRepo = new OpenAIChatRepository();
const chatService = new ChatService(chatRepo);
const chatController = new ChatController(chatService);

router.post('/chat', (req, res) => chatController.chat(req, res));

export default router;
