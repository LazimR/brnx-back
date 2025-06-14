import { Router } from "express";

import ReportController from "./report.controller";

const reportRoutes = Router();

reportRoutes.get("/", ReportController.createReport.bind);

export default reportRoutes;

