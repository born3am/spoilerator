# Spoilerator

For the impatient, the curious, and the malicious... get the spoilers before the movie even starts!

## Table of Contents

- [About](#about)
- [Stack](#stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
  - [Deploying on Vercel](#deploying-on-vercel)
- [Contributing](#contributing)
- [License](#license)

## About

Spoilerator is a web application that provides movie spoilers before the movie even starts. It uses TMDB API to fetch movie data and MISTRAL AI API to generate spoilers.

## Stack
  - React
  - TypeScript
  - Vite
  - Mistral AI API
  - TMDB API

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/born3am/spoilerator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd spoilerator
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the project locally, use the following command:
```bash
npm run dev
```

This will start the development server, and you can access the application at `http://localhost:5173`.

## Deployment

### Deploying on Vercel

1. **Install the Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Log in to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the Project**:
   ```bash
   vercel
   ```

4. **Update the Deployment**:
   If you want to update an existing deployment, use the `--prod` flag:
   ```bash
   vercel --prod
   ```

5. **Verify the Deployment**:
   After the deployment is complete, you can verify it by visiting the provided URL.

### Deploying Serverless Functions on Vercel

1. **Set Up Environment Variables**

a) **Locally (`.env` for Development Only)**
Create a `.env` file in your project root and add:

```ini
MISTRAL_API_KEY=your_mistral_api_key
TMDB_API_KEY=your_tmdb_api_keyy
```

b) **On Vercel (For Production & Deployment)**

Go to Vercel Dashboard → Your Project → Settings → Environment Variables.

Add the following keys manually:
***MISTRAL_API_KEY*** → your_mistral_api_key
***TMDB_API_KEY*** → your_tmdb_api_key
Redeploy the project for changes to take effect.

2. **Vercel Environment Variables***

To view the environment variables set up on Vercel, you can use the following command:

```bash
vercel env ls
```

3. **Create Serverless Functions**:
Vercel automatically detects API routes inside the /api/ directory. Your project structure should look like this:
/api
  ├── mistral.js   # Handles requests to the Mistral AI API
  ├── tmdb.js      # Fetches data from The Movie DB API

Important: Do not use VITE_* prefixes for backend variables, as they expose them to the frontend.

4. **Deploy the Functions**:
Run the following command to deploy your serverless functions:
```bash
vercel
```

5. **Verify the Deployment**:
After the deployment is complete, you can verify it by visiting the provided URL and testing the serverless functions.


## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

