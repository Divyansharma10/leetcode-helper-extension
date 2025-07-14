import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;
  console.log("GEMINI API KEY:", process.env.GEMINI_API_KEY);

app.post("/api/gemini", async (req, res) => {
  const { prompt } = req.body;
  try {
    const geminiRes = await fetch(
      'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const result = await geminiRes.json();

    console.log("Gemini API raw response:", JSON.stringify(result, null, 2));

    const reply =
      result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";

    res.json({ reply });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Error contacting Gemini API" });
  }

});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
