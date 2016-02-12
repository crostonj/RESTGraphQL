'use strict';

var _schema = require('./data/schema.js');

var _schema2 = _interopRequireDefault(_schema);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _goodreadsService = require('./goodreadsService.js');

var _goodreadsService2 = _interopRequireDefault(_goodreadsService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 4000;

app.use('/graphql', (0, _expressGraphql2.default)({
    schema: (0, _schema2.default)(_goodreadsService2.default),
    graphiql: true
})).listen(port);