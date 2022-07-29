import { PeerRPCServer } from 'grenache-nodejs-ws';
import Link from 'grenache-nodejs-link';

function fibonacci (n: number): number {
  if (n <= 1) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

const link = new Link({
  grape: 'http://127.0.0.1:30001',
});

link.start();

const peer = new PeerRPCServer(link, {});
peer.init();

const service = peer.transport('server');

service.listen(1337);

setInterval(() => {
  link.announce('fibonacci_worker', service.port, {})
}, 10000)

service.on('request', (rid: any, key: any, payload: any, handler: any) => {
  // console.log('Payload ==', payload)
  const result = fibonacci(payload.number)
  handler.reply(null, result)
})