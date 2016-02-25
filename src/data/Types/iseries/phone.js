import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';


let phoneType = new GraphQLObjectType({
    name: 'PHONE',
    fields: () => ({
        ACTIVE: { type: GraphQLString },
        AREACODE: { type: GraphQLString },
        CALLTIME: { type: GraphQLString },
        CAMPAIGN: { type: GraphQLString },
        CELLPHONECONSENT: { type: GraphQLString },
        CONTACT: { type: GraphQLString },
        DATECREATED: { type: GraphQLString },
        EXTENSION: { type: GraphQLString },
        FOREIGN: { type: GraphQLString },
        FOREIGNEXCHANGE: { type: GraphQLString },
        INDICATOR: { type: GraphQLString },
        INVALIDBYUSERID: { type: GraphQLString },
        INVALIDDATE: { type: GraphQLString },
        INVOKETRACK: { type: GraphQLString },
        LASTCONTACTDATE: { type: GraphQLString },
        NUMBER: { type: GraphQLString },
        SEQUENCENBR: { type: GraphQLString },
        SERVICEATTEMPTDATE: { type: GraphQLString },
        SERVICECODE: { type: GraphQLString },
        SERVICERESPONSEDATE: { type: GraphQLString },
        SERVICERESPONSEUSER: { type: GraphQLString },
        SOURCE: { type: GraphQLString },
        STATUS: { type: GraphQLString },
        TIMECREATED: { type: GraphQLString },
        TIMEZONE: { type: GraphQLString },
        TYPE: { type: GraphQLString }
    })
});

export default phoneType;