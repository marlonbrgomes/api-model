import cors       from 'cors';
import morgan     from 'morgan';
import express    from 'express';
import jwt        from 'express-jwt';
import bodyParser from 'body-parser';

// Routes
import webservice from './v1/services/webservice/sample';

const port = process.env.PORT || 8090;
const app  = express();

// Express Configurations
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'))

// Validation of API token (API Security)
app.use(jwt({secret: 'secret'}));
app.use((err, req, res, next) => {
  if(err.name === 'UnauthorizedError')
    res.status(401).send({payload: {err: err.name, stack: 'Invalid Token'}});
})

// Routes Import
app.use('/v1/webservice', webservice);

app.listen(port, () => console.log('[x] Magic happens on port: ' + port));
