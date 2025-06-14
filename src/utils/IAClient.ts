import Groq from "groq-sdk";

import type { ReportActionODT } from "../modules/report/report.odt";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // vamos usar variável de ambiente
});

class IAClient {
  async gerarResumo(texto: string): Promise<string> {
    const prompt = `
      Resuma o seguinte histórico de ações de uma demanda em poucas frases objetivas e bem estruturadas:
      
      ${texto}
    `;

    const response = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama3-8b-8192", // ou o modelo que preferir
      max_tokens: 500,
      temperature: 0.5,
    });

    const resumo = response.choices[0]?.message?.content?.trim();

    if (!resumo) {
      throw new Error("Não foi possível gerar o resumo");
    }

    return resumo;
  }

  async formatActions2Text(actionsList: ReportActionODT[]){
    return actionsList.map(action => {
        const date = new Date(action.creation_date);
        const formattedDate = date.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `Técnico: ${action.technician_name}\nDescrição: ${action.description}\nData de Criação: ${formattedDate}\n\n`;
    }).join('');
}
}

export default new IAClient();