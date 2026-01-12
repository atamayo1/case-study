import type { MessageRepository } from "../ports/MessageRepository.js";


export class InMemoryRepository implements MessageRepository {
    private readonly results = new Map<string, string>();

    save(id: string, result: string): void {
        this.results.set(id, result);
    }

    getAll(): [string, string][] {
        return Array.from(this.results.entries());
    }
}
