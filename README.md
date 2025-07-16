# Leetcode Coding Assistant

The Leetcode Coding Assistant is a Chrome extension designed to help individuals enhance their problem-solving skills while working on algorithmic coding challenges. It provides structured hints, explains solutions step by step, and offers interactive guidance. Built to support platforms like LeetCode and GeeksforGeeks, it utilizes OpenRouter to deliver AI-powered feedback using state-of-the-art models such as LLaMA 3.

---

## Features

* Incremental hints that promote guided problem solving
* Detailed explanations to help users understand solution logic
* Interactive Q\&A for clarifying concepts and approaches
* Code validation for identifying bugs and inefficiencies
* Suggested resources to encourage independent learning
* Content script integration for real-time feedback on supported coding platforms

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd leetcode-helper-extension
```

### 2. Install Backend Dependencies

```bash
npm install express cors dotenv node-fetch
```

### 3. Configure Environment Variables

* Go to [https://openrouter.ai/keys](https://openrouter.ai/keys)
* Generate an API key
* Add the following to a new `.env` file:

```env
OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Run the Backend Server

```bash
node server.js
```

Your server should now be running at `http://localhost:3000`

## Usage

### Popup Interface

* Open the extension by clicking its icon in the Chrome toolbar
* Enter a coding challenge or describe your approach
* The assistant will respond with constructive feedback and learning tips

### In-Browser Code Helper

* Visit a problem page on LeetCode or GeeksforGeeks
* Look for an “Ask AI” button inserted near the code area
* Click the button to receive AI-generated insights and suggestions

## Deployment

To use the extension beyond local development, deploy the backend on a public server. Recommended platforms include:

* Render: [https://render.com](https://render.com)
* Vercel: [https://vercel.com](https://vercel.com)
* Railway: [https://railway.app](https://railway.app)

After deployment, update any URLs in `popup.js` and `content.js` from `http://localhost:3000` to your hosted endpoint.

