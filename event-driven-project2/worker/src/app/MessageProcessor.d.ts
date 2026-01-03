import type { Message } from "../domain/Message.js";
import type { MessagePublisher } from "../ports/MessagePublisher.js";
export declare class MessageProcessor {
    private resultPublisher;
    constructor(resultPublisher: MessagePublisher);
    process(message: Message): Promise<void>;
}
//# sourceMappingURL=MessageProcessor.d.ts.map