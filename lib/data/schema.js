'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _book = require('./Types/book.js');

var _book2 = _interopRequireDefault(_book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = function Schema(id) {

    console.log(id);
    var schema = new _graphql.GraphQLSchema({
        query: _book2.default

        //mutation: ...
    });

    return schema;
};

exports.default = Schema;