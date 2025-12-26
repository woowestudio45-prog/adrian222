
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY || '' });
};

export const geminiService = {
  async generateSalesScript(carModel: string, tone: string) {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: `Write a friendly WhatsApp sales script for a car salesman. Model: ${carModel}. Tone: ${tone}. Start with "Hola {Nombre}, soy Ana de Jeemia Motors..." Use variables like {Nombre}, {Modelo}, {Precio}.`,
    });
    return response.text;
  },

  async generateMarketingImage(prompt: string, format: string) {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: {
        parts: [{ text: `A high quality professional automotive studio photograph of ${prompt}. Realistic lighting. 4k.` }]
      },
      config: {
        imageConfig: {
          aspectRatio: format === '4:5' ? '4:5' : '1:1',
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  },

  async analyzeLeads(data: any) {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze these car sales leads: ${JSON.stringify(data)}. Provide a brief strategic recommendation.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            optimumMessages: { type: Type.NUMBER },
            suggestedHours: { type: Type.STRING },
            strategyName: { type: Type.STRING }
          }
        }
      }
    });
    return JSON.parse(response.text);
  }
};
