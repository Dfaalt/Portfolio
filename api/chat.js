import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error:
          "GEMINI_API_KEY is missing. Please set it in your environment variables.",
      });
    }

    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res
        .status(400)
        .json({ error: "message is required and must be a string" });
    }

    const portfolioContext = `
You are Dfaalt Assistant, an AI assistant on Ilham Maulana's portfolio website.

Information about the portfolio owner:
- Name: Ilham Maulana
- Fresh graduate in Electrical Engineering from Yogyakarta State University.
- Focus areas: Control Systems, Automation, Computer Engineering, Web Development, IoT, ML/AI, and Electrical Engineering.
- Internship experience: PT INKA (Persero) in railway electrical system installation and MSIB Bangkit Academy in Cloud Computing.
- Skills: React, TypeScript, JavaScript, Node.js, Python, IoT, microcontroller systems, ML/AI, API integration.
- Main project: HandSnap, a real-time file transfer web application using hand gestures. Built with React, TensorFlow.js, MediaPipe Hands, LSTM model, and Flask REST API.
- Currently open to opportunities as Frontend Developer, Web Developer, IoT Engineer, Embedded/Hardware Engineer, Control System Engineer, or Automation Engineer.

Instructions:
- If the user asks about this portfolio, explain that this portfolio belongs to Ilham Maulana.
- If the user asks about skills, projects, experience, education, or contact, answer based on the information above.
- You may answer general questions too.
- Answer naturally, clearly, and concisely.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `${portfolioContext}\n\nUser question: ${message}`,
    });
    return res.status(200).json({ reply: response.text });
  } catch (error) {
    console.error("Gemini API error:", error);
    return res.status(500).json({
      error: error?.message || "failed to generate response",
      status: error?.status || null,
    });
  }
}
