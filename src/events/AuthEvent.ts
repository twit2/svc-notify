import { Socket } from "socket.io";
import { MsgSocketServer } from "../MsgSocketServer";

/**
 * Handles the authentication event.
 * @param token The token to deal with.
 */
export function handleAuthEvent(socket: Socket, token: string) {
    if(typeof token !== 'string') {
        MsgSocketServer.sendError(socket, "Invalid token specified.");
        return;
    }
    
    console.log("Verifying token!");
}