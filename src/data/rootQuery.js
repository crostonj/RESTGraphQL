import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';


import { Promise } from 'es6-promise';
import xml2json from 'xml2js';
import http from 'http';


import bookType from './Types/goodreads/book.js';
import borrowerType from './Types/workspace/borrower.js';
import iBorrowerType from './Types/iseries/borrowerInfo.js';
import Resolver from './resolver.js';


var parser = xml2json.Parser({
    explicitArray: false
});


let rootQuery = new GraphQLObjectType({
    name: 'Query',
    description: `The root query`,
    fields: () => ({
        iBorrower: {
            type: iBorrowerType,
            args: {
                id: {
                    name: 'id',
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (obj, args, ast) => {
                return Resolver(args.id).Borrower();
            }
        }
       
    })
});

export default rootQuery;