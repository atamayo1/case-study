import type { Message } from "../domain/Message.js";
export interface MessagePublisher {
    publish(message: Message): Promise<void>;
}
//# sourceMappingURL=MessagePublisher.d.ts.map