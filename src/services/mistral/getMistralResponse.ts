import axios from 'axios';
import { CUSTOM_PROMPT } from '../../config/promptConfig';
import { MISTRAL_API_ENDPOINT } from './endpoints';

interface MistralResponse {
  title: string;
  releaseDate: string;
  prompt: string;
  response: string;
}

export const getMistralResponse = async (
  title: string,
  releaseDate: string
): Promise<MistralResponse> => {
  const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;

  try {
    const response = await axios.post(MISTRAL_API_ENDPOINT, {
      model: 'mistral',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: `Title: ${title}, Release Date: ${releaseDate}, Prompt: ${CUSTOM_PROMPT}` }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    return {
      title,
      releaseDate,
      prompt: CUSTOM_PROMPT,
      response: response.data.choices[0].message.content,
    };
  } catch (error) {
    console.error('Error fetching response from Mistral AI:', error);
    throw error;
  }
};
