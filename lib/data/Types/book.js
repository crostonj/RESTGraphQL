'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _es6Promise = require('es6-promise');

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var _superagentXml2jsparser = require('superagent-xml2jsparser');

var _superagentXml2jsparser2 = _interopRequireDefault(_superagentXml2jsparser);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parser = _xml2js2.default.Parser({
    explicitArray: false
});

//import querystring from 'querystring'

var bookType = new _graphql.GraphQLObjectType({
    name: 'Book',
    fields: function fields() {
        return {
            id: {
                type: _graphql.GraphQLInt,
                resolve: function resolve(book) {
                    return book.id;
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
                resolve: function resolve(book) {
                    return book.image_url;
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
                    //http://stackoverflow.com/questions/19327297/node-http-get-how-do-i-get-at-the-xml-returned-so-i-can-do-stuff-with-it

                    var options = {
                        hostname: "www.goodreads.com",
                        path: '/book/show/' + args.id + '/?format=xml&key=bJU4WwEpv8QaM42iR586YA'
                    };
                    return new _es6Promise.Promise(function (resolve, reject) {
                        var gsaReq = _http2.default.default.get(options, function (response) {
                            var completeResponse = '';
                            response.on('data', function (chunk) {
                                completeResponse += chunk;
                            });
                            response.on('end', function () {
                                parser.parseString(completeResponse, function (err, result) {
                                    resolve(result.GoodreadsResponse.book);
                                });
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
        };
    }
});

exports.default = queryType;