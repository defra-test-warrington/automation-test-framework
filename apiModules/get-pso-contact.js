
const {RequestPromise} = require('../common/RequestPromise')
const get_psocontactsdetails = (url,data) =>
    new Promise( (resolve, reject) => {

        var options = {
            method: 'Post',
            uri: url,
            time:true,
            body:data,
            json: true,
            resolveWithFullResponse: true           
        };

    
        RequestPromise( options )
        .then(function (response) {
            resolve(response);
        })
        .catch(function (err) {
            reject(err);
            console.log("Error Inside pso-contact module: "+err);
        });
    });
module.exports = {get_psocontactsdetails};