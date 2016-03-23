import { Promise } from 'es6-promise';
import xml2json from 'xml2js';
import axios  from 'axios';
var parser = xml2json.Parser({
    explicitArray: false
});

let mutator = (id) => {
    
    let options = {
        //hostname: "itidev.us.nelnet.biz",
        hostname: "dev.intsvc.nelnet.net",
        port: 4112
    };

    let requestguid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) =>  {
        let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });

     let GetPromise = (options, data) => {
         
         
         var config = {
            url: 'http://' + options.path,
            headers: {'ContentType': 'application/json'},
            data: data
        };

        return axios.post(config)
            .then(function (res) {
               return res.data;
            })
            .catch(function (res) {
              
            });
    };

    let borrower = () =>
    {
        //http://dev.intsvc.nelnet.net:4112/help
        //api/v2/addborrowerhistorynote/{applicationId}/{clientId}/{updateUserDomain}/{updateUsername}/{id}/{requestId}
        
    }
    
    let History = (data) => {
         options.path = '/api/v2/addborrowerhistorynote/1/1/US/jcroston/' + id + '/' + requestguid;
        return GetPromise(options, id, data, '');
    }
    
    return{
        borrower,
        History
    }
}