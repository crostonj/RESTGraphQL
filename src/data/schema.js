import {
GraphQLObjectType,
GraphQLNonNull,
GraphQLSchema,
GraphQLInt,
GraphQLList,
GraphQLString
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

import rootQuery from './rootQuery.js';
import MutationType from './mutation.js'

let Schema = (id) => {

    let schema = new GraphQLSchema({
        query: rootQuery,
        mutation: MutationType
    });

    return schema
}
var {connectionType: ShipConnection} =
  connectionDefinitions({nodeType: shipType});
  

var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'Borrower') {
      return getUser(id);
    } else if (type === 'iBorrower') {
      return getWidget(id);
    } else if (type === 'Book') {
      return getWidget(id);
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof User) {
      return userType;
    } else if (obj instanceof Widget)  {
      return widgetType;
    } else {
      return null;
    }
  }
);
export default Schema;
