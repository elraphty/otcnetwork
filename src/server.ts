import { PeerRPCServer } from 'grenache-nodejs-ws';
import Link from 'grenache-nodejs-link';
import { Otc } from '../interfaces';
import { grapeUrl, grapeWorkerName } from "./config";
import DB from './services/db';

const db = new DB();

const link = new Link({
  grape: grapeUrl,
})

link.start();

const peer = new PeerRPCServer(link, {});
peer.init();

const service = peer.transport('server');

service.listen(1337);

setInterval(() => {
  link.announce(grapeWorkerName, service.port, {})
}, 1000)

service.on('request', (rid: any, key: any, payload: Otc.Db, handler: any) => {
  // Add to the Db
  db.add(payload);
  
  // Reply grape request 
  handler.reply(null, payload)
})