import amqp from "amqplib";
export class RabbitPublisher {
    channel;
    async connect() {
        const connection = await amqp.connect("amqp://rabbitmq");
        this.channel = await connection.createChannel();
        await this.channel.assertQueue("messages");
        console.log("Backend connected to RabbitMQ");
    }
    async publish(message) {
        this.channel.sendToQueue("messages", Buffer.from(JSON.stringify(message)));
    }
}
