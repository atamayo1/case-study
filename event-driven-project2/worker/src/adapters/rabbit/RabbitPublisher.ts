import amqp from "amqplib";
import type { MessagePublisher } from "../../ports/MessagePublisher.js";

export class RabbitPublisher implements MessagePublisher {
    private channel!: amqp.Channel;

    async connect() {
        const connection = await amqp.connect("amqp://rabbitmq");
        this.channel = await connection.createChannel();
        await this.channel.assertQueue("results");
    }

    async publishResult(id: string, result: string): Promise<void> {
        this.channel.sendToQueue(
            "results",
            Buffer.from(JSON.stringify({ id, result }))
        );
    }
}
