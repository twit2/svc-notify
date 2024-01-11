import { Server as HTTPServer } from "http";
import { Socket, Server as WSServer } from 'socket.io';
import { DMSession } from "./types/DMSession";
import { ResponseCreator } from "./msg/ResponseCreator";
import { handleAuthEvent } from "./events/AuthEvent";

let io: WSServer;
let sessions: DMSession[];

/**
 * Sends an error message.
 * @param socket The socket to send the message to.
 * @param message The message to send.
 */
async function sendError(socket: Socket, message: string) {
    socket.emit('ui-error', ResponseCreator.create(false, message));
}

/**
 * Registers all socket events for the specified client.
 * @param socket The socket to register events for.
 */
function registerPrivilegedEvents(socket: Socket) {
    
}

/**
 * Initializes the DM socket server.
 */
async function init(server: HTTPServer) {
    io = new WSServer(server);
    console.log('Web socket server started.');

    io.on('connect', (socket) => {
        // Register unprivileged auth event
        // Privileged events will be given once authentication has completed successfully
        socket.on('auth', (token: string)=>handleAuthEvent(socket, token));
    });
}

export const MsgSocketServer = {
    init,
    sendError,
    registerPrivilegedEvents
}