export interface WSMessage<T> {
    success: boolean;
    message: string;
    data?: T;
}