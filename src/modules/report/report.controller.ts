import { Request, Response, RequestHandler } from "express";
import ReportService from "./report.service";

class ReportController {
  static createReport: RequestHandler = async (req, res) => {
    try {
      const { id_demand } = req.params;
      const pdfBuffer = await ReportService.createReport(parseInt(id_demand));

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=relatorio.pdf");
      
      res.send(pdfBuffer);
    } catch (error:any) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default ReportController;
