import DataLoader from 'dataloader';

import {
  getFromLocalUrl
} from '../api';

//export async function getObjectFromUrl(url: string): Promise<Object> {
//  var dataString = await localUrlLoader.load(url);
//  var data = JSON.parse(dataString);
//  return objectWithId(data);
//}


var localUrlLoader = new DataLoader(
  urls => Promise.all(urls.map(getFromLocalUrl))
);


