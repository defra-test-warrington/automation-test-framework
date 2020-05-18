
const {RequestPromise} = require('../common/RequestPromise')
const post_mapdata = (url,data) =>
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
            console.log("Error Inside mapdata module: "+err);
        });
    });
module.exports = {post_mapdata};