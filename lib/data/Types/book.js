'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parser = _xml2js2.default.Parser({
    explicitArray: false
});

function GetIt() {
    var options = {
        host: 'www.goodreads.com',
        path: '/book/show/' + 50 + '?format=xml&key=bJU4WwEpv8QaM42iR586YA'
    };

    _Axios2.default.get(options.host + options.path).then(function (response) {
        parser.parseString(response, function (err, result) {
            console.log(result.GoodreadsResponse.book);
            return result.GoodreadsResponse.book;
        });
    }).catch(function (response) {

        return response;
    });
}

var bookType = new _graphql.GraphQLObjectType({
    name: 'Book',
    fields: function fields() {
        return {
            id: {
                type: _graphql.GraphQLInt,
                resolve: function resolve(it) {
                    return it.id;
                }
            },
            title: { type: _graphql.GraphQLString },
            isbn: { type: _graphql.GraphQLString },
            isbn13: { type: _graphql.GraphQLString },
            asin: { type: _graphql.GraphQLString },
            kindle_asin: { type: _graphql.GraphQLString },
            marketplace_id: { type: _graphql.GraphQLString },
            country_code: { type: _graphql.GraphQLString },
            image_url: { type: _graphql.GraphQLString,
                resolve: function resolve(it) {
                    return it.image_url;
                } },
            small_image_url: { type: _graphql.GraphQLString },
            publication_year: { type: _graphql.GraphQLString },
            publication_month: { type: _graphql.GraphQLString },
            publication_day: { type: _graphql.GraphQLString },
            publisher: { type: _graphql.GraphQLString },
            language_code: { type: _graphql.GraphQLString },
            is_ebook: { type: _graphql.GraphQLString },
            average_rating: { type: _graphql.GraphQLString },
            num_pages: { type: _graphql.GraphQLInt },
            format: { type: _graphql.GraphQLString },
            edition_information: { type: _graphql.GraphQLString },
            ratings_count: { type: _graphql.GraphQLInt },
            text_reviews_count: { type: _graphql.GraphQLInt },
            url: { type: _graphql.GraphQLString },
            link: { type: _graphql.GraphQLString }
        };
    }
});

var queryType = new _graphql.GraphQLObjectType({
    name: 'Query',
    description: 'A book from goodreads\' catalog',
    fields: function fields() {
        return {
            Book: {
                type: bookType,
                args: {
                    id: {
                        name: 'id',
                        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
                    }
                },
                resolve: function resolve(parent, args, ast) {

                    var googleAPIClient = _Axios2.default.create();

                    googleAPIClient.interceptors.request.use(function (config) {
                        return new Promise(function (resolve) {});
                    });

                    googleAPIClient.get('http://www.goodreads.com/book/show/' + args.id + '/?format=xml&key=bJU4WwEpv8QaM42iR586YA', {
                        'Content-Type': 'text/html'
                    }).then(function (response) {
                        console.log(response.status); // ex.: 200
                        parser.parseString(response.data, function (err, result) {
                            console.log(result.GoodreadsResponse.book);
                            return result.GoodreadsResponse.book;
                        });
                    }).catch(function (response) {
                        console.log(response.status); // ex.: 200
                        return response;
                    });
                }

            }
        };
    }
});

exports.default = queryType;