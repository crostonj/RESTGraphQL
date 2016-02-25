import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';

import Resolver from '../../resolver.js'
import iAddressType from './address.js'
import phoneType from './phone.js'
import historyType from './history.js'
import emailType from './email.js'

let iBorrowerType = new GraphQLObjectType({
    name: 'BORROWERINFO',
    fields: () => ({
        id: {type: GraphQLInt },
        DATERECORDADDED: { type: GraphQLString },
        SCHOOLCODE: { type: GraphQLString },
        LASTNAME: { type: GraphQLString },
        CITIZENSHIP: { type: GraphQLString },
        SCHOOLCERTDATE: { type: GraphQLString },
        ACCOUNTID: { type: GraphQLInt },
        ALIENIDNUMBER: { type: GraphQLInt },
        MIDDLEINITIAL: { type: GraphQLString },
        DATELASTCHANGED: { type: GraphQLString },
        ENROLLDATE: { type: GraphQLString },
        CHANGEDBYUSER: { type: GraphQLString },
        SCHOOLBRANCH: { type: GraphQLString },
        DRIVERSLICENSE: { type: GraphQLString },
        ENROLLEDSTATUS: { type: GraphQLString },
        DATEOFBIRTH: { type: GraphQLString },
        FIRSTNAME: { type: GraphQLString },
        DRIVERSLICENSESTATE: { type: GraphQLString },
        GRADSEPDATE: { type: GraphQLString },
        ENROLLMENTSOURCE: { type: GraphQLString },
        ADDRESSES: {
            type: new GraphQLList(iAddressType),
            resolve(obj, args, ast){
                return Resolver(obj.id).Address();
        }},
        PHONES: {
            type: new GraphQLList(phoneType),
            resolve(obj, args, ast){
                return Resolver(obj.id).Phone();
        }},
        EMAILS: {
            type: new GraphQLList(emailType),
            resolve(obj, args, ast){
                return Resolver(obj.id).Email();
        }},
        HISTORY: {
            type: new GraphQLList(historyType),
              args: {
                count: {
                    name: 'count',
                    type: new GraphQLNonNull(GraphQLInt)
                }
            },
            resolve(obj, args, ast){
                return Resolver(obj.id).History(args.count);
        }}
        
    })
});

export default iBorrowerType;