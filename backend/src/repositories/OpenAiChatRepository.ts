import OpenAI from 'openai';

export class OpenAIChatRepository {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });
  }

  async sendMessage(message: string): Promise<string> {
    const completion = await this.openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    });

    return completion.choices[0].message.content || 'Sem resposta';
  }
}
