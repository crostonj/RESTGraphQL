'use strict';

var _graphql = require('graphql');

var _Promise = require('Promise');

var _Promise2 = _interopRequireDefault(_Promise);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

        _Axios2.default.get(options.host + options.path).then(function (response) {
            console.log(response);

            return response;
        }).catch(function (response) {
            console.log(response);

            return response;
        });
    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;