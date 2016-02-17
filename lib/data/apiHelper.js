'use strict';

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

var _api = require('../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//export async function getObjectFromUrl(url: string): Promise<Object> {
//  var dataString = await localUrlLoader.load(url);
//  var data = JSON.parse(dataString);
//  return objectWithId(data);
//}

var localUrlLoader = new _dataloader2.default(function (urls) {
  return Promise.all(urls.map(_api.getFromLocalUrl));
});