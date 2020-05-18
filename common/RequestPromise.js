const rp = require('request-promise');
const RequestPromise = ( options ) =>
    new Promise((resolve, reject) => {
        rp( options )
        .then(function (response) {
            resolve(response);
        })
        .catch(function (err) {
            reject(err);
        });
    });

module.exports = {RequestPromise};    
