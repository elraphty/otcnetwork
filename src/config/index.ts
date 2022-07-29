import 'dotenv/config';

export const grapeUrl = process.env.GRAPE_URL || 'http://127.0.0.1:30001';

export const grapeWorkerName = 'fibonacci_worker';

export const grapeServicePort = process.env.GRAPE_SERVICE_PORT || 1337;

export const apiPort = process.env.API_PORT || 8000;