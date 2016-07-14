import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';


import { Promise } from 'es6-promise';
import xml2json from 'xml2js';
import http from 'http';


import bookType from './Types/goodreads/book.js';
import borrowerType from './Types/workspace/borrower.js';
import iBorrowerType from './Types/iseries/borrowerInfo.js';
import Resolver from './resolver.js';


var parser = xml2json.Parser({
    explicitArray: false
});


let rootQuery = new GraphQLObjectType({
    name: 'Query',
    description: `The root query`,
    fields: () => ({
        iBorrower: {
            type: iBorrowerType,
            args: {
                id: {
                    name: 'id',
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (obj, args, ast) => {
                return Resolver(args.id).Borrower();
            }
        },
        Book: {
            type: bookType,
            args: {
                id: {
                    name: 'id',
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (parent, args, ast) => {
                //http://stackoverflow.com/questions/19327297/node-http-get-how-do-i-get-at-the-xml-returned-so-i-can-do-stuff-with-it
                var options = {
                    hostname: "www.goodreads.com",
                    path: '/book/show/' + args.id + '/?format=xml&key=bJU4WwEpv8QaM42iR586YA'
                };

                return new Promise((resolve, reject) => {
                    http.get(options, (response) => {
                        var completeResponse = '';
                        response.on('data', (chunk) => {
                            completeResponse += chunk;
                        });
                        response.on('end', () => {
                            parser.parseString(completeResponse, (err, result) => {
                                resolve(result.GoodreadsResponse.book)
                            })
                        });
                    }).on('error', (e) => { });
                });
            }
        },
        Borrower: {
            type: borrowerType,
            args: {
                id: {
                    name: 'id',
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (parent, args, ast) => {
                //http://dev.intsvc.nelnet.net:4106/api/workspace/v1/borrowersummarybyssn/1/1/US/jcroston/224558098/205c26ab-e9fc-457e-a7d1-aaa8927485ae

                var options = {
                    hostname: "dev.intsvc.nelnet.net",
                    path: '/api/workspace/v1/borrowersummarybyssn/1/1/US/jcroston/' + args.id + '/205c26ab-e9fc-457e-a7d1-aaa8927485ae',
                    port: 4106
                };

                return new Promise((resolve, reject) => {
                    http.get(options, (response) => {
                        var completeResponse = '';
                        response.on('data', (chunk) => {
                            completeResponse += chunk;
                        });
                        response.on('end', () => {
                            let out = JSON.parse(completeResponse)
                            resolve(out)
                        });
                    }).on('error', (e) => { });
                });
            }
        }
    })
});

export default rootQuery;