import type { Message } from "../domain/Message.js";
import type { MessagePublisher } from "../ports/MessagePublisher.js";


export class MessageProcessor {
    constructor(
        private resultPublisher: MessagePublisher
    ) { }

    async process(message: Message) {
        // Simulación de procesamiento
        const result = `Processed: ${message.content}`;
        console.log(result);

        await this.resultPublisher.publishResult(message.id, result);
    }
}
