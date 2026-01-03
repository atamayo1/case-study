import type { MessagePublisher } from "../../ports/MessagePublisher.js";
export declare class RabbitPublisher implements MessagePublisher {
    private channel;
    connect(): Promise<void>;
    publishResult(id: string, result: string): Promise<void>;
}
//# sourceMappingURL=RabbitPublisher.d.ts.map