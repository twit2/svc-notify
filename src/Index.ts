import { configDotenv } from 'dotenv';
import express from 'express';
import http from 'http';
import { ErrorHandlingMiddleware, SessionVerifierMiddleware } from '@twit2/std-library';
import { MsgSocketServer } from './MsgSocketServer';
import { MsgWorker } from './MsgWorker';
require('express-async-errors');

// Load ENV parameters
configDotenv();

// Setup
// ------------------------------------------------
const app = express();
const server = http.createServer(app);
const port = process.env.HTTP_PORT ?? 3203;

// Use session verifier
app.use(SessionVerifierMiddleware.handle);

// Routes
// ------------------------------------------------


app.use(ErrorHandlingMiddleware.handle);

/**
 * Main entry point for program.
 */
async function main() {
    await MsgWorker.init(process.env.MQ_URL as string);

    // Listen at the port
    server.listen(port, async () => {
        console.log(`Messaging service active at port ${port}`);
        await MsgSocketServer.init(server);
    });
}

main();