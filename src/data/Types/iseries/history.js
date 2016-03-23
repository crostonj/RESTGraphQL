
import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';

import {
  globalIdField,
  fromGlobalId,
  nodeDefinitions,
  connectionDefinitions,
  connectionArgs,
  connectionFromPromisedArray,
  mutationWithClientMutationId
} from "graphql-relay";

let historyType = new GraphQLObjectType({
    name: 'BORROWERHISTORY',
    fields: () => ({
        CODE: { type: GraphQLString },
        CODEDESCRIPTION: { type: GraphQLString },
        DATE: { type: GraphQLString },
        EFFECTIVEDATE: { type: GraphQLString },
        ENDORSERNBR: { type: GraphQLString },
        GROUPAGINGFLAG: { type: GraphQLString },
        PROGRAM: { type: GraphQLString },
        SEQUENCENBR: { type: GraphQLString },
        SKIPTRACECONCAT: { type: GraphQLString },
        SSNMERGEUPDATE: { type: GraphQLString },
        TEXT: { type: GraphQLString },
        TIME: { type: GraphQLString },
        TYPE: { type: GraphQLString },
        TYPEDESCRIPTION: { type: GraphQLString },
        USER: { type: GraphQLString },
    })
});

let historyConnection = connectionDefinitions({
    name: 'Link',
    nodeType: historyType
  });

export default historyType;