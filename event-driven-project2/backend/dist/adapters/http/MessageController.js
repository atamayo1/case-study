import { Router } from "express";
export function createMessageController(service) {
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
