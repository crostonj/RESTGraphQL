import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';

import xml2json from 'xml2js';

var parser = xml2json.Parser({
    explicitArray: false
});


import axios from 'Axios'
import querystring from 'querystring'

function GetIt() {
    var options = {
        host: 'www.goodreads.com',
        path: '/book/show/' + 50 + '?format=xml&key=bJU4WwEpv8QaM42iR586YA'
    };

    axios.get(options.host + options.path)
        .then((response) => {
            parser.parseString(response, (err, result) => {
                console.log(result.GoodreadsResponse.book);
                return result.GoodreadsResponse.book;
            });

        })
        .catch((response) => {

            return response;
        });
}


let bookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { 
            type: GraphQLInt,
            resolve: it => it.id
        },
        title: { type: GraphQLString },
        isbn: { type: GraphQLString },
        isbn13: { type: GraphQLString },
        asin: { type: GraphQLString },
        kindle_asin: { type: GraphQLString },
        marketplace_id: { type: GraphQLString },
        country_code: { type: GraphQLString },
        image_url: { type: GraphQLString,
            resolve: it => it.image_url},
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


                let googleAPIClient = axios.create();
                
                googleAPIClient.interceptors.request.use((config) => {
                        return new Promise((resolve) => {
                     })
                    });

                googleAPIClient.get('http://www.goodreads.com/book/show/' + args.id + '/?format=xml&key=bJU4WwEpv8QaM42iR586YA', {
                    'Content-Type': 'text/html'
                })
                    .then((response) => {
                        console.log(response.status); // ex.: 200
                        parser.parseString(response.data, (err, result) => {
                            console.log(result.GoodreadsResponse.book);
                            return result.GoodreadsResponse.book;
                        });
                    })
                    .catch((response) => {
                        console.log(response.status); // ex.: 200
                        return response;
                    });
            }

        }
    })
});


export default queryType;