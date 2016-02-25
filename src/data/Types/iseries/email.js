import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';

//import Resolver from '../../resolver.js'

let emailType = new GraphQLObjectType({
    name: 'EMAIL',
    fields: () => ({
        ACTIVE: { type: GraphQLString },
        ADDRESS: { type: GraphQLString },
        CAMPAIGN: { type: GraphQLString },
        CHANGEDDATE: { type: GraphQLString },
        CHANGEDUSER: { type: GraphQLString },
        CONTACT: { type: GraphQLString },
        DATECREATED: { type: GraphQLString },
        INDICATOR: { type: GraphQLString },
        INVALIDBYUSERID: { type: GraphQLString },
        INVALIDDATE: { type: GraphQLString },
        INVOKETRACK: { type: GraphQLString },
        LASTCONTACTDATE: { type: GraphQLString },
        SEQUENCENBR: { type: GraphQLInt },
        SERVICEATTEMPTDATE: { type: GraphQLString },
        SERVICECODE: { type: GraphQLString },
        SERVICERESPONSEDATE: { type: GraphQLString },
        SERVICERESPONSEUSER: { type: GraphQLString },
        STATUS: { type: GraphQLString },
        TIMECREATED: { type: GraphQLString },
        TYPE: { type: GraphQLString }
    })

});

export default emailType;