import schema from './data/schema.js'
import GraphQLHTTP from 'express-graphql'
import express from 'express'

//import service from './Services/goodreadsService.js'
var graphQLServer = express();
var GRAPHQL_PORT = 4000;

graphQLServer.use('/', GraphQLHTTP({ 
    schema: schema(50), 
      pretty: true,
    graphiql: true 
    }))
 graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));
 