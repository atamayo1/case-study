export class InMemoryRepository {
    results = new Map();
    save(id, result) {
        this.results.set(id, result);
    }
    getAll() {
        return Array.from(this.results.entries());
    }
}
//# sourceMappingURL=InMemoryRepository.js.map