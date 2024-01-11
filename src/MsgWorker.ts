import { RabbitMQQueueProvider } from "@twit2/std-library/dist/comm/providers/RabbitMqProvider"
import { MsgQueue, SessionVerifierMiddleware } from "@twit2/std-library";

/**
 * Initializes the credential worker.
 * @param url 
 */
async function init(url: string) {
    let mq = new RabbitMQQueueProvider();
    await mq.setup(url);

    const rpcc = new MsgQueue.rpc.RPCClient(mq);
    await rpcc.init('t2-auth-service');
    await SessionVerifierMiddleware.init(rpcc);
}

export const MsgWorker = {
    init
}