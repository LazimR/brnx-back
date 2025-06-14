import prisma from "../../config/prisma";
import { ReportActionODT } from "./report.odt";

class ReportRepository {

    async createReport(idDemand: number): Promise<ReportActionODT[]>{
        return await prisma.actions.findMany({
            where: {
                id_demand: idDemand
            },
            select: {
                technician_name: true,
                description: true,
                creation_date: true
            },
            orderBy: {
                creation_date: 'asc'
            }
        })
    }
}

export default new ReportRepository();