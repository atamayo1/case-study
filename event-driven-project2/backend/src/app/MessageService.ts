import type { Message } from "../domain/Message.js";
import type { MessagePublisher } from "../ports/MessagePublisher.js";
import type { MessageRepository } from "../ports/MessageRepository.js";


export class MessageService {
    constructor(
        private publisher: MessagePublisher,
        private repository: MessageRepository
    ) { }

    async send(content: string) {
        const message: Message = {
            id: Date.now().toString(),
            content
        };

        await this.publisher.publish(message);
        this.repository.save(message.id, "SENT");
    }

    getResults() {
        return this.repository.getAll();
    }
}
