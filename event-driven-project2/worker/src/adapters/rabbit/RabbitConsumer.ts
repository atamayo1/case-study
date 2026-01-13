import amqp from "amqplib";
import type { MessageConsumer } from "../../ports/MessageConsumer.js";
import type { MessageProcessor } from "../../app/MessageProcessor.js";
import type { Message } from "../../domain/Message.js";


export class RabbitConsumer implements MessageConsumer {
    constructor(
        private readonly processor: MessageProcessor
    ) { }

    async start(): Promise<void> {
        const connection = await amqp.connect("amqp://rabbitmq");
        const channel = await connection.createChannel();
        await channel.assertQueue("messages");

        console.log("Worker waiting for messages...");

        channel.consume("messages", async (msg: amqp.ConsumeMessage | null) => {
            if (!msg) return;

            const message: Message = JSON.parse(msg.content.toString());
            await this.processor.process(message);

            channel.ack(msg);
        });
    }
}
