import type { Message } from "../../domain/Message.js";
import type { MessagePublisher } from "../../ports/MessagePublisher.js";
export declare class RabbitPublisher implements MessagePublisher {
    private channel;
    connect(): Promise<void>;
    publish(message: Message): Promise<void>;
}
//# sourceMappingURL=RabbitPublisher.d.ts.map