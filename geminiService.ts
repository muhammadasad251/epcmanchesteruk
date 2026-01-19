
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `You are the AI Energy Assistant for "EPC Manchester". 
Your goal is to help homeowners and landlords in Greater Manchester understand Energy Performance Certificates (EPCs) and how to improve their property's energy efficiency.
- You should provide advice on insulation, double glazing, heating systems, and solar panels.
- Keep responses professional, helpful, and concise.
- Remind users that EPC Manchester provides official accredited EPC assessments and floorplans.
- If they ask for pricing, refer them to the website pricing section (starts at £50 for EPC).
- Mention that we cover all of Greater Manchester including Stretford, Salford, Trafford, etc.`;

export class GeminiService {
  /* Comment: Initialization moved inside the method to adhere to guidelines for key freshness and direct process.env usage */
  async chat(message: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[]) {
    try {
      /* Comment: Direct use of process.env.API_KEY as per the guidelines */
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        },
      });

      /* Comment: Accessing the .text property directly instead of as a method or via nested candidates object */
      return response.text || "I'm sorry, I couldn't process that. Please contact our team directly at 07869 746355.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Hello! I'm having a bit of trouble connecting right now. Please feel free to give us a call at 07869 746355 for any EPC inquiries!";
    }
  }
}

export const geminiService = new GeminiService();
