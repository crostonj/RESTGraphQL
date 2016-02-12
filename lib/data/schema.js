'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var data = [{ counter: 42 }, { counter: 43 }, { counter: 44 }];

var Schema = function Schema(service) {
    var linkType = new _graphql.GraphQLObjectType({
        name: 'Counter',
        fields: function fields() {
            return {
                _id: { type: _graphql.GraphQLInt },
                title: { type: _graphql.GraphQLString },
                url: { type: _graphql.GraphQLString }
            };
        }
    });

    var schema = new _graphql.GraphQLSchema({
        query: new _graphql.GraphQLObjectType({
            name: 'Query',
            fields: function fields() {
                return {
                    links: {
                        type: new _graphql.GraphQLList(linkType),
                        resolve: function resolve() {}
                    }

                };
            }
        })

        //mutation: ...
    });

    return schema;
};

exports.default = Schema;