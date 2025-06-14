import { Request, Response } from "express";
import ReportService from "./report.service";

class ReportController {
  async createReport(req: Request, res: Response): Promise<Response> {
    const { idDemand } = req.params;

    try {
      const pdfBuffer = await ReportService.createReport(Number(idDemand));

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=relatorio.pdf");
      
      return res.send(pdfBuffer);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new ReportController();
