
import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList,
GraphQLBoolean
} from 'graphql';

let phoneType = new GraphQLObjectType({
    name: 'Phone',
    fields: () => ({
        Prefix: { type: GraphQLString },
        PhoneType: { type: GraphQLString },
        AddDate: { type: GraphQLString },
        IsCellPhone: { type: GraphQLBoolean },
        IsActive: { type: GraphQLBoolean },
        SystemName: { type: GraphQLString },
        LastUpdated: { type: GraphQLString },
        IsValid: { type: GraphQLBoolean },
        OutOfSync: { type: GraphQLBoolean },
        CountryCode: { type: GraphQLString },
        PhoneNumber: { type: GraphQLString },
        Priority: { type: GraphQLInt },
        CpcFlag: { type: GraphQLString },
        CpcDate: { type: GraphQLString },
        IsInternational: { type: GraphQLBoolean },
        InternationalPhoneExchange: { type: GraphQLString },
    })
});

export default phoneType;