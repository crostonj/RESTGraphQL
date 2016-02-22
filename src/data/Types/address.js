import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';

let addressType = new GraphQLObjectType({
    name: 'Address',
    fields: () => ({
        IsActive:  { type: GraphQLString },
        IsValid: { type: GraphQLString },
        AddDate: { type: GraphQLString },
        SystemName: { type: GraphQLString },
        EntityState: { type: GraphQLString },
        LastUpdated: { type: GraphQLString },
        AddressLine1: { type: GraphQLString },
        AddressLine2: { type: GraphQLString },
        City: { type: GraphQLString },
        State: { type: GraphQLString },
        Zip: { type: GraphQLString },
        Country: { type: GraphQLString },
        AddressType: { type: GraphQLString },
        Priority: { type: GraphQLString },
        AddressStatus: { type: GraphQLString }
    })   
});

export default addressType;