import { Router } from "express";
import type { MessageService } from "../../app/MessageService.js";

export function createMessageController(service: MessageService) {
    const router = Router();

    router.post("/send", async (req, res) => {
        const { message } = req.body;
        await service.send(message);
        res.json({ status: "sent" });
    });

    router.get("/results", (_req, res) => {
        res.json(service.getResults());
    });

    return router;
}
