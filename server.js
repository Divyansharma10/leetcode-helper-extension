import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.OPENROUTER_API_KEY;
//console.log("OpenRouter API KEY:", API_KEY);

app.post("/api/openai", async (req, res) => {
  const { prompt } = req.body;
  try {
    const messages = [
      {
        role: "system",
        content: `You are a helpful coding assistant. Your job is to:
        - Give **stepwise hints** instead of full answers unless asked
        - Provide **solution breakdowns** by explaining each logical step
        - Offer **interactive Q&A** to guide the user
        - Perform **code validation** and point out bugs or inefficiencies
        - Suggest **learning resources** when needed
        Your goal is not just to give answers but to help users develop a deep understanding of algorithms and problem-solving.`
      },
      {
        role: "user",
        content: prompt
      }
    ];

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3-8b-instruct",
        messages
      })
    });

    const result = await response.json();

    console.log("OpenRouter API raw response:", JSON.stringify(result, null, 2));

    const reply = result?.choices?.[0]?.message?.content || "No response from the assistant.";

    res.json({ reply });
  } catch (error) {
    console.error("Error calling OpenRouter API:", error);
    res.status(500).json({ error: "Error contacting OpenRouter API" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
