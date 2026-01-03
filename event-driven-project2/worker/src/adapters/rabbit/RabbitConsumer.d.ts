import type { MessageConsumer } from "../../ports/MessageConsumer.js";
import type { MessageProcessor } from "../../app/MessageProcessor.js";
export declare class RabbitConsumer implements MessageConsumer {
    private processor;
    constructor(processor: MessageProcessor);
    start(): Promise<void>;
}
//# sourceMappingURL=RabbitConsumer.d.ts.map