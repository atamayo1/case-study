import amqp from "amqplib";
import type { Message } from "../../domain/Message.js";
import type { MessagePublisher } from "../../ports/MessagePublisher.js";


export class RabbitPublisher implements MessagePublisher {
    private channel!: amqp.Channel;

    async connect() {
        const connection = await amqp.connect("amqp://rabbitmq");
        this.channel = await connection.createChannel();
        await this.channel.assertQueue("messages");
        console.log("Backend connected to RabbitMQ");
    }

    async publish(message: Message): Promise<void> {
        this.channel.sendToQueue(
            "messages",
            Buffer.from(JSON.stringify(message))
        );
    }
}
