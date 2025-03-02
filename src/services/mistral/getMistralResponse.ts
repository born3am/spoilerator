import { Mistral } from '@mistralai/mistralai';
import { CUSTOM_PROMPT } from '../../config/promptConfig';

interface MistralResponse {
  response: string;
}

const API_CALL_LIMIT = 10; // Maximum number of API calls allowed per minute
const RATE_LIMIT_WINDOW = 60000; // 1 minute in milliseconds
const CACHE_EXPIRATION = 300000; // 5 minutes in milliseconds

const getApiCallTimestamps = (): number[] => {
  return JSON.parse(localStorage.getItem('apiCallTimestamps') || '[]');
};

const setApiCallTimestamps = (timestamps: number[]) => {
  localStorage.setItem('apiCallTimestamps', JSON.stringify(timestamps));
};

const cleanUpOldTimestamps = () => {
  const oneMinuteAgo = Date.now() - RATE_LIMIT_WINDOW;
  let timestamps = getApiCallTimestamps().filter((ts) => ts > oneMinuteAgo);
  setApiCallTimestamps(timestamps);
};

// Remove all expired cache
const removeExpiredCache = () => {
  const now = Date.now();

  // Iterate through all keys in localStorage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('cache_')) {
      const cachedData = localStorage.getItem(key);
      if (cachedData) {
        const { timestamp } = JSON.parse(cachedData);
        
        if (now - timestamp >= CACHE_EXPIRATION) {
          localStorage.removeItem(key);
        }
      }
    }
  });
};

const getCachedResponse = (key: string): MistralResponse | null => {
  const cachedData = localStorage.getItem(`cache_${key}`);
  if (!cachedData) return null;
  const { response } = JSON.parse(cachedData);
  
  return { response };
};

const setCachedResponse = (key: string, response: string) => {
  localStorage.setItem(`cache_${key}`, JSON.stringify({ response, timestamp: Date.now() }));
};

export const getMistralResponse = async (
  title: string,
  releaseDate: string
): Promise<MistralResponse> => {
  if (typeof title !== 'string' || title.trim() === '') {
    throw new Error('Invalid title');
  }
  if (typeof releaseDate !== 'string' || releaseDate.trim() === '') {
    throw new Error('Invalid release date');
  }

  const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
  if (!apiKey) {
    throw new Error('MISTRAL API Key is not defined in environment variables.');
  }

  removeExpiredCache();
  cleanUpOldTimestamps();
  let apiCallTimestamps = getApiCallTimestamps();

  if (apiCallTimestamps.length >= API_CALL_LIMIT) {
    throw new Error('Spoilerator usage limit exceeded, try again in a minute.');
  }

  const cacheKey = `${title}_${releaseDate}`;
  const cachedResponse = getCachedResponse(cacheKey);
  if (cachedResponse) return cachedResponse;

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

    apiCallTimestamps.push(Date.now());
    setApiCallTimestamps(apiCallTimestamps);
    setCachedResponse(cacheKey, response.choices[0].message.content);

    return { response: response.choices[0].message.content };
  } catch (error) {
    console.error('Error fetching response from Mistral AI:', error);
    throw new Error('Failed to fetch response from Mistral AI.');
  }
};
