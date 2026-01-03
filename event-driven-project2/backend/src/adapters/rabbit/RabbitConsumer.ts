import amqp from "amqplib";
import type { MessageConsumer } from "../../ports/MessageConsumer.js";
import type { MessageRepository } from "../../ports/MessageRepository.js";

export class RabbitConsumer implements MessageConsumer {
    constructor(
        private repository: MessageRepository
    ) { }

    async start(): Promise<void> {
        const connection = await amqp.connect("amqp://rabbitmq");
        const channel = await connection.createChannel();
        await channel.assertQueue("results");

        console.log("Backend listening for results...");

        channel.consume("results", (msg) => {
            if (!msg) return;

            const { id, result } = JSON.parse(msg.content.toString());
            this.repository.save(id, result);

            channel.ack(msg);
        });
    }
}
