import prisma from "../../config/prisma";
import { ReportActionODT } from "./report.odt";

class ReportRepository {

    async createReport(id_demand: number): Promise<ReportActionODT[]>{
        try{
            const actions = prisma.actions.findMany({
                where: {
                    id_demand: id_demand
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
            
            return actions

        }catch(error:any){
            console.log(error.message)
            throw new Error(error)
        }
    }
}

export default new ReportRepository();