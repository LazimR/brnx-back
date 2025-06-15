import { Router } from "express";

import ReportController from "./report.controller";

const reportRoutes = Router();

reportRoutes.get("/:id_demand", ReportController.createReport);

export default reportRoutes;

