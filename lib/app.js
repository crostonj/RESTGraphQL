'use strict';

var _schema = require('./data/schema.js');

var _schema2 = _interopRequireDefault(_schema);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import service from './Services/goodreadsService.js'
var bookService = require('./Services/goodreadsService')();
var graphQLServer = (0, _express2.default)();
var GRAPHQL_PORT = 4000;

graphQLServer.use('/graphql', (0, _expressGraphql2.default)({
  schema: (0, _schema2.default)(50),
  pretty: true,
  graphiql: true
}));
graphQLServer.listen(GRAPHQL_PORT, function () {
  return console.log('GraphQL Server is now running on http://localhost:' + GRAPHQL_PORT);
});