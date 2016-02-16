import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
} from 'graphql';

import axios from 'Axios'

function GetIt() {
    var options = {
        host: 'www.goodreads.com',
        path: '/book/show/' + 50 + '?format=xml&key=bJU4WwEpv8QaM42iR586YA'
    };

    axios.get(options.host + options.path)
        .then((response) => {
            console.log(response);

            return response;
        })
        .catch((response) => {
            console.log(response);

            return response;
        });
}


let bookType =  new GraphQLObjectType({
                name: 'book',
                fields: () => ({
                    idField: { type: GraphQLInt },
                    titleField: { type: GraphQLString },
                    isbnField: { type: GraphQLString },
                    isbn13Field: { type: GraphQLString },
                    asinField: { type: GraphQLString },
                    kindle_asinField: { type: GraphQLString },
                    marketplace_idField: { type: GraphQLString },
                    country_codeField: { type: GraphQLString },
                    image_urlField: { type: GraphQLString },
                    small_image_urlField: { type: GraphQLString },
                    publication_yearField: { type: GraphQLString },
                    publication_monthField: { type: GraphQLString },
                    publication_dayField: { type: GraphQLString },
                    publisherField: { type: GraphQLString },
                    language_codeField: { type: GraphQLString },
                    is_ebookField: { type: GraphQLString },
                    average_ratingField: { type: GraphQLString },
                    num_pagesField: { type: GraphQLInt },
                    formatField: { type: GraphQLString },
                    edition_informationField: { type: GraphQLString },
                    ratings_countField: { type: GraphQLInt },
                    text_reviews_countField: { type: GraphQLInt },
                    urlField: { type: GraphQLString },
                    linkField: { type: GraphQLString }
                })
});


let queryType = new GraphQLObjectType({
    name: 'Query',
    description: `A book from goodreads' catalog`,
    fields: () => ({
        book: {
            type: bookType,
                args: {
                    id: {
                        name: 'id',
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (parent, args, ast) => {
                    try {
                        console.log('Resolving')
                        var options = {
                            host: 'www.goodreads.com',
                            path: '/book/show/' + 50 + '/?format=xml&key=bJU4WwEpv8QaM42iR586YA'
                        };

                        axios.get(options.host + options.path)
                            .then((response) => {
                                console.log(response);

                                return response;
                            })
                            .catch((response) => {
                                console.log(response);

                                return response;
                            });
                    } catch (error) {
                        console.log(error)

                    }
                }

        }
    })
});


export default queryType;