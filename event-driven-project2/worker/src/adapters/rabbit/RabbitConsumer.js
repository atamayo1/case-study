import amqp from "amqplib";
export class RabbitConsumer {
    processor;
    constructor(processor) {
        this.processor = processor;
    }
    async start() {
        const connection = await amqp.connect("amqp://rabbitmq");
        const channel = await connection.createChannel();
        await channel.assertQueue("messages");
        console.log("Worker waiting for messages...");
        channel.consume("messages", async (msg) => {
            if (!msg)
                return;
            const message = JSON.parse(msg.content.toString());
            await this.processor.process(message);
            channel.ack(msg);
        });
    }
}
//# sourceMappingURL=RabbitConsumer.js.map