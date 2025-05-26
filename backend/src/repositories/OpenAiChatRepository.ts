import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const contextPath = path.join(__dirname, '../utils/guilherme-context.txt');
const guilhermeContext = fs.readFileSync(contextPath, 'utf-8');

export class OpenAiChatRepository {
  async sendMessage(message: string): Promise<string> {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: guilhermeContext,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
    });

    return response.choices[0].message.content || 'Erro ao gerar resposta.';
  }
}
