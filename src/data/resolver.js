
import { Promise } from 'es6-promise';
import xml2json from 'xml2js';
import http from 'http';
var parser = xml2json.Parser({
    explicitArray: false
});

/*http://itidev.us.nelnet.biz:10090/Nelnet/Commercial/QAJax/Inquiry/GetBorrowerInfo/528895646
http://itidev.us.nelnet.biz:10090/Nelnet/Commercial/QAJax/Inquiry/GetBorrowerAddress/528895646/All
http://itidev.us.nelnet.biz:10090/Nelnet/Commercial/QAJax/Inquiry/GetBorrowerPhone/528895646/All
http://itidev.us.nelnet.biz:10090/Nelnet/Commercial/QAJax/Inquiry/GetBorrowerEmail/528895646/All
http://itidev.us.nelnet.biz:10090/Nelnet/Commercial/QAJax/Inquiry/GetBorrowerHistory/528895646/All/All/100
*/


let Resolver = (id) => {

    let options = {
        //hostname: "itidev.us.nelnet.biz",
        hostname: "10.80.1.253",
        port: 10090
    };


    let GetPromise = (options, id, path) => {
        return new Promise((resolve, reject) => {
            http.get(options, (response) => {
                var completeResponse = '';
                response.on('data', (chunk) => {
                    completeResponse += chunk;
                });
                response.on('end', () => {
                    parser.parseString(completeResponse, (err, result) => {
                        let pathElements = path.split('.');
                        result[pathElements[0]][pathElements[1]]._borrower_id = id;
                        resolve(result[pathElements[0]][pathElements[1]]);
                    });
                });
            }).on('error', (e) => { });
        });
    };

    let Borrower = () => {
        options.path = '/Nelnet/Commercial/QAJax/Inquiry/GetBorrowerInfo/' + id;
        return GetPromise(options, id, 'GETBORROWERINFOResult.BORROWERINFO');
    }

    let Address = () => {
         options.path = '/Nelnet/Commercial/QAJax/Inquiry/GetBorrowerAddress/' + id + '/All';
        return GetPromise(options, id, 'getborroweraddressResult.ADDRESS');
    };

    let Phone = () => {
         options.path = '/Nelnet/Commercial/QAJax/Inquiry/GetBorrowerPhone/' + id+ '/All';
        return GetPromise(options, id, 'getborrowerphoneResult.PHONE');
    };
     let History = (count) => {
         options.path = '/Nelnet/Commercial/QAJax/Inquiry/GetBorrowerHistory/' + id + '/All/All/' + count;
        return GetPromise(options, id, 'wsgbhisRTVBORRHISTORYResult.BORROWERHISTORY');
    };
    
    let Email = () => {
         options.path = '/Nelnet/Commercial/QAJax/Inquiry/GetBorrowerEmail/' + id + '/All';
        return GetPromise(options, id, 'getborroweremailResult.EMAIL');
    };
    return {
        Borrower,
        Address,
        Phone,
        Email,
        History
    };
}

export default Resolver;