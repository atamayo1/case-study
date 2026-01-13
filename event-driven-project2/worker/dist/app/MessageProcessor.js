export class MessageProcessor {
    resultPublisher;
    constructor(resultPublisher) {
        this.resultPublisher = resultPublisher;
    }
    async process(message) {
        const result = `Processed: ${message.content}`;
        console.log(result);
        await this.resultPublisher.publishResult(message.id, result);
    }
}
