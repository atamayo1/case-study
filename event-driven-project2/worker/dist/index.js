import { RabbitConsumer } from "./adapters/rabbit/RabbitConsumer.js";
import { RabbitPublisher } from "./adapters/rabbit/RabbitPublisher.js";
import { MessageProcessor } from "./app/MessageProcessor.js";
const bootstrap = async () => {
    const resultPublisher = new RabbitPublisher();
    await resultPublisher.connect();
    const processor = new MessageProcessor(resultPublisher);
    const consumer = new RabbitConsumer(processor);
    await consumer.start();
};
bootstrap();
