'use strict';

var http = require('http');
var xml2json = require('xml2js');
var parser = xml2json.Parser({
    explicitArray: false
});

var goodreadsService = function goodreadsService() {

    var getBookById = function getBookById(id) {
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=bJU4WwEpv8QaM42iR586YA'
        };

        var callback = function callback(response) {
            var str = '';

            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                console.log(str);

                parser.parseString(str, function (err, result) {
                    return result.GoodreadsResponse.book;
                });
            });
        };

        http.request(options, callback).end();
    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;