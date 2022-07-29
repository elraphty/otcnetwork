import express, {Application} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Router files
app.use('/', routes);

export default app;