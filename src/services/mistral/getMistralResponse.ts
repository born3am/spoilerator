import { Mistral } from '@mistralai/mistralai';
import { CUSTOM_PROMPT } from '../../config/promptConfig';

interface MistralResponse {
  response: string;
}

export const getMistralResponse = async (
  title: string,
  releaseDate: string
): Promise<MistralResponse> => {
  const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;

  if (!apiKey) {
    throw new Error('MISTRAL API Key is not defined in environment variables.');
  }

  const model = 'mistral-small-latest';
  const client = new Mistral({ apiKey });

  try {
    const response = await client.chat.complete({
      model,
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: `${CUSTOM_PROMPT} ${title}, released on ${releaseDate} ` }
      ]
    });

    return {
      response: response.choices[0].message.content,
    };
  } catch (error) {
    console.error('Error fetching response from Mistral AI:', error);
    throw error;
  }
};
