import { Router } from "express";
import providerController from "./provider.controller";

const providerRoutes = Router();


providerRoutes.post("/", providerController.create);
providerRoutes.get("/:id", providerController.getProvider);
providerRoutes.get("/", providerController.getAllProviders);
providerRoutes.put("/:id", providerController.update);
providerRoutes.delete("/:id", providerController.delete);

export default providerRoutes;