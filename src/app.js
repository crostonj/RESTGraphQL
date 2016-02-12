import schema from './data/schema.js'
import GraphQLHTTP from 'express-graphql'
import express from 'express'

import service from './Services/goodreadsService.js'

var app = express();
var port = 4000;

app.use('/graphql', GraphQLHTTP({ 
    schema: schema(service, 50), 
    graphiql: true 
    }))
  .listen(port); 

