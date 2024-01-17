import { WSMessage } from "../types/WSResponseObject";

/**
 * Creates a new WebSocket response object.
 * @param success Whether the operation was successful.
 * @param message The message to send.
 * @param data The data.
 * @returns 
 */
function create<T>(success: boolean, message?: string, data?: T) : WSMessage<T> {
    return {
        success,
        message: message ?? "",
        data
    }
}

export const ResponseCreator = {
    create
}