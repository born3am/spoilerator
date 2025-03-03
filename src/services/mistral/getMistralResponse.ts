interface MistralResponse {
  response: string;
}

const validateInput = (title: string, releaseDate: string) => {
  if (typeof title !== 'string' || title.trim() === '') {
    throw new Error(`Invalid title: expected a non-empty string, got "${title}"`);
  }

  if (typeof releaseDate !== 'string' || releaseDate.trim() === '') {
    throw new Error(`Invalid release date: expected a non-empty string, got "${releaseDate}"`);
  }

  if (isNaN(Date.parse(releaseDate))) {
    throw new Error(`Invalid release date: "${releaseDate}" is not a valid date format.`);
  }
};

export const getMistralResponse = async (
  title: string,
  releaseDate: string
): Promise<MistralResponse> => {
  validateInput(title, releaseDate);

  try {
    const response = await fetch('/api/mistral', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, releaseDate }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch response from Mistral AI. Status: ${response.status}`);
    }

    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error('Failed to parse API response as JSON.');
    }

    if (!data || typeof data.response !== 'string') {
      throw new Error('Invalid API response format.');
    }

    return { response: data.response };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching response from Mistral AI:', error.message);
      throw new Error(`Failed to fetch response: ${error.message}`);
    }
    throw new Error('An unknown error occurred while fetching response.');
  }
};
