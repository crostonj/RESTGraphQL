
import fs from 'fs';
import schema from './data/schema.js'
import GraphQLHTTP from 'express-graphql'
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';
import express from 'express'

//import service from './Services/goodreadsService.js'
var graphQLServer = express();
var GRAPHQL_PORT = 4000;

graphQLServer.use(express.static('public'));

graphQLServer.use('/', GraphQLHTTP({ 
    schema: schema, 
      pretty: true,
    graphiql: true 
    }));
 graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));
 
  // Generate schema.json
    let json = graphql(schema, introspectionQuery);
    fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
      if (err) throw err;

      console.log("JSON schema created");
    });
 