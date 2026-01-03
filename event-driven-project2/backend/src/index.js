import express from "express";
import cors from "cors";
import { InMemoryRepository } from "./infrastructure/InMemoryRepository.js";
import { RabbitPublisher } from "./adapters/rabbit/RabbitPublisher.js";
import { RabbitConsumer } from "./adapters/rabbit/RabbitConsumer.js";
import { MessageService } from "./app/MessageService.js";
import { createMessageController } from "./adapters/http/MessageController.js";
async function bootstrap() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    const repository = new InMemoryRepository();
    const publisher = new RabbitPublisher();
    await publisher.connect();
    const resultConsumer = new RabbitConsumer(repository);
    await resultConsumer.start();
    const service = new MessageService(publisher, repository);
    app.use(createMessageController(service));
    app.listen(3001, () => {
        console.log("Backend running on port 3001");
    });
}
bootstrap();
//# sourceMappingURL=index.js.map