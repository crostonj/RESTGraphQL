'use strict';

Object.defineProperty(exports, "__esModule", {
            value: true
});

var _graphql = require('graphql');

var Schema = function Schema(service, id) {
            var bookType = new _graphql.GraphQLObjectType({
                        name: 'Books',
                        fields: function fields() {
                                    return {
                                                _id: { type: _graphql.GraphQLInt },
                                                title: { type: _graphql.GraphQLString },
                                                url: { type: _graphql.GraphQLString },
                                                idField: { type: _graphql.GraphQLInt },
                                                titleField: { type: _graphql.GraphQLString },

                                                isbnField: { type: _graphql.GraphQLString },

                                                isbn13Field: { type: _graphql.GraphQLString },

                                                asinField: { type: _graphql.GraphQLString },

                                                kindle_asinField: { type: _graphql.GraphQLString },

                                                marketplace_idField: { type: _graphql.GraphQLString },

                                                country_codeField: { type: _graphql.GraphQLString },

                                                image_urlField: { type: _graphql.GraphQLString },

                                                small_image_urlField: { type: _graphql.GraphQLString },

                                                publication_yearField: { type: _graphql.GraphQLString },

                                                publication_monthField: { type: _graphql.GraphQLString },

                                                publication_dayField: { type: _graphql.GraphQLString },

                                                publisherField: { type: _graphql.GraphQLString },

                                                language_codeField: { type: _graphql.GraphQLString },

                                                is_ebookField: { type: _graphql.GraphQLString },

                                                average_ratingField: { type: _graphql.GraphQLString },

                                                num_pagesField: { type: _graphql.GraphQLInt },

                                                formatField: { type: _graphql.GraphQLString },
                                                edition_informationField: { type: _graphql.GraphQLString },

                                                ratings_countField: { type: _graphql.GraphQLInt },

                                                text_reviews_countField: { type: _graphql.GraphQLInt },

                                                urlField: { type: _graphql.GraphQLString },

                                                linkField: { type: _graphql.GraphQLString }

                                    };
                        }
            });

            var schema = new _graphql.GraphQLSchema({
                        query: new _graphql.GraphQLObjectType({
                                    name: 'Query',
                                    fields: function fields() {
                                                return {
                                                            book: {
                                                                        type: new _graphql.GraphQLList(bookType),
                                                                        resolve: function resolve() {
                                                                                    [service.getBookById(id)];
                                                                        }
                                                            }

                                                };
                                    }
                        })

                        //mutation: ...
            });

            return schema;
};

exports.default = Schema;