import { Router } from "express";
import providerController from "./provider.controller";

const providerRoutes = Router();


providerRoutes.post("/", providerController.create.bind);
providerRoutes.get("/:id", providerController.getProvider.bind);
providerRoutes.get("/", providerController.getAllProviders.bind);
providerRoutes.put("/:id", providerController.update.bind);
providerRoutes.delete("/:id", providerController.delete.bind);

export default providerRoutes;