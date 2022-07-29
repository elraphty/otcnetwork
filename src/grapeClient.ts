const {PeerRPCClient} = require('grenache-nodejs-ws');
const Link = require('grenache-nodejs-link');
import {grapeUrl} from "./config";

const link = new Link({
  grape: grapeUrl,
  requestTimeout: 5000
})

link.start();

const peer = new PeerRPCClient(link, {});

peer.init();

export default peer;