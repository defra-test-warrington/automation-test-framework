const axios = require('axios');
const baseRequest = ( _method, _url) =>
    new Promise((resolve, reject) => {
        axios({
            method : _method,
            url : _url
        })
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            reject(error);
        });
    });

module.exports = {baseRequest};    
