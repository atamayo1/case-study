export interface MessageRepository {
    save(id: string, result: string): void;
    getAll(): [string, string][];
}
