import type { MessageConsumer } from "../../ports/MessageConsumer.js";
import type { MessageRepository } from "../../ports/MessageRepository.js";
export declare class RabbitConsumer implements MessageConsumer {
    private repository;
    constructor(repository: MessageRepository);
    start(): Promise<void>;
}
//# sourceMappingURL=RabbitConsumer.d.ts.map