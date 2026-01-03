import type { MessagePublisher } from "../ports/MessagePublisher.js";
import type { MessageRepository } from "../ports/MessageRepository.js";
export declare class MessageService {
    private publisher;
    private repository;
    constructor(publisher: MessagePublisher, repository: MessageRepository);
    send(content: string): Promise<void>;
    getResults(): [string, string][];
}
//# sourceMappingURL=MessageService.d.ts.map