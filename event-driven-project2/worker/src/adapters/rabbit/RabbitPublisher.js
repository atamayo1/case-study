import amqp from "amqplib";
export class RabbitPublisher {
    channel;
    async connect() {
        const connection = await amqp.connect("amqp://rabbitmq");
        this.channel = await connection.createChannel();
        await this.channel.assertQueue("results");
    }
    async publishResult(id, result) {
        this.channel.sendToQueue("results", Buffer.from(JSON.stringify({ id, result })));
    }
}
//# sourceMappingURL=RabbitPublisher.js.map