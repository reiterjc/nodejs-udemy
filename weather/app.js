const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=6000%20american%20parkway',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});