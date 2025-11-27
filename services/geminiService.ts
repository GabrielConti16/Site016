import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVibeResponse = async (mood: string, setting: string): Promise<string> => {
  try {
    const prompt = `
      Você é a IA criativa da dupla de DJs de Techno Underground chamada "Artigo 016".
      
      O usuário está neste cenário: "${setting}" e sentindo-se: "${mood}".
      
      Sua tarefa:
      1. Crie uma descrição poética, curta, obscura e futurista de 2 frases sobre a atmosfera sonora ideal para esse momento.
      2. Sugira uma "Track ID" fictícia (Nome da música - Artigo 016 Remix) que se encaixaria perfeitamente.
      
      Mantenha o tom misterioso, industrial e artístico. Responda em Português do Brasil.
      Não use formatação markdown, apenas texto puro.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "O sistema está reiniciando... Tente novamente em breve para sincronizar a frequência.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Erro de conexão com o núcleo neural. A música continua tocando offline.";
  }
};