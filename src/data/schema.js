import {
GraphQLObjectType,
GraphQLNonNull,
GraphQLSchema,
GraphQLInt,
GraphQLList,
GraphQLString
} from 'graphql';

import axios from 'Axios';
import rootQuery from './rootQuery.js';

let Schema = (id) => {

    let schema = new GraphQLSchema({
        query: rootQuery
        //mutation: ...
    });

    return schema
}

export default Schema;
