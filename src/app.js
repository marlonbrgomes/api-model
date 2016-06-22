import cors       from 'cors';
import morgan     from 'morgan';
import express    from 'express';
import bodyParser from 'body-parser';

// Routes
import webservice from './services/webservice/sample';

const port = process.env.PORT || 8090;
const app  = express();

// Express Configurations
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'))
app.use(cors());

// Routes Import
app.use('/api/webservice', webservice);

app.listen(port, () => console.log('[x] Magic happens on port: ' + port));
