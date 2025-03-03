import { Mistral } from '@mistralai/mistralai';
import {CUSTOM_PROMPT} from '../src/config/promptConfig.js';

export default async function handler(req, res) {
  const { title, releaseDate } = req.body;

  // Ensure the request body has both title and releaseDate
  if (!title || !releaseDate) {
    return res.status(400).json({ error: 'Missing title or releaseDate' });
  }

  const apiKey = process.env.MISTRAL_API_KEY;

  // Ensure API key is available
  if (!apiKey) {
    return res.status(500).json({ error: 'MISTRAL API Key is not defined in environment variables.' });
  }

  const model = 'mistral-small-latest';
  const client = new Mistral({ apiKey });

  try {
    const response = await client.chat.complete({
      model,
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: `${CUSTOM_PROMPT} ${title}, released on ${releaseDate}` }
      ]
    });

    // Check if the response contains valid content
    const content = response.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error('No valid content received from Mistral AI.');
    }

    return res.status(200).json({ response: content });
  } catch (error) {
    console.error('Error fetching response from Mistral AI:', error);
    return res.status(500).json({ error: error.message || 'Error fetching response from Mistral AI' });
  }
}
