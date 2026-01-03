export interface MessagePublisher {
    publishResult(id: string, result: string): Promise<void>;
}
