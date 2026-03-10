import axios from "axios";

export const getHint = async (req, res) => {
  try {

    const { question } = req.body;

    const prompt = `
You are an SQL tutor.

Give a helpful short hint (1-2 sentences).
Do NOT provide the full solution.

Question:
${question}
`;

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      },
      {
        params: {
          key: process.env.GEMINI_API_KEY
        }
      }
    );

    const hint = response.data.candidates[0].content.parts[0].text;

    res.json({ hint });

  } catch (error) {

    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to generate hint"
    });

  }
};