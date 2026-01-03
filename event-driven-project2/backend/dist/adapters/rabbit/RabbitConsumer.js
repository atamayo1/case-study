import amqp from "amqplib";
export class RabbitConsumer {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async start() {
        const connection = await amqp.connect("amqp://rabbitmq");
        const channel = await connection.createChannel();
        await channel.assertQueue("results");
        console.log("Backend listening for results...");
        channel.consume("results", (msg) => {
            if (!msg)
                return;
            const { id, result } = JSON.parse(msg.content.toString());
            this.repository.save(id, result);
            channel.ack(msg);
        });
    }
}
