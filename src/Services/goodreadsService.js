var http = require('http');
var xml2json = require('xml2js');
var parser = xml2json.Parser({
    explicitArray: false
});

import {
GraphQLObjectType,
GraphQLNonNull,
GraphQLSchema,
GraphQLInt,
GraphQLList,
GraphQLString
} from 'graphql';

import Promise from 'Promise';
import axios from 'Axios'

var goodreadsService = function () {

    var getBookById = function (id) {
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=bJU4WwEpv8QaM42iR586YA'
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

    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;