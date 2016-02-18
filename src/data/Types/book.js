import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';

import request from 'superagent';
import { Promise } from 'es6-promise';
import xml2json from 'xml2js';
import superagentxml2jsparser from 'superagent-xml2jsparser';
import http from 'http'

var parser = xml2json.Parser({
    explicitArray: false
});


import axios from 'Axios'
//import querystring from 'querystring'


let bookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { 
            type: GraphQLInt,
            resolve: (book) => book.id
        },
        title: { type: GraphQLString },
        isbn: { type: GraphQLString },
        isbn13: { type: GraphQLString },
        asin: { type: GraphQLString },
        kindle_asin: { type: GraphQLString },
        marketplace_id: { type: GraphQLString },
        country_code: { type: GraphQLString },
        image_url: { type: GraphQLString,
            resolve: (book) =>book.image_url},
        small_image_url: { type: GraphQLString },
        publication_year: { type: GraphQLString },
        publication_month: { type: GraphQLString },
        publication_day: { type: GraphQLString },
        publisher: { type: GraphQLString },
        language_code: { type: GraphQLString },
        is_ebook: { type: GraphQLString },
        average_rating: { type: GraphQLString },
        num_pages: { type: GraphQLInt },
        format: { type: GraphQLString },
        edition_information: { type: GraphQLString },
        ratings_count: { type: GraphQLInt },
        text_reviews_count: { type: GraphQLInt },
        url: { type: GraphQLString },
        link: { type: GraphQLString }
    })
});


let queryType = new GraphQLObjectType({
    name: 'Query',
    description: `A book from goodreads' catalog`,
    fields: () => ({
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
                return new Promise(function(resolve, reject) {
                    var gsaReq =  http.default.get(options, function (response) {
                        var completeResponse = '';
                        response.on('data', function (chunk) {
                            completeResponse += chunk;
                        });
                        response.on('end', function () {
                            parser.parseString(completeResponse, (err, result) => {
                                resolve(result.GoodreadsResponse.book)
                            })
                        });
                    }).on('error', function (e) {
                        console.log('problem with request: ' + e.message);
                    });
            });
              //  return new Promise(function(resolve, reject) {
              //      request                       
              //          .get('http://www.goodreads.com/book/show/' + args.id + '/?format=xml&key=bJU4WwEpv8QaM42iR586YA')
              //          .accept('xml')
              //          .parse(superagentxml2jsparser)
              //          .end((err, res) => {
              //              if (!err) {
              //                 console.log(res);
              //                  resolve(res.body);
              //              } 
              //          });
              //  });
  
             //   let googleAPIClient = axios.create();
             //   googleAPIClient.get('http://www.goodreads.com/book/show/' + args.id + '/?format=xml&key=bJU4WwEpv8QaM42iR586YA', {
             //       'Content-Type': 'text/html'
             //   })
             //   .then((response) => {
             //       console.log(response.status); // ex.: 200
             //       parser.parseString(response.data, (err, result) => {
             //           console.log(result.GoodreadsResponse.book);
             //           return new Promise((resolve, reject) => {
             //               resolve(result.GoodreadsResponse.book)
             //           })
             //      });
             //   })
             //   .catch((response) => {
             //       console.log(response.status); // ex.: 200
             //       return response;
             //   });
                     
            }
        }
    })
});


export default queryType;