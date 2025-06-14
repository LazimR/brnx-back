import PDFDocument from "pdfkit";

class PDFGenerator {
  gerarPDF(resumo: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const doc = new PDFDocument();
      const buffers: Buffer[] = [];

      doc.on("data", (chunk: Buffer<ArrayBufferLike>) => buffers.push(chunk));
      doc.on("end", () => {
        const pdfBuffer = Buffer.concat(buffers);
        resolve(pdfBuffer);
      });

      doc.on("error", (err:any) => reject(err));

      // Conteúdo do PDF
      doc.fontSize(20).text("Relatório de Demanda", { align: "center" });
      doc.moveDown();
      doc.fontSize(12).text(resumo, { align: "left" });

      doc.end();
    });
  }
}

export default new PDFGenerator();
