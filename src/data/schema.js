import {
GraphQLObjectType,
GraphQLNonNull,
GraphQLSchema,
GraphQLInt,
GraphQLList,
GraphQLString
} from 'graphql';

import axios from 'Axios';
import queryType from './Types/book.js';

let Schema = (id) => {

    let schema = new GraphQLSchema({
        query: queryType
        //mutation: ...
    });

    return schema
}

export default Schema;
