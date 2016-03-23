import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';

import borrowerType from '';

let MutationAdd = {
  type: borrowerType,
  description: 'Add a Todo',
  args: {
    title: {
      name: 'Todo title',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, {title}) => {
    TODOs.push({
      id: (new Date()).getTime(),
      title: title,
      completed: false
    });
    return TODOs;
  }
};

let MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    add: MutationAdd
  }
});


