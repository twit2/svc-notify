export interface WSResponseObject<T> {
    success: boolean;
    message: string;
    data?: T;
}