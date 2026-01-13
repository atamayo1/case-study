import { Router } from "express";
export function createMessageController(service) {
    const router = Router();
    /**
     * @openapi
     * /api/send:
     *   post:
     *     summary: Enviar un mensaje
     *     description: Envía un mensaje al sistema y lo publica en RabbitMQ.
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
     *                 example: "Hola mundo"
     *     responses:
     *       200:
     *         description: Mensaje enviado correctamente
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
     *     summary: Obtener resultados procesados
     *     description: Retorna los resultados almacenados en memoria.
     *     tags:
     *       - Messages
     *     responses:
     *       200:
     *         description: Lista de resultados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   message:
     *                     type: string
     *                     example: "Hola mundo"
     *                   processedAt:
     *                     type: string
     *                     format: date-time
     */
    router.get("/results", (_req, res) => {
        res.json(service.getResults());
    });
    return router;
}
