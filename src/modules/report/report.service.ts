import reportRepository from "./report.repository";

import IAClient from "../../utils/IAClient";

import pdfGenerator from "../../utils/pdfGenerator";

class ReportService {
    async createReport(idDemand: number){
        const actions = await reportRepository.createReport(idDemand);

        const text = await IAClient.formatActions2Text(actions);

        const resume = await IAClient.gerarResumo(text);

        const pdf = await pdfGenerator.gerarPDF(resume);

        return pdf;
    }
}

export default new ReportService();