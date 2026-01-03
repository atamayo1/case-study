export class MessageService {
    publisher;
    repository;
    constructor(publisher, repository) {
        this.publisher = publisher;
        this.repository = repository;
    }
    async send(content) {
        const message = {
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
//# sourceMappingURL=MessageService.js.map