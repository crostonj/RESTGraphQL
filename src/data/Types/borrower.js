import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';

import addressType from './address.js';

let borrowerType =  new GraphQLObjectType({
    name: "Borrower",
    fields: ()  => ({
        Ssn: {type: GraphQLString},
        BirthDate:{type: GraphQLString},
        FirstName:{type: GraphQLString},
        MiddleInitial:{type: GraphQLString},
        LastName:{type: GraphQLString},
        Address: {type: addressType,
            resolve: () => {return (bor) => bor.Address}
        }
    })
});

export default borrowerType