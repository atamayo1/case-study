import type { MessageRepository } from "../ports/MessageRepository.js";
export declare class InMemoryRepository implements MessageRepository {
    private results;
    save(id: string, result: string): void;
    getAll(): [string, string][];
}
//# sourceMappingURL=InMemoryRepository.d.ts.map