import express from 'express'
import schema from './schema.js';
import { graphql } from 'graphql';
import bodyParser from 'body-parser'
import { graphqlHTTP } from 'express-graphql';

const app = express()

app.use(bodyParser.text(
    {
        type: 'application/graphql'
    }));

app.use('/graphql', graphqlHTTP(
    {
        schema: schema,
        graphiql: true
    }));

app.post('/graphql', (req, res) => 
{
    graphql(schema, req.body)
    .then((result) => 
        {
            res.send(JSON.stringify(result, null, 2));
        });
});

let server = app.listen(4002, () =>
{
    let host = server.address().address;
    let port = server.address().port;
    console.log('No-graphQL is listening at http://%s:%s', host, port);
});

