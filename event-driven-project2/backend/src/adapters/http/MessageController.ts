import { Router } from "express";
import { MessageService } from "../../app/MessageService.js";

export function createMessageController(service: MessageService) {
    const router = Router();

    /**
     * @openapi
     * /api/send:
     *   post:
     *     summary: Send a message
     *     description: Sends a message to the system and publishes it to RabbitMQ.
     *     tags:
     *       - Messages
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - message
     *             properties:
     *               message:
     *                 type: string
     *                 example: "Hello world"
     *     responses:
     *       200:
     *         description: Message sent successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                   type: string
     *                   example: sent
     */
    router.post("/send", async (req, res) => {
        const { message } = req.body;
        await service.send(message);
        res.json({ status: "sent" });
    });

    /**
     * @openapi
     * /api/results:
     *   get:
     *     summary: Get stored results
     *     description: Returns the results stored in memory.
     *     tags:
     *       - Messages
     *     responses:
     *       200:
     *         description: List of stored results
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   message:
     *                     type: string
     *                     example: "Hello world"
     *                   processedAt:
     *                     type: string
     *                     format: date-time
     */
    router.get("/results", (_req, res) => {
        res.json(service.getResults());
    });

    return router;
}
