import { GoogleGenAI, Type } from "@google/genai";

// Configuración del cliente usando la clave corregida en Vercel
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY || '' });
};

export const geminiService = {
  // 1. Soporte para Envíos Masivos y Análisis de Frecuencia
  async analizarEstrategiaEnvio(numeros: string, mensajeBase: string) {
    const ai = getAIClient();
    const cantidadNumeros = numeros.split(',').length;

    const prompt = `
      Analiza esta campaña de mensajería masiva:
      - Cantidad de contactos: ${cantidadNumeros}
      - Mensaje propuesto: "${mensajeBase}"
      
      Proporciona una estrategia técnica para evitar bloqueos y maximizar apertura:
      1. Frecuencia recomendada (mensajes por hora).
      2. Mejores franjas horarias.
      3. Sugerencia de variaciones en el mensaje para que no parezca spam.
      4. Recomendación de pausas entre envíos.
    `;

    const response = await ai.getGenerativeModel({ model: 'gemini-1.5-flash' }).generateContent(prompt);
    return response.response.text();
  },

  // 2. Generador de Guiones Personalizados (Ana de Jeemia Motors)
  async generateSalesScript(carModel: string, tone: string) {
    const ai = getAIClient();
    const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `Escribe un guion de ventas amigable para WhatsApp. 
    Vendedor: Ana de Jeemia Motors. 
    Modelo de auto: ${carModel}. 
    Tono: ${tone}. 
    Usa variables como {Nombre}, {Modelo}, {Precio}. Empieza con "Hola {Nombre}, soy Ana..."`;

    const response = await model.generateContent(prompt);
    return response.response.text();
  },

  // 3. Análisis de Base de Datos y Notificación por Correo
  async analizarBaseYNotificar(data: any, userMessage: string) {
    const ai = getAIClient();
    const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
      Analiza la siguiente base de datos: ${JSON.stringify(data)}
      El usuario quiere enviar este mensaje: "${userMessage}"
      
      Genera un reporte de segmentación y envía un resumen estratégico.
      IMPORTANTE: Al finalizar, confirma que el reporte debe enviarse a woowestudio45@gmail.com.
    `;

    const response = await model.generateContent(prompt);
    return response.response.text();
  }
};
