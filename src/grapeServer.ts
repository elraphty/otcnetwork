import {PeerRPCServer} from 'grenache-nodejs-ws';
import Link from 'grenache-nodejs-link';
import {Otc} from '../interfaces';
import {grapeUrl, grapeWorkerName, grapeServicePort} from "./config";
import DB from './services/db';

const db = new DB();

const link = new Link({
  grape: grapeUrl,
})

link.start();

const peer = new PeerRPCServer(link, {});

peer.init();

const service = peer.transport('server');

service.listen(Number(grapeServicePort));

setInterval(() => {
  link.announce(grapeWorkerName, service.port, {})
}, 1000)

service.on('request', (rid: any, key: any, payload: Otc.Db, handler: any) => {
  // Add to the Db
  db.add(payload);
  
  // Get otcs drom db to see if there is a  match
  const otcs = db.get(payload);

  if(otcs && otcs instanceof Array && otcs.length > 1) {
    // Reply grape request 
    handler.reply(null, otcs)
  } else {
    handler.reply(null, 'No matching otc')
  }
})