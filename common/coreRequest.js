const axios = require('axios');
debugger
const coreRequest = ( configs ) =>
    new Promise((resolve, reject) => {
        axios( configs )
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(error);
        });
    });

module.exports = {coreRequest};    
