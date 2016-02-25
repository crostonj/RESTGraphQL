import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';

//import Resolver from '../../resolver.js'

let iAddressType = new GraphQLObjectType({
    name: 'ADDRESS',
    fields: () => ({
        ACTIVE: { type: GraphQLString },
        ADDRESS1: { type: GraphQLString },
        ADDRESS2: { type: GraphQLString },
        ADDRESS3: { type: GraphQLString },
        CAMPAIGN: { type: GraphQLString },
        CITY: { type: GraphQLString },
        COUNTRY: { type: GraphQLString },
        COUNTY: { type: GraphQLString },
        DATECREATED: { type: GraphQLString },
        FOREIGNCOUNTRY: { type: GraphQLString },
        INVALIDBYUSERID: { type: GraphQLString },
        INVALIDDATE: { type: GraphQLString },
        INVOKETRACK: { type: GraphQLString },
        SEQUENCENBR: { type: GraphQLInt },
        SERVICEATTEMPTDATE: { type: GraphQLString },
        SERVICECODE: { type: GraphQLString },
        SERVICERESPONSEDATE: { type: GraphQLString },
        SERVICERESPONSEUSER: { type: GraphQLString },
        SOURCE: { type: GraphQLString },
        STATE: { type: GraphQLString },
        STATUS: { type: GraphQLString },
        TIMECREATED: { type: GraphQLString },
        TYPE: { type: GraphQLString },
        ZIP: { type: GraphQLString }
    })

});

export default iAddressType;