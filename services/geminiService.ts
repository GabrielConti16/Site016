// SERVICE DISABLED FOR STATIC DEPLOYMENT
// To reactivate AI features:
// 1. Uncomment the code below
// 2. Add your API_KEY to .env
// 3. Import this service in AIVibeGenerator.tsx

/*
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVibeResponse = async (mood: string, setting: string): Promise<string> => {
  try {
    const prompt = `...`; 

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Error";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Offline";
  }
};
*/

export const generateVibeResponse = async (mood: string, setting: string): Promise<string> => {
  return "Service Offline";
};
