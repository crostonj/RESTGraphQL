'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GetIt() {
    var options = {
        host: 'www.goodreads.com',
        path: '/book/show/' + 50 + '?format=xml&key=bJU4WwEpv8QaM42iR586YA'
    };

    _Axios2.default.get(options.host + options.path).then(function (response) {
        console.log(response);

        return response;
    }).catch(function (response) {
        console.log(response);

        return response;
    });
}

var bookType = new _graphql.GraphQLObjectType({
    name: 'Query',
    description: 'A book from goodreads\' catalog',
    fields: function fields() {
        return {
            book: {
                type: new _graphql.GraphQLObjectType({
                    name: 'Book',
                    fields: function fields() {
                        return {
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
                    },
                    args: {
                        id: {
                            name: 'id',
                            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
                        }
                    },
                    resolve: function resolve(parent, args, ast) {
                        try {
                            console.log('Resolving');
                            var options = {
                                host: 'www.goodreads.com',
                                path: '/book/show/' + 50 + '/?format=xml&key=bJU4WwEpv8QaM42iR586YA'
                            };

                            _Axios2.default.get(options.host + options.path).then(function (response) {
                                console.log(response);

                                return response;
                            }).catch(function (response) {
                                console.log(response);

                                return response;
                            });
                        } catch (error) {
                            console.log(error);
                        }
                    }

                })

            }
        };
    }
});

exports.default = bookType;